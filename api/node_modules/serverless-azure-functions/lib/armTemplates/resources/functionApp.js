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
var runtime_1 = require("../../config/runtime");
var armTemplates_1 = require("../../models/armTemplates");
var namingService_1 = require("../../services/namingService");
var FunctionAppResource = /** @class */ (function () {
    function FunctionAppResource() {
    }
    FunctionAppResource.getResourceName = function (config) {
        var safeServiceName = config.service.replace(/\s/g, "-");
        var options = {
            config: config,
            resourceConfig: config.provider.functionApp,
            suffix: safeServiceName,
            includeHash: false,
        };
        return namingService_1.AzureNamingService.getResourceName(options);
    };
    FunctionAppResource.prototype.getTemplate = function (config) {
        return {
            "$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",
            "contentVersion": "1.0.0.0",
            parameters: this.getTemplateParameters(),
            "variables": {},
            "resources": [
                {
                    "type": "Microsoft.Web/sites",
                    "apiVersion": "2016-03-01",
                    name: "[parameters('functionAppName')]",
                    "location": "[parameters('location')]",
                    "identity": {
                        "type": armTemplates_1.ArmParamType.SystemAssigned
                    },
                    "dependsOn": [
                        "[resourceId('Microsoft.Storage/storageAccounts', parameters('storageAccountName'))]",
                        "[concat('microsoft.insights/components/', parameters('appInsightsName'))]"
                    ],
                    "kind": "[parameters('functionAppKind')]",
                    "properties": {
                        "siteConfig": {
                            appSettings: this.getFunctionAppSettings(config),
                            "linuxFxVersion": "[parameters('linuxFxVersion')]",
                        },
                        "reserved": "[parameters('functionAppReserved')]",
                        name: "[parameters('functionAppName')]",
                        "clientAffinityEnabled": false,
                        "hostingEnvironment": ""
                    }
                }
            ]
        };
    };
    FunctionAppResource.prototype.getParameters = function (config) {
        var resourceConfig = __assign({}, config.provider.functionApp);
        var _a = config.provider, runtime = _a.runtime, os = _a.os;
        var isLinuxRuntime = os === runtime_1.FunctionAppOS.LINUX;
        var params = {
            functionAppName: {
                value: FunctionAppResource.getResourceName(config),
            },
            functionAppNodeVersion: {
                value: (runtime_1.isNodeRuntime(runtime))
                    ?
                        "~" + runtime_1.getRuntimeVersion(runtime)
                    :
                        undefined,
            },
            functionAppRunFromPackage: {
                value: (isLinuxRuntime) ? "0" : "1",
            },
            functionAppKind: {
                value: (isLinuxRuntime) ? "functionapp,linux" : undefined,
            },
            functionAppReserved: {
                value: (isLinuxRuntime) ? true : undefined,
            },
            linuxFxVersion: {
                value: (isLinuxRuntime) ? this.getLinuxFxVersion(config) : undefined,
            },
            functionAppWorkerRuntime: {
                value: runtime_1.getFunctionWorkerRuntime(runtime),
            },
            functionAppExtensionVersion: {
                value: resourceConfig.extensionVersion,
            },
            functionAppEnableRemoteBuild: {
                value: isLinuxRuntime
            }
        };
        return params;
    };
    FunctionAppResource.prototype.getTemplateParameters = function () {
        return {
            functionAppRunFromPackage: {
                defaultValue: "1",
                type: armTemplates_1.ArmParamType.String
            },
            functionAppName: {
                defaultValue: "",
                type: armTemplates_1.ArmParamType.String
            },
            functionAppNodeVersion: {
                defaultValue: "",
                type: armTemplates_1.ArmParamType.String
            },
            functionAppKind: {
                defaultValue: "functionapp",
                type: armTemplates_1.ArmParamType.String,
            },
            functionAppReserved: {
                defaultValue: false,
                type: armTemplates_1.ArmParamType.Bool
            },
            linuxFxVersion: {
                defaultValue: "",
                type: armTemplates_1.ArmParamType.String,
            },
            functionAppWorkerRuntime: {
                defaultValue: "node",
                type: armTemplates_1.ArmParamType.String
            },
            functionAppExtensionVersion: {
                defaultValue: "~3",
                type: armTemplates_1.ArmParamType.String
            },
            functionAppEnableRemoteBuild: {
                defaultValue: false,
                type: armTemplates_1.ArmParamType.Bool
            },
            storageAccountName: {
                defaultValue: "",
                type: armTemplates_1.ArmParamType.String
            },
            appInsightsName: {
                defaultValue: "",
                type: armTemplates_1.ArmParamType.String
            },
            location: {
                defaultValue: "",
                type: armTemplates_1.ArmParamType.String
            },
        };
    };
    FunctionAppResource.prototype.getFunctionAppSettings = function (config) {
        var appSettings = [
            {
                name: "FUNCTIONS_WORKER_RUNTIME",
                value: "[parameters('functionAppWorkerRuntime')]"
            },
            {
                name: "FUNCTIONS_EXTENSION_VERSION",
                value: "[parameters('functionAppExtensionVersion')]"
            },
            {
                name: "AzureWebJobsStorage",
                value: "[concat('DefaultEndpointsProtocol=https;AccountName=',parameters('storageAccountName'),';AccountKey=',listKeys(resourceId('Microsoft.Storage/storageAccounts', parameters('storageAccountName')), '2016-01-01').keys[0].value)]"
            },
            {
                name: "APPINSIGHTS_INSTRUMENTATIONKEY",
                value: "[reference(concat('microsoft.insights/components/', parameters('appInsightsName'))).InstrumentationKey]"
            }
        ];
        if (config.provider.os === runtime_1.FunctionAppOS.WINDOWS) {
            appSettings = appSettings.concat([
                {
                    name: "WEBSITE_CONTENTAZUREFILECONNECTIONSTRING",
                    value: "[concat('DefaultEndpointsProtocol=https;AccountName=',parameters('storageAccountName'),';AccountKey=',listKeys(resourceId('Microsoft.Storage/storageAccounts', parameters('storageAccountName')), '2016-01-01').keys[0].value)]"
                },
                {
                    name: "WEBSITE_CONTENTSHARE",
                    value: "[toLower(parameters('functionAppName'))]"
                },
                {
                    name: "WEBSITE_RUN_FROM_PACKAGE",
                    value: "[parameters('functionAppRunFromPackage')]"
                }
            ]);
        }
        if (runtime_1.isNodeRuntime(config.provider.runtime)) {
            appSettings = appSettings.concat([
                {
                    name: "WEBSITE_NODE_DEFAULT_VERSION",
                    value: "[parameters('functionAppNodeVersion')]"
                }
            ]);
        }
        return appSettings;
    };
    FunctionAppResource.prototype.getLinuxFxVersion = function (config) {
        var runtime = config.provider.runtime;
        try {
            return runtime_1.dockerImages[config.provider.runtime];
        }
        catch (e) {
            throw new Error("Runtime " + runtime + " not currently supported by Linux Function Apps");
        }
    };
    return FunctionAppResource;
}());
exports.FunctionAppResource = FunctionAppResource;
