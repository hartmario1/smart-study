"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boom_1 = require("@hapi/boom");
const http2_1 = require("http2");
const sendBoom_1 = require("./sendBoom");
jest.mock('http2');
const MockedResponse = http2_1.Http2ServerResponse;
afterEach(() => {
    jest.clearAllMocks();
});
test('with bad request', () => {
    const err = (0, boom_1.badRequest)();
    const res = new MockedResponse();
    (0, sendBoom_1.sendBoom)(err, res);
    expect(res.statusCode).toBe(400);
    expect(res.setHeader).toHaveBeenCalledTimes(0);
    expect(res.end).toHaveBeenCalledWith('{"statusCode":400,"error":"Bad Request","message":"Bad Request"}');
});
test('with internal server error', () => {
    const err = (0, boom_1.internal)();
    const res = new MockedResponse();
    (0, sendBoom_1.sendBoom)(err, res);
    expect(res.statusCode).toBe(500);
    expect(res.setHeader).toHaveBeenCalledTimes(0);
    expect(res.end).toHaveBeenCalledWith('{"statusCode":500,"error":"Internal Server Error","message":"An internal server error occurred"}');
});
test('with headers', () => {
    const err = (0, boom_1.unauthorized)('foo', ['abc', 'def']);
    const res = new MockedResponse();
    (0, sendBoom_1.sendBoom)(err, res);
    expect(res.statusCode).toBe(401);
    expect(res.setHeader).toHaveBeenCalledTimes(1);
    expect(res.setHeader).toHaveBeenCalledWith('WWW-Authenticate', 'abc, def');
    expect(res.end).toHaveBeenCalledWith('{"statusCode":401,"error":"Unauthorized","message":"foo"}');
});
//# sourceMappingURL=sendBoom.test.js.map