/// <reference types="node" />
export declare class State {
    readonly redirectUri: string;
    static from(data: string): State;
    private nonce;
    private createdAt;
    constructor(redirectUri: string);
    toString(): string;
    toBytes(): Buffer;
}
//# sourceMappingURL=State.d.ts.map