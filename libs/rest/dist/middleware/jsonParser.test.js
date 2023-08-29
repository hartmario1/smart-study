"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("reflect-metadata");
const supertest_1 = (0, tslib_1.__importDefault)(require("supertest"));
const __1 = require("../");
const tsyringe_1 = require("tsyringe");
const injection_1 = require("@soulkiller/injection");
tsyringe_1.container.register(injection_1.kLogger, {
    useValue: {
        info: jest.fn(),
        error: jest.fn(),
        debug: jest.fn(),
        warn: jest.fn()
    }
});
const mockedHandler = jest.fn((_, res) => res.end());
afterEach(() => mockedHandler.mockClear());
const app = (0, __1.createApp)();
app.post('/test', (0, __1.jsonParser)(), mockedHandler);
app.listen(0);
afterAll(() => app.server.close());
test('missing content type', async () => {
    await (0, supertest_1.default)(app.server)
        .post('/test')
        .expect(400);
    expect(mockedHandler).not.toHaveBeenCalled();
});
test('invalid data', async () => {
    await (0, supertest_1.default)(app.server)
        .post('/test')
        .type('json')
        .send('foo')
        .expect(422);
    expect(mockedHandler).not.toHaveBeenCalled();
});
test('valid data', async () => {
    await (0, supertest_1.default)(app.server)
        .post('/test')
        .type('json')
        .send({ foo: 'bar' })
        .expect(200);
    expect(mockedHandler).toHaveBeenCalledTimes(1);
    expect(mockedHandler.mock.calls[0][0]).toHaveProperty('body');
});
//# sourceMappingURL=jsonParser.test.js.map