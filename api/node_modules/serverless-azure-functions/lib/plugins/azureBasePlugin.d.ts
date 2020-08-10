import Serverless from "serverless";
import { ServerlessAzureConfig, ServerlessCliCommand, ServerlessCommandMap, ServerlessHookMap } from "../models/serverless";
import { LoggingService, LogLevel } from "../services/loggingService";
export declare abstract class AzureBasePlugin<TOptions = Serverless.Options> {
    protected serverless: Serverless;
    protected options: TOptions;
    hooks: ServerlessHookMap;
    protected config: ServerlessAzureConfig;
    protected loggingService: LoggingService;
    protected commands: ServerlessCommandMap;
    protected processedCommands: ServerlessCliCommand[];
    constructor(serverless: Serverless, options: TOptions);
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
    protected getOption(key: string, defaultValue?: any): string;
}
