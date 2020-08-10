/// <reference types="node" />
import Serverless from "serverless";
import { ServerlessAzureConfig, ServerlessAzureFunctionConfig } from "../models/serverless";
import { StdioOptions } from "child_process";
export interface FunctionMetadata {
    entryPoint: string;
    handlerPath: string;
    params: {
        functionJson: any;
    };
}
export interface ServerlessSpawnOptions {
    serverless: Serverless;
    command: string;
    commandArgs: string[];
    silent?: boolean;
    stdio?: StdioOptions;
    commandName?: string;
    cwd?: string;
    onSigInt?: () => void;
}
export declare class Utils {
    static getFunctionMetaData(functionName: string, serverless: Serverless, offlineMode?: boolean): Promise<FunctionMetadata>;
    static getEntryPointAndHandlerPath(handler: string, config: ServerlessAzureConfig): {
        entryPoint: string;
        handlerPath: string;
    };
    /**
     * Take the first `substringSize` characters from each string and return as one string
     * @param substringSize Size of substring to take from beginning of each string
     * @param args Strings to take substrings from
     */
    static appendSubstrings(substringSize: number, ...args: string[]): string;
    static get(object: any, key: string, defaultValue?: any): any;
    static getTimestampFromName(name: string): string;
    static getIncomingBindingConfig(functionConfig: ServerlessAzureFunctionConfig): import("../models/serverless").ServerlessAzureFunctionBindingConfig;
    static getOutgoingBindingConfig(functionConfig: ServerlessAzureFunctionConfig): import("../models/serverless").ServerlessAzureFunctionBindingConfig;
    /**
     * Runs an operation with auto retry policy
     * @param operation The operation to run
     * @param maxRetries The max number of retries
     * @param retryWaitInterval The time to wait between retries
     */
    static runWithRetry<T>(operation: (retry?: number) => Promise<T>, maxRetries?: number, retryWaitInterval?: number): Promise<T>;
    /**
     * Waits for the specified amount of time.
     * @param time The amount of time to wait (default = 1000ms)
     */
    static wait(time?: number): Promise<unknown>;
    /**
     * Wait for user input and return it
     */
    static waitForUserInput(): Promise<string>;
    static spawnLocal(options: ServerlessSpawnOptions): Promise<void>;
    static spawn(options: ServerlessSpawnOptions): Promise<void>;
}
