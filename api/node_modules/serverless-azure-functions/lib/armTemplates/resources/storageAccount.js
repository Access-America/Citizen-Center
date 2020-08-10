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
var constants_1 = require("../../shared/constants");
var armTemplates_1 = require("../../models/armTemplates");
var namingService_1 = require("../../services/namingService");
var StorageAccountResource = /** @class */ (function () {
    function StorageAccountResource() {
    }
    StorageAccountResource.getResourceName = function (config) {
        var options = {
            config: config,
            resourceConfig: config.provider.storageAccount,
            suffix: ""
        };
        return namingService_1.AzureNamingService.getSafeResourceName(__assign({}, options, { maxLength: constants_1.constants.naming.maxLength.storageAccount }));
    };
    StorageAccountResource.prototype.getTemplate = function () {
        var parameters = {
            storageAccountName: {
                defaultValue: "",
                type: armTemplates_1.ArmParamType.String
            },
            location: {
                defaultValue: "",
                type: armTemplates_1.ArmParamType.String
            },
            storageAccountSkuName: {
                defaultValue: "Standard_LRS",
                type: armTemplates_1.ArmParamType.String
            },
            storageAccountSkuTier: {
                defaultValue: "Standard",
                type: armTemplates_1.ArmParamType.String
            }
        };
        return {
            "$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",
            "contentVersion": "1.0.0.0",
            parameters: parameters,
            variables: {},
            resources: [
                {
                    apiVersion: "2018-07-01",
                    name: "[parameters('storageAccountName')]",
                    type: "Microsoft.Storage/storageAccounts",
                    location: "[parameters('location')]",
                    kind: "Storage",
                    properties: {
                        accountType: "[parameters('storageAccountSkuName')]"
                    },
                    sku: {
                        name: "[parameters('storageAccountSkuName')]",
                        tier: "[parameters('storageAccountSkuTier')]"
                    }
                }
            ]
        };
    };
    StorageAccountResource.prototype.getParameters = function (config) {
        var resourceConfig = __assign({ sku: {} }, config.provider.storageAccount);
        var params = {
            storageAccountName: {
                value: StorageAccountResource.getResourceName(config),
            },
            storageAccountSkuName: {
                value: resourceConfig.sku.name,
            },
            storageAccountSkuTier: {
                value: resourceConfig.sku.tier,
            }
        };
        return params;
    };
    return StorageAccountResource;
}());
exports.StorageAccountResource = StorageAccountResource;
