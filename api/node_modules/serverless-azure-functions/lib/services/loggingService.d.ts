import Serverless from "serverless";
import { ServerlessAzureOptions } from "../models/serverless";
/**
 * Log Level for service, in order from least verbose to most
 */
export declare enum LogLevel {
    /** Only log error messages */
    ERROR = 1,
    /** Only log warnings and error messages */
    WARN = 2,
    /** Only log info, warnings and error messages */
    INFO = 3,
    /** Log everything */
    DEBUG = 4
}
export declare class LoggingService {
    private serverless;
    private options;
    /** Logging level for service. Specified by 'verbose' or 'v' flag in Serverless Options.
     * Defaults to 'info' */
    private logLevel;
    constructor(serverless: Serverless, options: ServerlessAzureOptions);
    /**
     * Logs any message with a level (error, warn, info, debug) less than or equal
     * to the logging level set in the constructor (defaults to info)
     * @param message Message to log
     * @param logLevel Log Level
     */
    log(message: string, logLevel?: LogLevel): void;
    /**
     * Log an error message with prefix '[ERROR] '
     * @param message Error message
     */
    error(message: string): void;
    /**
     * Log a warning message with prefix '[WARN] '
     * @param message Warning message
     */
    warn(message: string): void;
    /**
     * Log an info message. Does not include any prefix, as info is default behavior
     * @param message Info message
     */
    info(message: string): void;
    /**
     * Log a debug message prefix '[DEBUG] '
     * @param message Debug message
     */
    debug(message: string): void;
}
