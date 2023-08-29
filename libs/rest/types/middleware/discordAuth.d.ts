import type { Request, Response, NextHandler } from 'polka';
import type { APIUser } from 'discord-api-types/v8';
declare module 'polka' {
    interface Request {
        user?: APIUser & {
            sub: boolean;
        };
    }
}
export declare const discordAuth: (fallthrough?: boolean) => (req: Request, _: Response, next: NextHandler) => Promise<void>;
//# sourceMappingURL=discordAuth.d.ts.map