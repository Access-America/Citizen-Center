"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var armTemplates_1 = require("../../models/armTemplates");
var namingService_1 = require("../../services/namingService");
var AppInsightsResource = /** @class */ (function () {
    function AppInsightsResource() {
    }
    AppInsightsResource.getResourceName = function (config) {
        var options = {
            config: config,
            resourceConfig: config.provider.appInsights,
            suffix: "appinsights",
        };
        return namingService_1.AzureNamingService.getResourceName(options);
    };
    AppInsightsResource.prototype.getTemplate = function () {
        var parameters = {
            appInsightsName: {
                defaultValue: "",
                type: armTemplates_1.ArmParamType.String
            },
            location: {
                defaultValue: "",
                type: armTemplates_1.ArmParamType.String
            }
        };
        return {
            "$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",
            "contentVersion": "1.0.0.0",
            parameters: parameters,
            "variables": {},
            "resources": [
                {
                    "apiVersion": "2015-05-01",
                    "name": "[parameters('appInsightsName')]",
                    "type": "microsoft.insights/components",
                    "location": "[parameters('location')]",
                    "properties": {
                        "Application_Type": "web",
                        "ApplicationId": "[parameters('appInsightsName')]",
                        "Request_Source": "IbizaWebAppExtensionCreate"
                    }
                }
            ]
        };
    };
    AppInsightsResource.prototype.getParameters = function (config) {
        var params = {
            appInsightsName: {
                value: AppInsightsResource.getResourceName(config),
            }
        };
        return params;
    };
    return AppInsightsResource;
}());
exports.AppInsightsResource = AppInsightsResource;
