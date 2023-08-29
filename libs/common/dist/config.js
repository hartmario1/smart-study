"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initConfig = void 0;
const tsyringe_1 = require("tsyringe");
const symbols_1 = require("./symbols");
const initConfig = () => {
    const config = {
        rootDomain: process.env.ROOT_DOMAIN,
        apiDomain: process.env.API_DOMAIN,
        dashDomain: process.env.DASH_DOMAIN,
        discordClientId: process.env.DISCORD_CLIENT_ID,
        discordClientSecret: process.env.DISCORD_CLIENT_SECRET,
        discordToken: process.env.DISCORD_TOKEN,
        discordScopes: process.env.DISCORD_SCOPES.split(',').join(' '),
        dbUrl: process.env.DB_URL,
        nodeEnv: process.env.NODE_ENV ?? 'dev',
        encryptionKey: process.env.ENCRYPTION_KEY,
        cors: process.env.CORS?.split(',') ?? '*',
        stripeSecretKey: process.env.STRIPE_SECRET_KEY,
        stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
        stripePriceId: process.env.STRIPE_PRICE_ID
    };
    tsyringe_1.container.register(symbols_1.kConfig, { useValue: config });
    return config;
};
exports.initConfig = initConfig;
//# sourceMappingURL=config.js.map