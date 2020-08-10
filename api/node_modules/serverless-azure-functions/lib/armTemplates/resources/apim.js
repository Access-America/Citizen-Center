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
var armTemplates_1 = require("../../models/armTemplates");
var namingService_1 = require("../../services/namingService");
var ApimResource = /** @class */ (function () {
    function ApimResource() {
    }
    ApimResource.getResourceName = function (config) {
        var options = {
            config: config,
            resourceConfig: config.provider.apim,
            suffix: "apim",
        };
        return namingService_1.AzureNamingService.getResourceName(options);
    };
    ApimResource.prototype.getTemplate = function () {
        var parameters = {
            apiManagementName: {
                defaultValue: "",
                type: armTemplates_1.ArmParamType.String
            },
            location: {
                defaultValue: "",
                type: armTemplates_1.ArmParamType.String
            },
            apimSkuName: {
                defaultValue: "Consumption",
                type: armTemplates_1.ArmParamType.String
            },
            apimSkuCapacity: {
                defaultValue: 0,
                type: armTemplates_1.ArmParamType.Int
            },
            apimPublisherEmail: {
                defaultValue: "contact@contoso.com",
                type: armTemplates_1.ArmParamType.String
            },
            apimPublisherName: {
                defaultValue: "Contoso",
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
                    "type": "Microsoft.ApiManagement/service",
                    "apiVersion": "2018-06-01-preview",
                    "name": "[parameters('apiManagementName')]",
                    "location": "[parameters('location')]",
                    "sku": {
                        "name": "[parameters('apimSkuName')]",
                        "capacity": "[parameters('apimSkuCapacity')]"
                    },
                    "properties": {
                        "publisherEmail": "[parameters('apimPublisherEmail')]",
                        "publisherName": "[parameters('apimPublisherName')]",
                        "notificationSenderEmail": "apimgmt-noreply@mail.windowsazure.com",
                        "hostnameConfigurations": [],
                        "virtualNetworkType": "None"
                    }
                }
            ]
        };
    };
    ApimResource.prototype.getParameters = function (config) {
        var apimConfig = __assign({ sku: {} }, config.provider.apim);
        var parameters = {
            apiManagementName: {
                value: ApimResource.getResourceName(config),
            },
            apimSkuName: {
                value: apimConfig.sku.name,
            },
            apimSkuCapacity: {
                value: apimConfig.sku.capacity,
            },
            apimPublisherEmail: {
                value: apimConfig.publisherEmail,
            },
            apimPublisherName: {
                value: apimConfig.publisherName,
            }
        };
        return parameters;
    };
    return ApimResource;
}());
exports.ApimResource = ApimResource;
