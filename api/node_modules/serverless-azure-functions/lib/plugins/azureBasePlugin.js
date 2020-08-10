"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guard_1 = require("../shared/guard");
var utils_1 = require("../shared/utils");
var loggingService_1 = require("../services/loggingService");
var AzureBasePlugin = /** @class */ (function () {
    function AzureBasePlugin(serverless, options) {
        this.serverless = serverless;
        this.options = options;
        guard_1.Guard.null(serverless);
        this.config = serverless.service;
        this.loggingService = new loggingService_1.LoggingService(serverless, options);
        this.processedCommands = serverless.processedInput.commands;
    }
    /**
     * Log message to Serverless CLI
     * @param message Message to log
     */
    AzureBasePlugin.prototype.log = function (message, logLevel) {
        this.loggingService.log(message, logLevel);
    };
    /**
     * Log error message to Serverless CLI
     * @param message Error message to log
     */
    AzureBasePlugin.prototype.error = function (message) {
        this.loggingService.error(message);
    };
    /**
     * Log warning message to Serverless CLI
     * @param message Warning message to log
     */
    AzureBasePlugin.prototype.warn = function (message) {
        this.loggingService.warn(message);
    };
    /**
     * Log info message to Serverless CLI
     * @param message Info message to log
     */
    AzureBasePlugin.prototype.info = function (message) {
        this.loggingService.info(message);
    };
    /**
     * Log debug message to Serverless CLI
     * @param message Debug message to log
     */
    AzureBasePlugin.prototype.debug = function (message) {
        this.loggingService.debug(message);
    };
    AzureBasePlugin.prototype.prettyPrint = function (object) {
        this.log(this.stringify(object));
    };
    AzureBasePlugin.prototype.stringify = function (object) {
        return JSON.stringify(object, null, 2);
    };
    AzureBasePlugin.prototype.getOption = function (key, defaultValue) {
        return utils_1.Utils.get(this.options, key, defaultValue);
    };
    return AzureBasePlugin;
}());
exports.AzureBasePlugin = AzureBasePlugin;
