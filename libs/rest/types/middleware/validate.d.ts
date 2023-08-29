import type { AnySchema } from 'joi';
import type { Request, Response, NextHandler } from 'polka';
declare type ValidateMiddlewareProp = 'body' | 'query' | 'params' | 'headers' | 'body';
export declare const validate: (schema: AnySchema, prop?: ValidateMiddlewareProp) => (req: Request, _: Response, next: NextHandler) => import("polka").Promisable<void>;
export {};
//# sourceMappingURL=validate.d.ts.map