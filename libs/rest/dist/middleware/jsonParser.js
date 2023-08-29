"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonParser = void 0;
const boom_1 = require("@hapi/boom");
const jsonParser = (wantRaw = false) => async (req, _, next) => {
    if (!req.headers['content-type']?.startsWith('application/json')) {
        return next((0, boom_1.badRequest)('Unexpected content type'));
    }
    req.setEncoding('utf8');
    try {
        let data = '';
        for await (const chunk of req) {
            data += chunk;
        }
        if (wantRaw) {
            req.rawBody = data;
        }
        req.body = JSON.parse(data);
        await next();
    }
    catch (e) {
        void next((0, boom_1.badData)(e?.toString()));
    }
};
exports.jsonParser = jsonParser;
//# sourceMappingURL=jsonParser.js.map