"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const tsyringe_1 = require("tsyringe");
const injection_1 = require("@soulkiller/injection");
exports.default = (name) => {
    const config = tsyringe_1.container.resolve(injection_1.kConfig);
    return (0, winston_1.createLogger)({
        format: winston_1.format.combine(winston_1.format.errors({ stack: true }), winston_1.format.label({ label: name.toUpperCase() }), winston_1.format.timestamp({ format: 'YYYY/MM/DD HH:mm:ss' }), winston_1.format.printf(info => {
            const { timestamp, label, level, message, topic, ...rest } = info;
            const extra = Object.keys(rest).length ? `\n${JSON.stringify(rest, null, 2)}` : '';
            return `[${timestamp}][${label}][${level.toUpperCase()}][${topic}]: ${message}${extra}`;
        })),
        transports: [
            new winston_1.transports.Console({
                format: winston_1.format.colorize({ level: true }),
                level: config.nodeEnv === 'prod' ? 'info' : 'debug'
            })
        ]
    });
};
//# sourceMappingURL=index.js.map