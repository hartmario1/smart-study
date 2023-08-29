"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
const injection_1 = require("@soulkiller/injection");
const crypto_1 = require("crypto");
const tsyringe_1 = require("tsyringe");
const encrypt = (data) => {
    const { encryptionKey } = tsyringe_1.container.resolve(injection_1.kConfig);
    const key = Buffer.from(encryptionKey, 'base64');
    const iv = (0, crypto_1.randomBytes)(16);
    const cipher = (0, crypto_1.createCipheriv)('aes-256-ctr', key, iv);
    return Buffer
        .concat([iv, cipher.update(data, 'utf8'), cipher.final()])
        .toString('base64');
};
exports.encrypt = encrypt;
const decrypt = (data) => {
    const { encryptionKey } = tsyringe_1.container.resolve(injection_1.kConfig);
    const buffer = Buffer.from(data, 'base64');
    const key = Buffer.from(encryptionKey, 'base64');
    const iv = buffer.slice(0, 16);
    const decipher = (0, crypto_1.createDecipheriv)('aes-256-ctr', key, iv);
    return Buffer
        .concat([decipher.update(buffer.slice(16, buffer.length)), decipher.final()])
        .toString('utf8');
};
exports.decrypt = decrypt;
//# sourceMappingURL=crypt.js.map