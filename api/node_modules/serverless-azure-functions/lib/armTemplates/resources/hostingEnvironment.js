"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var armTemplates_1 = require("../../models/armTemplates");
var namingService_1 = require("../../services/namingService");
var HostingEnvironmentResource = /** @class */ (function () {
    function HostingEnvironmentResource() {
    }
    HostingEnvironmentResource.getResourceName = function (config) {
        var options = {
            config: config,
            resourceConfig: config.provider.hostingEnvironment,
            suffix: "ase",
        };
        return namingService_1.AzureNamingService.getResourceName(options);
    };
    HostingEnvironmentResource.prototype.getTemplate = function () {
        var parameters = {
            hostingEnvironmentName: {
                defaultValue: "",
                type: armTemplates_1.ArmParamType.String
            },
            virtualNetworkName: {
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
                    "type": "Microsoft.Web/hostingEnvironments",
                    "apiVersion": "2016-09-01",
                    "name": "[parameters('hostingEnvironmentName')]",
                    "location": "[parameters('location')]",
                    "dependsOn": [
                        "[resourceId('Microsoft.Network/virtualNetworks', parameters('virtualNetworkName'))]"
                    ],
                    "kind": "ASEV2",
                    "zones": [],
                    "properties": {
                        "name": "[parameters('hostingEnvironmentName')]",
                        "location": "[parameters('location')]",
                        "vnetName": "[parameters('virtualNetworkName')]",
                        "vnetResourceGroupName": "[resourceGroup().name]",
                        "vnetSubnetName": "default",
                        "virtualNetwork": {
                            "id": "[resourceId('Microsoft.Network/virtualNetworks', parameters('virtualNetworkName'))]",
                            "subnet": "default"
                        },
                        "internalLoadBalancingMode": "None",
                        "multiSize": "Standard_D1_V2",
                        "multiRoleCount": 2,
                        "ipsslAddressCount": 2,
                        "networkAccessControlList": [],
                        "frontEndScaleFactor": 15,
                        "suspended": false
                    }
                }
            ]
        };
    };
    HostingEnvironmentResource.prototype.getParameters = function (config) {
        var params = {
            hostingEnvironmentName: {
                value: HostingEnvironmentResource.getResourceName(config)
            }
        };
        return params;
    };
    return HostingEnvironmentResource;
}());
exports.HostingEnvironmentResource = HostingEnvironmentResource;
