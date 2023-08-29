"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const boom_1 = require("@hapi/boom");
const validate = (schema, prop = 'body') => (req, _, next) => {
    const result = schema.validate(req[prop]);
    if (result.error) {
        return next((0, boom_1.badData)(result.error.message));
    }
    req[prop] = result.value;
    return next();
};
exports.validate = validate;
//# sourceMappingURL=validate.js.map