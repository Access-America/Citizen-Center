import { FunctionEnvelope, Site } from "@azure/arm-appservice/esm/models";
import Serverless from "serverless";
import { FunctionAppHttpTriggerConfig } from "../models/functionApp";
import { BaseService } from "./baseService";
export declare class FunctionAppService extends BaseService {
    private static readonly retryCount;
    private static readonly retryInterval;
    private webClient;
    private blobService;
    constructor(serverless: Serverless, options: Serverless.Options);
    get(): Promise<Site>;
    getMasterKey(functionApp?: Site): Promise<any>;
    deleteFunction(functionApp: Site, functionName: string): Promise<import("axios").AxiosResponse<any>>;
    syncTriggers(functionApp: Site, properties: {
        [propertyName: string]: string;
    }): Promise<import("axios").AxiosResponse<any>>;
    cleanUp(functionApp: Site): Promise<any[]>;
    listFunctions(functionApp: Site): Promise<FunctionEnvelope[]>;
    /**
     * Gets the configuration of the specified function within the function app
     * @param functionApp The parent function app
     * @param functionName The name of hte function
     */
    getFunction(functionApp: Site, functionName: string): Promise<FunctionEnvelope>;
    uploadFunctions(functionApp: Site): Promise<any>;
    /**
     * create all necessary resources as defined in src/provider/armTemplates
     *    resource-group, storage account, app service plan, and app service at the minimum
     */
    deploy(): Promise<Site>;
    uploadZippedArtifactToFunctionApp(functionApp: Site, functionZipFile: string): Promise<void>;
    /**
     * Gets local path of packaged function app
     */
    getFunctionZipFile(): string;
    getDeploymentName(): string;
    updateFunctionAppSetting(functionApp: Site, setting: string, value: string): Promise<any>;
    getFunctionHttpTriggerConfig(functionApp: Site, functionConfig: FunctionEnvelope): FunctionAppHttpTriggerConfig;
    /**
     * Publish function app
     * @param functionApp Function App
     * @param functionZipFile Path to zipped function app file
     */
    private publish;
    private logFunctions;
    /**
     * Uploads artifact file to blob storage container
     */
    private uploadZippedArtifactToBlobStorage;
    /**
     * Retrieves the SCM domain from the list of enabled domains within the app
     * Note: The SCM domain exposes additional API calls from the standard REST APIs.
     * @param functionApp The function app / web site
     */
    private getScmDomain;
}
