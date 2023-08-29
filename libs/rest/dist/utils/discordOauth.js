"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.discordOAuth2 = void 0;
const tslib_1 = require("tslib");
const injection_1 = require("@soulkiller/injection");
const tsyringe_1 = require("tsyringe");
const boom_1 = require("@hapi/boom");
const node_fetch_1 = (0, tslib_1.__importDefault)(require("node-fetch"));
const discordOAuth2 = async (req, _, next) => {
    const config = tsyringe_1.container.resolve(injection_1.kConfig);
    const logger = tsyringe_1.container.resolve(injection_1.kLogger);
    const form = new URLSearchParams({
        client_id: config.discordClientId,
        client_secret: config.discordClientSecret,
        redirect_uri: `${config.apiDomain}/api/auth/discord/callback`,
        scope: config.discordScopes
    });
    const code = req.query?.code;
    if (code) {
        form.append('grant_type', 'authorization_code');
        form.append('code', code);
    }
    else {
        form.append('grant_type', 'refresh_token');
        form.append('refresh_token', req.body.refresh_token);
    }
    const result = await (0, node_fetch_1.default)('https://discord.com/api/v8/oauth2/token', {
        method: 'POST',
        body: form.toString(),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    const oauthResponse = await result.json();
    if (!result.ok) {
        logger.warn('Recieved weird discord data', {
            topic: `${code ? 'CALLBACK' : 'REFRESH'} OAUTH BAD DATA`,
            data: oauthResponse,
            userId: req.user.id
        });
        return next((0, boom_1.internal)());
    }
    const { scope: returnedScope } = oauthResponse;
    if (returnedScope !== config.discordScopes) {
        return next((0, boom_1.forbidden)(`Expected scope "${config.discordScopes}" but received scope "${returnedScope}"`));
    }
    return oauthResponse;
};
exports.discordOAuth2 = discordOAuth2;
//# sourceMappingURL=discordOauth.js.map