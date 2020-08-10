"use strict";
/*
NOTE: this plugin is used to add all the different provider related plugins at once.
This way only one plugin needs to be added to the service in order to get access to the
whole provider implementation.
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var azureProvider_1 = __importDefault(require("./provider/azureProvider"));
var azureInvokePlugin_1 = require("./plugins/invoke/azureInvokePlugin");
var azureRemovePlugin_1 = require("./plugins/remove/azureRemovePlugin");
var azurePackagePlugin_1 = require("./plugins/package/azurePackagePlugin");
var azureDeployPlugin_1 = require("./plugins/deploy/azureDeployPlugin");
var azureLoginPlugin_1 = require("./plugins/login/azureLoginPlugin");
var azureApimPlugin_1 = require("./plugins/apim/azureApimPlugin");
var azureFuncPlugin_1 = require("./plugins/func/azureFuncPlugin");
var azureOfflinePlugin_1 = require("./plugins/offline/azureOfflinePlugin");
var azureRollbackPlugin_1 = require("./plugins/rollback/azureRollbackPlugin");
var azureKeyVaultPlugin_1 = require("./plugins/identity/azureKeyVaultPlugin");
var azureInfoPlugin_1 = require("./plugins/info/azureInfoPlugin");
var AzureIndex = /** @class */ (function () {
    function AzureIndex(serverless, options) {
        this.serverless = serverless;
        this.options = options;
        this.serverless.setProvider(azureProvider_1.default.getProviderName(), new azureProvider_1.default(serverless));
        // To be refactored
        this.serverless.pluginManager.addPlugin(azurePackagePlugin_1.AzurePackagePlugin);
        this.serverless.pluginManager.addPlugin(azureInvokePlugin_1.AzureInvokePlugin);
        this.serverless.pluginManager.addPlugin(azureRemovePlugin_1.AzureRemovePlugin);
        // Refactored
        this.serverless.pluginManager.addPlugin(azureLoginPlugin_1.AzureLoginPlugin);
        this.serverless.pluginManager.addPlugin(azureDeployPlugin_1.AzureDeployPlugin);
        this.serverless.pluginManager.addPlugin(azureApimPlugin_1.AzureApimPlugin);
        this.serverless.pluginManager.addPlugin(azureFuncPlugin_1.AzureFuncPlugin);
        this.serverless.pluginManager.addPlugin(azureOfflinePlugin_1.AzureOfflinePlugin);
        this.serverless.pluginManager.addPlugin(azureRollbackPlugin_1.AzureRollbackPlugin);
        this.serverless.pluginManager.addPlugin(azureKeyVaultPlugin_1.AzureKeyVaultPlugin);
        this.serverless.pluginManager.addPlugin(azureInfoPlugin_1.AzureInfoPlugin);
    }
    return AzureIndex;
}());
exports.default = AzureIndex;
module.exports = AzureIndex;
