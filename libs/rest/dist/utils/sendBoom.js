"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendBoom = void 0;
const sendBoom = (e, res) => {
    res.statusCode = e.output.statusCode;
    for (const [header, value] of Object.entries(e.output.headers)) {
        res.setHeader(header, value);
    }
    res.end(JSON.stringify(e.output.payload));
};
exports.sendBoom = sendBoom;
//# sourceMappingURL=sendBoom.js.map