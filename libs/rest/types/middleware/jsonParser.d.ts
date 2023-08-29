import type { Request, Response, NextHandler } from 'polka';
declare module 'polka' {
    interface Request {
        rawBody?: string;
    }
}
export declare const jsonParser: (wantRaw?: boolean) => (req: Request, _: Response, next: NextHandler) => Promise<void>;
//# sourceMappingURL=jsonParser.d.ts.map