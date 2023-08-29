"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const Route_1 = require("./Route");
describe('path to route info', () => {
    test('faulty parameters', () => {
        expect(Route_1.Route.pathToRouteInfo('foo')).toBe(null);
        expect(Route_1.Route.pathToRouteInfo('post.rs')).toBe(null);
    });
    test('POST root', () => {
        const route = Route_1.Route.pathToRouteInfo((0, path_1.join)('post.js'));
        expect(route).not.toBe(null);
        expect(route.path).toBe('/');
        expect(route.method).toBe('post');
    });
    test('GET subfolder', () => {
        const route = Route_1.Route.pathToRouteInfo((0, path_1.join)('foo', 'bar', 'get.js'));
        expect(route).not.toBe(null);
        expect(route.path).toBe('/foo/bar');
        expect(route.method).toBe('get');
    });
    test('PATCH subfolder with params', () => {
        const route = Route_1.Route.pathToRouteInfo((0, path_1.join)('ab', '[c]', 'patch.js'));
        expect(route).not.toBe(null);
        expect(route.path).toBe('/ab/:c');
        expect(route.method).toBe('patch');
    });
    test('PUT subfolder with params', () => {
        const route = Route_1.Route.pathToRouteInfo((0, path_1.join)('[abc]', 'def', 'ghi', 'put.js'));
        expect(route).not.toBe(null);
        expect(route.path).toBe('/:abc/def/ghi');
        expect(route.method).toBe('put');
    });
    test('DELETE subfolder with params', () => {
        const route = Route_1.Route.pathToRouteInfo((0, path_1.join)('wx', 'y', '[z]', 'delete.js'));
        expect(route).not.toBe(null);
        expect(route.path).toBe('/wx/y/:z');
        expect(route.method).toBe('delete');
    });
    test('multiple params', () => {
        const route = Route_1.Route.pathToRouteInfo((0, path_1.join)('a', 'b', '[c]', 'd', '[e]', 'get.js'));
        expect(route).not.toBe(null);
        expect(route.path).toBe('/a/b/:c/d/:e');
        expect(route.method).toBe('get');
    });
});
test('register', () => {
    class TestRoute extends Route_1.Route {
        handle() { }
    }
    const mockedServer = {
        get: jest.fn()
    };
    const route = new TestRoute();
    route.register({
        method: "get",
        path: '/api/test'
    }, mockedServer);
    expect(mockedServer.get).toHaveBeenCalledWith('/api/test', expect.any(Function));
});
//# sourceMappingURL=Route.test.js.map