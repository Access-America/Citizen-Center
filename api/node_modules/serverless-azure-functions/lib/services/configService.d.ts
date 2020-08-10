import Serverless from "serverless";
import { CliCommand } from "../config/cliCommandFactory";
import { BuildMode, FunctionAppOS, Runtime } from "../config/runtime";
import { DeploymentConfig, ServerlessAzureConfig, ServerlessAzureFunctionConfig } from "../models/serverless";
/**
 * Handles all Service Configuration
 */
export declare class ConfigService {
    private serverless;
    private options;
    /** Configuration for service */
    private config;
    /** CLI Command Factory */
    private cliCommandFactory;
    constructor(serverless: Serverless, options: Serverless.Options);
    /**
     * Get Azure Provider Configuration
     */
    getConfig(): ServerlessAzureConfig;
    /**
     * Name of Azure Region for deployment
     */
    getRegion(): string;
    /**
     * Name of current deployment stage
     */
    getStage(): string;
    /**
     * Prefix for service
     */
    getPrefix(): string;
    /**
     * Name of current resource group
     */
    getResourceGroupName(): string;
    /**
     * Azure Subscription ID
     */
    getSubscriptionId(): string;
    /**
     * Name of current deployment
     */
    getDeploymentName(): string;
    getDeploymentConfig(): DeploymentConfig;
    /**
     * Get rollback-configured artifact name. Contains `-t{timestamp}`
     * Takes name of deployment and replaces `rg-deployment` or `deployment` with `artifact`
     */
    getArtifactName(deploymentName?: string): string;
    /**
     * Function configuration from serverless.yml
     */
    getFunctionConfig(): {
        [functionName: string]: ServerlessAzureFunctionConfig;
    };
    /**
     * Name of file containing serverless config
     */
    getConfigFile(): string;
    /**
     * Name of Function App Service
     */
    getServiceName(): string;
    /**
     * Operating system for function app
     */
    getOs(): FunctionAppOS;
    /**
     * Function app configured to run on Python
     */
    isPythonTarget(): boolean;
    /**
     * Function app configured to run on Node
     */
    isNodeTarget(): boolean;
    /**
     * Function app configured to run on Linux
     */
    isLinuxTarget(): boolean;
    getCommand(key: string): CliCommand;
    getCompilerCommand(runtime: Runtime, mode: BuildMode): CliCommand;
    shouldCompileBeforePublish(): boolean;
    /**
     * Set any default values required for service
     * @param config Current Serverless configuration
     */
    private setDefaultValues;
    /**
     * Overwrite values for resourceGroup, prefix, region and stage
     * in config if passed through CLI
     */
    private initializeConfig;
    /**
     * Get timestamp from `packageTimestamp` serverless variable
     * If not set, create timestamp, set variable and return timestamp
     */
    private getTimestamp;
    /**
     * Get value of option from Serverless CLI
     * @param key Key of option
     * @param defaultValue Default value if key not found in options object
     */
    protected getOption(key: string, defaultValue?: any): any;
    /**
     * Get variable value from Serverless variables
     * @param key Key for variable
     * @param defaultValue Default value if key not found in variable object
     */
    protected getVariable(key: string, defaultValue?: any): any;
    private registerCliCommands;
}
