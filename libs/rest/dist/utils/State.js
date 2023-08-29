"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
const crypto_1 = require("crypto");
class State {
    constructor(redirectUri) {
        this.redirectUri = redirectUri;
        this.nonce = (0, crypto_1.randomBytes)(16);
        this.createdAt = new Date();
    }
    static from(data) {
        const bytes = Buffer.from(data, 'base64');
        const nonce = bytes.slice(0, 16);
        const createdAt = new Date(bytes.readUInt32LE(16));
        const redirectURL = bytes.slice(20).toString();
        const state = new this(redirectURL);
        state.nonce = nonce;
        state.createdAt = createdAt;
        return state;
    }
    toString() {
        return this.toBytes().toString('base64');
    }
    toBytes() {
        const time = Buffer.allocUnsafe(4);
        time.writeUInt32LE(Math.floor(this.createdAt.getTime() / 1000));
        return Buffer.concat([this.nonce, time, Buffer.from(this.redirectUri)]);
    }
}
exports.State = State;
//# sourceMappingURL=State.js.map