export interface Config {
    rootDomain: string;
    apiDomain: string;
    dashDomain: string;
    discordClientId: `${bigint}`;
    discordClientSecret: string;
    discordToken: string;
    discordScopes: string;
    dbUrl: string;
    nodeEnv: string;
    encryptionKey: string;
    cors: string | string[];
    stripeSecretKey: string;
    stripeWebhookSecret: string;
    stripePriceId: string;
}
export declare const initConfig: () => Config;
//# sourceMappingURL=config.d.ts.map