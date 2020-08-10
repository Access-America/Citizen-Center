import { TokenCredentialsBase } from "@azure/ms-rest-nodeauth";
import Serverless from "serverless";
import { CliCommandFactory } from "../config/cliCommandFactory";
import { ServerlessAzureConfig, ServerlessAzureOptions } from "../models/serverless";
import { ConfigService } from "./configService";
import { LoggingService, LogLevel } from "./loggingService";
export declare abstract class BaseService {
    protected serverless: Serverless;
    protected options: ServerlessAzureOptions;
    protected baseUrl: string;
    protected serviceName: string;
    protected credentials: TokenCredentialsBase;
    protected subscriptionId: string;
    protected resourceGroup: string;
    protected deploymentName: string;
    protected artifactName: string;
    protected storageAccountName: string;
    protected config: ServerlessAzureConfig;
    protected configService: ConfigService;
    protected loggingService: LoggingService;
    protected cliCommandFactory: CliCommandFactory;
    protected constructor(serverless: Serverless, options?: ServerlessAzureOptions, authenticate?: boolean);
    /**
     * Get the access token from credentials token cache
     */
    protected getAccessToken(): Promise<string>;
    /**
     * Sends an API request using axios HTTP library
     * @param method The HTTP method
     * @param relativeUrl The relative url
     * @param options Additional HTTP options including headers, etc.
     */
    protected sendApiRequest(method: string, relativeUrl: string, options?: any): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Uploads the specified file via HTTP request
     * @param requestOptions The HTTP request options
     * @param filePath The local file path
     */
    protected sendFile(requestOptions: any, filePath: any): Promise<unknown>;
    /**
     * Log message to Serverless CLI
     * @param message Message to log
     */
    protected log(message: string, logLevel?: LogLevel): void;
    /**
     * Log error message to Serverless CLI
     * @param message Error message to log
     */
    protected error(message: string): void;
    /**
     * Log warning message to Serverless CLI
     * @param message Warning message to log
     */
    protected warn(message: string): void;
    /**
     * Log info message to Serverless CLI
     * @param message Info message to log
     */
    protected info(message: string): void;
    /**
     * Log debug message to Serverless CLI
     * @param message Debug message to log
     */
    protected debug(message: string): void;
    protected prettyPrint(object: any): void;
    protected stringify(object: any): string;
    protected getOption(key: string, defaultValue?: any): any;
}
