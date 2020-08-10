"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var armTemplates_1 = require("../../models/armTemplates");
var namingService_1 = require("../../services/namingService");
var VirtualNetworkResource = /** @class */ (function () {
    function VirtualNetworkResource() {
    }
    VirtualNetworkResource.getResourceName = function (config) {
        var options = {
            config: config,
            resourceConfig: config.provider.hostingEnvironment,
            suffix: "vnet",
        };
        return namingService_1.AzureNamingService.getResourceName(options);
    };
    VirtualNetworkResource.prototype.getTemplate = function () {
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
                    "type": "Microsoft.Network/virtualNetworks",
                    "apiVersion": "2018-12-01",
                    "name": "[parameters('virtualNetworkName')]",
                    "location": "[parameters('location')]",
                    "properties": {
                        "provisioningState": "Succeeded",
                        "resourceGuid": "b756ff30-43ac-4e83-9794-13011e7884ba",
                        "addressSpace": {
                            "addressPrefixes": [
                                "172.17.0.0/16"
                            ]
                        },
                        "subnets": [
                            {
                                "name": "default",
                                "etag": "W/\"73e9f4aa-86a9-478e-ad11-2db211c9c2e3\"",
                                "properties": {
                                    "provisioningState": "Succeeded",
                                    "addressPrefix": "172.17.0.0/24",
                                    "resourceNavigationLinks": [
                                        {
                                            "name": "[concat('MicrosoftWeb_HostingEnvironments_', parameters('hostingEnvironmentName'))]",
                                            "properties": {
                                                "linkedResourceType": "Microsoft.Web/hostingEnvironments",
                                                "link": "[resourceId('Microsoft.Web/hostingEnvironments', parameters('hostingEnvironmentName'))]"
                                            }
                                        }
                                    ],
                                    "serviceEndpoints": [
                                        {
                                            "provisioningState": "Succeeded",
                                            "service": "Microsoft.Web",
                                            "locations": [
                                                "*"
                                            ]
                                        }
                                    ],
                                    "delegations": []
                                }
                            }
                        ],
                        "virtualNetworkPeerings": [],
                        "enableDdosProtection": false,
                        "enableVmProtection": false
                    }
                }
            ]
        };
    };
    VirtualNetworkResource.prototype.getParameters = function (config) {
        var params = {
            virtualNetworkName: {
                value: VirtualNetworkResource.getResourceName(config),
            }
        };
        return params;
    };
    return VirtualNetworkResource;
}());
exports.VirtualNetworkResource = VirtualNetworkResource;
