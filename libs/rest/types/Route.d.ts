import type { Request, Middleware, Response, NextHandler, Polka } from 'polka';
export declare const enum RouteMethod {
    get = "get",
    post = "post",
    put = "put",
    delete = "delete",
    patch = "patch"
}
export interface RouteInfo {
    path: string;
    method: RouteMethod;
}
export declare abstract class Route {
    static pathToRouteInfo(path: string): RouteInfo | null;
    readonly middleware: Middleware[];
    abstract handle(req: Request, res: Response, next?: NextHandler): any;
    register(info: RouteInfo, server: Polka): void;
}
//# sourceMappingURL=Route.d.ts.map