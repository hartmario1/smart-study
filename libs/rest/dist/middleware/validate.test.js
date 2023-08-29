"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const boom_1 = require("@hapi/boom");
const joi_1 = (0, tslib_1.__importDefault)(require("joi"));
const validate_1 = require("./validate");
let next;
beforeEach(() => {
    next = jest.fn();
});
const makeMockedRequest = (data) => data;
const mockedResponse = {};
class ValidationError extends Error {
}
test('invalid schema', () => {
    const validator = (0, validate_1.validate)(joi_1.default
        .object()
        .keys({
        foo: joi_1.default
            .string()
            .required()
    })
        .required());
    void validator(makeMockedRequest({ body: { foo: 1 } }), mockedResponse, next);
    expect(next).toHaveBeenCalledWith((0, boom_1.boomify)(new ValidationError('"foo" must be a string'), { statusCode: 422 }));
});
test('valid schema', () => {
    const validator = (0, validate_1.validate)(joi_1.default.object()
        .keys({ foo: joi_1.default.string().required(), bar: joi_1.default.number().default(5) })
        .required());
    const req = { body: { foo: 'bar' } };
    void validator(makeMockedRequest(req), mockedResponse, next);
    expect(next).toHaveBeenCalledWith();
    expect(req).toHaveProperty('body', { foo: 'bar', bar: 5 });
});
//# sourceMappingURL=validate.test.js.map