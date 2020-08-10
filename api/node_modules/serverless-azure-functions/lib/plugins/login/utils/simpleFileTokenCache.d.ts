import * as adal from "adal-node";
export declare class SimpleFileTokenCache implements adal.TokenCache {
    private tokenPath;
    private entries;
    private subscriptions;
    constructor(tokenPath?: string);
    add(entries: any[], callback?: (err?: Error, result?: boolean) => void): void;
    remove(entries: any[], callback?: (err?: Error, result?: null) => void): void;
    find(query: any, callback: (err?: Error, result?: any[]) => void): any[];
    addSubs(subscriptions: any): void;
    clear(callback: any): void;
    isEmpty(): boolean;
    first(): any;
    listSubscriptions(): any[];
    private load;
    save(): void;
}
