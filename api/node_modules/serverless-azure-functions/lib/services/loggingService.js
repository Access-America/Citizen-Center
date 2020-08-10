"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../shared/utils");
/**
 * Log Level for service, in order from least verbose to most
 */
var LogLevel;
(function (LogLevel) {
    /** Only log error messages */
    LogLevel[LogLevel["ERROR"] = 1] = "ERROR";
    /** Only log warnings and error messages */
    LogLevel[LogLevel["WARN"] = 2] = "WARN";
    /** Only log info, warnings and error messages */
    LogLevel[LogLevel["INFO"] = 3] = "INFO";
    /** Log everything */
    LogLevel[LogLevel["DEBUG"] = 4] = "DEBUG";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var LoggingService = /** @class */ (function () {
    function LoggingService(serverless, options) {
        this.serverless = serverless;
        this.options = options;
        var verbosity = utils_1.Utils.get(options, "verbose");
        var defaultLogLevel = LogLevel.INFO;
        if (verbosity === true) {
            // --verbose flag is passed with no specified level
            this.logLevel = LogLevel.DEBUG;
        }
        else if (typeof verbosity === "string") {
            // --verbose {level} is passed
            this.logLevel = utils_1.Utils.get({
                "error": LogLevel.ERROR,
                "warn": LogLevel.WARN,
                "info": LogLevel.INFO,
                "debug": LogLevel.DEBUG,
                "": LogLevel.DEBUG
            }, verbosity.toLowerCase(), defaultLogLevel);
        }
        else {
            // --verbose not passed, use default
            this.logLevel = defaultLogLevel;
        }
    }
    /**
     * Logs any message with a level (error, warn, info, debug) less than or equal
     * to the logging level set in the constructor (defaults to info)
     * @param message Message to log
     * @param logLevel Log Level
     */
    LoggingService.prototype.log = function (message, logLevel) {
        if (logLevel === void 0) { logLevel = LogLevel.INFO; }
        if (logLevel <= this.logLevel) {
            this.serverless.cli.log(message);
        }
    };
    /**
     * Log an error message with prefix '[ERROR] '
     * @param message Error message
     */
    LoggingService.prototype.error = function (message) {
        this.log("[ERROR] " + message, LogLevel.ERROR);
    };
    /**
     * Log a warning message with prefix '[WARN] '
     * @param message Warning message
     */
    LoggingService.prototype.warn = function (message) {
        this.log("[WARN] " + message, LogLevel.WARN);
    };
    /**
     * Log an info message. Does not include any prefix, as info is default behavior
     * @param message Info message
     */
    LoggingService.prototype.info = function (message) {
        this.log(message, LogLevel.INFO);
    };
    /**
     * Log a debug message prefix '[DEBUG] '
     * @param message Debug message
     */
    LoggingService.prototype.debug = function (message) {
        this.log("[DEBUG] " + message, LogLevel.DEBUG);
    };
    return LoggingService;
}());
exports.LoggingService = LoggingService;
