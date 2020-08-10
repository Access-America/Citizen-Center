"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var cliCommandFactory_1 = require("../config/cliCommandFactory");
var runtime_1 = require("../config/runtime");
var constants_1 = require("../shared/constants");
var utils_1 = require("../shared/utils");
var namingService_1 = require("./namingService");
/**
 * Handles all Service Configuration
 */
var ConfigService = /** @class */ (function () {
    function ConfigService(serverless, options) {
        this.serverless = serverless;
        this.options = options;
        this.config = this.initializeConfig(serverless.service);
        this.cliCommandFactory = new cliCommandFactory_1.CliCommandFactory();
        this.registerCliCommands();
    }
    /**
     * Get Azure Provider Configuration
     */
    ConfigService.prototype.getConfig = function () {
        return this.config;
    };
    /**
     * Name of Azure Region for deployment
     */
    ConfigService.prototype.getRegion = function () {
        return this.config.provider.region;
    };
    /**
     * Name of current deployment stage
     */
    ConfigService.prototype.getStage = function () {
        return this.config.provider.stage;
    };
    /**
     * Prefix for service
     */
    ConfigService.prototype.getPrefix = function () {
        return this.config.provider.prefix;
    };
    /**
     * Name of current resource group
     */
    ConfigService.prototype.getResourceGroupName = function () {
        return this.config.provider.resourceGroup;
    };
    /**
     * Azure Subscription ID
     */
    ConfigService.prototype.getSubscriptionId = function () {
        return this.getOption(constants_1.constants.variableKeys.subscriptionId)
            || process.env.AZURE_SUBSCRIPTION_ID
            || this.config.provider.subscriptionId
            || this.serverless.variables[constants_1.constants.variableKeys.subscriptionId];
    };
    /**
     * Name of current deployment
     */
    ConfigService.prototype.getDeploymentName = function () {
        return namingService_1.AzureNamingService.getDeploymentName(this.config, (this.config.provider.deployment.rollback) ? "t" + this.getTimestamp() : null);
    };
    ConfigService.prototype.getDeploymentConfig = function () {
        return this.config.provider.deployment;
    };
    /**
     * Get rollback-configured artifact name. Contains `-t{timestamp}`
     * Takes name of deployment and replaces `rg-deployment` or `deployment` with `artifact`
     */
    ConfigService.prototype.getArtifactName = function (deploymentName) {
        deploymentName = deploymentName || this.getDeploymentName();
        var _a = constants_1.constants.naming.suffix, deployment = _a.deployment, artifact = _a.artifact;
        return deploymentName
            .replace("rg-" + deployment, artifact)
            .replace(deployment, artifact) + ".zip";
    };
    /**
     * Function configuration from serverless.yml
     */
    ConfigService.prototype.getFunctionConfig = function () {
        return this.config.functions;
    };
    /**
     * Name of file containing serverless config
     */
    ConfigService.prototype.getConfigFile = function () {
        return this.getOption("config", "serverless.yml");
    };
    /**
     * Name of Function App Service
     */
    ConfigService.prototype.getServiceName = function () {
        return this.config.service;
    };
    /**
     * Operating system for function app
     */
    ConfigService.prototype.getOs = function () {
        return this.config.provider.os;
    };
    /**
     * Function app configured to run on Python
     */
    ConfigService.prototype.isPythonTarget = function () {
        return runtime_1.isPythonRuntime(this.config.provider.runtime);
    };
    /**
     * Function app configured to run on Node
     */
    ConfigService.prototype.isNodeTarget = function () {
        return runtime_1.isNodeRuntime(this.config.provider.runtime);
    };
    /**
     * Function app configured to run on Linux
     */
    ConfigService.prototype.isLinuxTarget = function () {
        return this.getOs() === runtime_1.FunctionAppOS.LINUX;
    };
    ConfigService.prototype.getCommand = function (key) {
        return this.cliCommandFactory.getCommand(key);
    };
    ConfigService.prototype.getCompilerCommand = function (runtime, mode) {
        return this.cliCommandFactory.getCommand(runtime + "-" + mode);
    };
    ConfigService.prototype.shouldCompileBeforePublish = function () {
        return runtime_1.isCompiledRuntime(this.config.provider.runtime) && this.config.provider.os === runtime_1.FunctionAppOS.WINDOWS;
    };
    /**
     * Set any default values required for service
     * @param config Current Serverless configuration
     */
    ConfigService.prototype.setDefaultValues = function (config) {
        var _a = constants_1.constants.defaults, awsRegion = _a.awsRegion, region = _a.region, stage = _a.stage, prefix = _a.prefix, os = _a.os;
        var providerRegion = config.provider.region;
        if (!providerRegion || providerRegion === awsRegion) {
            config.provider.region = this.serverless.service.provider["location"] || region;
        }
        if (!config.provider.stage) {
            config.provider.stage = stage;
        }
        if (!config.provider.prefix) {
            config.provider.prefix = prefix;
        }
        if (!config.provider.os) {
            config.provider.os = os;
        }
        if (!config.provider.type) {
            config.provider.type = "consumption";
        }
    };
    /**
     * Overwrite values for resourceGroup, prefix, region and stage
     * in config if passed through CLI
     */
    ConfigService.prototype.initializeConfig = function (service) {
        var config = service;
        var providerConfig = utils_1.Utils.get(this.serverless.variables, constants_1.constants.variableKeys.providerConfig);
        if (providerConfig) {
            config.provider = providerConfig;
            return config;
        }
        this.serverless.cli.log("Initializing provider configuration...");
        this.setDefaultValues(config);
        var _a = config.provider, prefix = _a.prefix, region = _a.region, stage = _a.stage, subscriptionId = _a.subscriptionId, tenantId = _a.tenantId, appId = _a.appId, deployment = _a.deployment, runtime = _a.runtime, os = _a.os;
        var options = {
            config: config,
            suffix: config.service + "-rg",
            includeHash: false,
        };
        config.provider = __assign({}, config.provider, { prefix: this.getOption("prefix") || prefix, stage: this.getOption("stage") || stage, region: this.getOption("region") || region, subscriptionId: this.getOption(constants_1.constants.variableKeys.subscriptionId)
                || process.env.AZURE_SUBSCRIPTION_ID
                || subscriptionId
                || this.serverless.variables[constants_1.constants.variableKeys.subscriptionId], tenantId: this.getOption(constants_1.constants.variableKeys.tenantId)
                || process.env.AZURE_TENANT_ID
                || tenantId, appId: this.getOption(constants_1.constants.variableKeys.appId)
                || process.env.AZURE_CLIENT_ID
                || appId });
        config.provider.resourceGroup = (this.getOption("resourceGroup", config.provider.resourceGroup)) || namingService_1.AzureNamingService.getResourceName(options);
        if (!runtime) {
            throw new Error("Runtime undefined. Runtimes supported: " + runtime_1.supportedRuntimes.join(","));
        }
        if (!runtime_1.supportedRuntimeSet.has(runtime)) {
            throw new Error("Runtime " + runtime + " is not supported. Runtimes supported: " + runtime_1.supportedRuntimes.join(","));
        }
        if (runtime_1.isPythonRuntime(runtime) && os !== runtime_1.FunctionAppOS.LINUX) {
            this.serverless.cli.log("Python functions can ONLY run on Linux Function Apps.");
            config.provider.os = runtime_1.FunctionAppOS.LINUX;
        }
        config.provider.deployment = __assign({}, constants_1.constants.deploymentConfig, deployment);
        this.serverless.variables[constants_1.constants.variableKeys.providerConfig] = config.provider;
        return config;
    };
    /**
     * Get timestamp from `packageTimestamp` serverless variable
     * If not set, create timestamp, set variable and return timestamp
     */
    ConfigService.prototype.getTimestamp = function () {
        var key = constants_1.constants.variableKeys.packageTimestamp;
        var timestamp = +this.getVariable(key);
        if (!timestamp) {
            timestamp = Date.now();
            this.serverless.variables[key] = timestamp;
        }
        return timestamp;
    };
    /**
     * Get value of option from Serverless CLI
     * @param key Key of option
     * @param defaultValue Default value if key not found in options object
     */
    ConfigService.prototype.getOption = function (key, defaultValue) {
        return utils_1.Utils.get(this.options, key, defaultValue);
    };
    /**
     * Get variable value from Serverless variables
     * @param key Key for variable
     * @param defaultValue Default value if key not found in variable object
     */
    ConfigService.prototype.getVariable = function (key, defaultValue) {
        return utils_1.Utils.get(this.serverless.variables, key, defaultValue);
    };
    ConfigService.prototype.registerCliCommands = function () {
        // for (const key of Object.keys(cliCommands)) {
        //   this.cliCommandFactory.registerCommand(key, this.cliCommandFactory.registerCommand(key]);
        // }
        this.cliCommandFactory.registerCommand(constants_1.constants.cliCommandKeys.start, {
            command: "func",
            args: ["host", "start"],
        });
        this.cliCommandFactory.registerCommand(runtime_1.Runtime.DOTNET22 + "-" + runtime_1.BuildMode.RELEASE, {
            command: "dotnet",
            args: [
                "build",
                "--configuration",
                "release",
                "--framework",
                "netcoreapp2.2",
                "--output",
                constants_1.constants.tmpBuildDir
            ],
        });
        this.cliCommandFactory.registerCommand(runtime_1.Runtime.DOTNET22 + "-" + runtime_1.BuildMode.DEBUG, {
            command: "dotnet",
            args: [
                "build",
                "--configuration",
                "debug",
                "--framework",
                "netcoreapp2.2",
                "--output",
                constants_1.constants.tmpBuildDir
            ],
        });
        this.cliCommandFactory.registerCommand(runtime_1.Runtime.DOTNET31 + "-" + runtime_1.BuildMode.RELEASE, {
            command: "dotnet",
            args: [
                "build",
                "--configuration",
                "release",
                "--framework",
                "netcoreapp3.1",
                "--output",
                constants_1.constants.tmpBuildDir
            ],
        });
        this.cliCommandFactory.registerCommand(runtime_1.Runtime.DOTNET31 + "-" + runtime_1.BuildMode.DEBUG, {
            command: "dotnet",
            args: [
                "build",
                "--configuration",
                "debug",
                "--framework",
                "netcoreapp3.1",
                "--output",
                constants_1.constants.tmpBuildDir
            ],
        });
    };
    return ConfigService;
}());
exports.ConfigService = ConfigService;
