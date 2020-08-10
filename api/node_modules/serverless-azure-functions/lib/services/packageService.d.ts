import Serverless from "serverless";
import { FunctionMetadata } from "../shared/utils";
import { BaseService } from "./baseService";
/**
 * Adds service packing support
 */
export declare class PackageService extends BaseService {
    constructor(serverless: Serverless, options: Serverless.Options);
    cleanUpServerlessDir(): void;
    /**
     * Creates the function.json binding files required for the serverless service
     */
    createBindings(offlineMode?: boolean): Promise<void>;
    /**
     * Prepares a serverless project for webpack and copies required files including
     * host.json and function.json files
     */
    prepareWebpack(): Promise<void>;
    /**
     * Cleans up generated function.json files after packaging has completed
     */
    cleanUp(): Promise<void>;
    /**
     * Creates the function.json for for the specified function
     */
    createBinding(functionName: string, functionMetadata: FunctionMetadata): Promise<void>;
    private getFunctionJson;
    private makeFunctionDir;
}
