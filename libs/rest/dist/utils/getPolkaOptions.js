"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPolkaOptions = void 0;
const boom_1 = require("@hapi/boom");
const sendBoom_1 = require("./sendBoom");
const http_1 = require("http");
const tsyringe_1 = require("tsyringe");
const injection_1 = require("@soulkiller/injection");
const getPolkaOptions = () => {
    const logger = tsyringe_1.container.resolve(injection_1.kLogger);
    return {
        onError(e, _, res) {
            res.setHeader('content-type', 'application/json');
            const boom = (0, boom_1.isBoom)(e) ? e : new boom_1.Boom(e);
            logger.error(boom.message, { topic: 'REQUEST INTERNAL ERRROR', ...boom });
            return (0, sendBoom_1.sendBoom)(boom, res);
        },
        onNoMatch(_, res) {
            res.setHeader('content-type', 'application/json');
            return (0, sendBoom_1.sendBoom)((0, boom_1.notFound)(), res);
        },
        server: (0, http_1.createServer)()
    };
};
exports.getPolkaOptions = getPolkaOptions;
//# sourceMappingURL=getPolkaOptions.js.map