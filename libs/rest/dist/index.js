"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const tslib_1 = require("tslib");
const polka_1 = (0, tslib_1.__importDefault)(require("polka"));
const getPolkaOptions_1 = require("./utils/getPolkaOptions");
const cors_1 = (0, tslib_1.__importDefault)(require("cors"));
const helmet_1 = (0, tslib_1.__importDefault)(require("helmet"));
const cookie_1 = (0, tslib_1.__importDefault)(require("cookie"));
const prom_client_1 = require("prom-client");
const tsyringe_1 = require("tsyringe");
const injection_1 = require("@soulkiller/injection");
const responseTimes = new prom_client_1.Histogram({
    name: 'http_request_duration_seconds',
    help: 'Duration of HTTP requests in seconds',
    labelNames: ['method', 'route', 'code'],
    buckets: [0.001, 0.005, 0.015, 0.05, 0.1, 0.2, 0.3, 0.4, 0.5]
});
const requestSizes = new prom_client_1.Histogram({
    name: 'http_request_size_bytes',
    help: 'Size of HTTP requests in bytes',
    labelNames: ['method', 'route', 'code'],
    buckets: [5, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000]
});
const responseSizes = new prom_client_1.Histogram({
    name: 'http_response_size_bytes',
    help: 'Size of HTTP response in bytes',
    labelNames: ['method', 'route', 'code'],
    buckets: [5, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000]
});
const createApp = () => {
    const logger = tsyringe_1.container.resolve(injection_1.kLogger);
    const config = tsyringe_1.container.resolve(injection_1.kConfig);
    return (0, polka_1.default)((0, getPolkaOptions_1.getPolkaOptions)()).use((0, cors_1.default)({
        origin: config.cors,
        credentials: true
    }), (0, helmet_1.default)({ contentSecurityPolicy: config.nodeEnv === 'prod' ? undefined : false }), (_, res, next) => {
        res.append = (header, value) => {
            const prev = res.getHeader(header);
            if (prev)
                value = Array.isArray(prev) ? prev.concat(value) : [prev].concat(value);
            res.setHeader(header, value);
        };
        res.redirect = redirect => {
            res.statusCode = 302;
            res.append('Location', redirect);
            res.append('Content-Length', 0);
        };
        res.cookie = (name, data, options) => {
            const value = cookie_1.default.serialize(name, data, options);
            res.append('Set-Cookie', value);
        };
        return next();
    }, (req, res, next) => {
        if (req.originalUrl !== '/metrics') {
            const endTimer = responseTimes.startTimer({ method: req.method.toUpperCase(), route: req.path });
            setTimeout(() => {
                endTimer();
                req.removeAllListeners('close');
            }, 15000);
            req.once('close', () => {
                const responseLength = parseInt((res.getHeader('content-length') ?? '0'), 10);
                requestSizes.observe({ method: req.method, route: req.path, code: res.statusCode }, parseInt(req.headers['content-length'] ?? '0', 10));
                responseSizes.observe({ method: req.method, route: req.path, code: res.statusCode }, responseLength);
                const end = endTimer({ code: res.statusCode });
                logger.info(`${req.method.toUpperCase()} ${req.originalUrl}`, {
                    topic: 'REQUEST COMPLETION',
                    time: end / 1000,
                    status: res.statusCode,
                    statusText: res.statusMessage,
                    body: req.body,
                    params: req.params,
                    query: req.query
                });
            });
        }
        return next();
    });
};
exports.createApp = createApp;
(0, tslib_1.__exportStar)(require("./middleware"), exports);
(0, tslib_1.__exportStar)(require("./utils"), exports);
(0, tslib_1.__exportStar)(require("./Route"), exports);
//# sourceMappingURL=index.js.map