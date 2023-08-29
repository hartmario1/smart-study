"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.discordAuth = void 0;
const tslib_1 = require("tslib");
const node_fetch_1 = (0, tslib_1.__importDefault)(require("node-fetch"));
const boom_1 = require("@hapi/boom");
const cookie_1 = (0, tslib_1.__importDefault)(require("cookie"));
const tsyringe_1 = require("tsyringe");
const injection_1 = require("@soulkiller/injection");
const discordAuth = (fallthrough = false) => async (req, _, next) => {
    const sql = tsyringe_1.container.resolve(injection_1.kSql);
    const cookies = cookie_1.default.parse(req.headers.cookie ?? '');
    const token = cookies.access_token ?? req.headers.authorization;
    if (!token) {
        return next(fallthrough ? undefined : (0, boom_1.unauthorized)('missing authorization header', 'Bearer'));
    }
    const result = await (0, node_fetch_1.default)('https://discord.com/api/v8/users/@me', {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    if (result.ok) {
        req.user = await result.json();
        const [sub] = await sql `
      SELECT *
      FROM subscriptions
      WHERE user_id = ${req.user.id}
    `;
        req.user.sub = Boolean(sub);
    }
    return next(req.user || fallthrough ? undefined : (0, boom_1.unauthorized)('invalid discord access token'));
};
exports.discordAuth = discordAuth;
//# sourceMappingURL=discordAuth.js.map