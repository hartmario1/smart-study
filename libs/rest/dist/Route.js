"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
const path_1 = require("path");
class Route {
    constructor() {
        this.middleware = [];
    }
    static pathToRouteInfo(path) {
        const method = (0, path_1.basename)(path, '.js');
        if (!["get", "post", "put", "delete", "patch"].includes(method)) {
            return null;
        }
        path = path.replace(/\[([a-zA-Z]+)\]/g, ':$1').replace(/\\/g, '/');
        if (!path.startsWith('/')) {
            path = `/${path}`;
        }
        return {
            path: (0, path_1.dirname)(path),
            method
        };
    }
    register(info, server) {
        server[info.method](`${info.path.startsWith('/') ? '' : '/'}${info.path}`, ...this.middleware, async (req, res, next) => {
            try {
                await this.handle(req, res, next);
            }
            catch (e) {
                void next(e);
            }
        });
    }
}
exports.Route = Route;
//# sourceMappingURL=Route.js.map