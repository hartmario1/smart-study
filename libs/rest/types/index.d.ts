import { Request } from 'polka';
import cookie from 'cookie';
declare module 'http' {
    interface ServerResponse {
        append: (header: string, value: any) => void;
        redirect: (redirect: string) => void;
        cookie: (name: string, data: string, options?: cookie.CookieSerializeOptions) => void;
    }
}
export declare const createApp: () => import("polka").Polka<Request>;
export * from './middleware';
export * from './utils';
export * from './Route';
//# sourceMappingURL=index.d.ts.map