import type { Request, Response, NextHandler } from 'polka';
import type { RESTPostOAuth2AccessTokenResult } from 'discord-api-types/v8';
export declare const discordOAuth2: (req: Request, _: Response, next: NextHandler) => Promise<void | RESTPostOAuth2AccessTokenResult>;
//# sourceMappingURL=discordOauth.d.ts.map