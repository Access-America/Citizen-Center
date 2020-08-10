"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var arm_resources_1 = require("@azure/arm-resources");
var baseService_1 = require("./baseService");
var utils_1 = require("../shared/utils");
var namingService_1 = require("./namingService");
var armTemplates_1 = require("../models/armTemplates");
var ResourceService = /** @class */ (function (_super) {
    __extends(ResourceService, _super);
    function ResourceService(serverless, options) {
        var _this = _super.call(this, serverless, options) || this;
        _this.resourceClient = new arm_resources_1.ResourceManagementClient(_this.credentials, _this.subscriptionId);
        return _this;
    }
    /**
     * Name of configured resource group
     */
    ResourceService.prototype.getResourceGroupName = function () {
        return this.resourceGroup;
    };
    /**
     * Get all deployments for resource group sorted by timestamp (most recent first)
     */
    ResourceService.prototype.getDeployments = function () {
        return __awaiter(this, void 0, void 0, function () {
            var deployments;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.log("Listing deployments for resource group '" + this.resourceGroup + "':");
                        return [4 /*yield*/, this.resourceClient.deployments.listByResourceGroup(this.resourceGroup)];
                    case 1:
                        deployments = _a.sent();
                        return [2 /*return*/, deployments.sort(function (a, b) {
                                return (a.properties.timestamp < b.properties.timestamp) ? 1 : -1;
                            })];
                }
            });
        });
    };
    /**
     * Get the most recent resource group deployment
     */
    ResourceService.prototype.getPreviousDeployment = function () {
        return __awaiter(this, void 0, void 0, function () {
            var deployments;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDeployments()];
                    case 1:
                        deployments = _a.sent();
                        if (deployments && deployments.length) {
                            return [2 /*return*/, deployments[0]];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get template from last resource group deployment
     */
    ResourceService.prototype.getPreviousDeploymentTemplate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var deployment, parameters, template;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPreviousDeployment()];
                    case 1:
                        deployment = _a.sent();
                        if (!deployment || deployment.properties.provisioningState !== armTemplates_1.ArmTemplateProvisioningState.SUCCEEDED) {
                            return [2 /*return*/];
                        }
                        parameters = deployment.properties.parameters;
                        return [4 /*yield*/, this.getDeploymentTemplate(deployment.name)];
                    case 2:
                        template = (_a.sent()).template;
                        return [2 /*return*/, {
                                template: template,
                                parameters: parameters
                            }];
                }
            });
        });
    };
    /**
     * Returns stringified list of deployments with timestamps
     */
    ResourceService.prototype.listDeployments = function () {
        return __awaiter(this, void 0, void 0, function () {
            var deployments, stringDeployments, deployments_1, deployments_1_1, dep, timestampFromName, dateTime;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getDeployments()];
                    case 1:
                        deployments = _b.sent();
                        if (!deployments || deployments.length === 0) {
                            this.log("No deployments found for resource group '" + this.configService.getResourceGroupName() + "'");
                            return [2 /*return*/];
                        }
                        stringDeployments = "\n\nDeployments";
                        try {
                            for (deployments_1 = __values(deployments), deployments_1_1 = deployments_1.next(); !deployments_1_1.done; deployments_1_1 = deployments_1.next()) {
                                dep = deployments_1_1.value;
                                stringDeployments += "\n-----------\n";
                                stringDeployments += "Name: " + dep.name + "\n";
                                timestampFromName = utils_1.Utils.getTimestampFromName(dep.name);
                                stringDeployments += "Timestamp: " + ((timestampFromName) ? timestampFromName : "None") + "\n";
                                dateTime = timestampFromName ? new Date(+timestampFromName).toISOString() : "None";
                                stringDeployments += "Datetime: " + dateTime + "\n";
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (deployments_1_1 && !deployments_1_1.done && (_a = deployments_1.return)) _a.call(deployments_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        stringDeployments += "-----------\n";
                        return [2 /*return*/, stringDeployments];
                }
            });
        });
    };
    /**
     * Get ARM template for previous deployment
     * @param deploymentName Name of deployment
     */
    ResourceService.prototype.getDeploymentTemplate = function (deploymentName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.resourceClient.deployments.exportTemplate(this.resourceGroup, deploymentName)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ResourceService.prototype.deployResourceGroup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var resourceGroup;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.log("Creating resource group: " + this.resourceGroup);
                        return [4 /*yield*/, this.getResourceGroup()];
                    case 1:
                        resourceGroup = _a.sent();
                        return [4 /*yield*/, this.resourceClient.resourceGroups.createOrUpdate(this.resourceGroup, {
                                location: namingService_1.AzureNamingService.getNormalizedRegionName(this.configService.getRegion()),
                                tags: __assign({}, ((resourceGroup) ? resourceGroup.tags : undefined), this.config.provider.tags)
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ResourceService.prototype.getResourceGroup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.resourceClient.resourceGroups.get(this.resourceGroup)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_2 = _a.sent();
                        return [2 /*return*/, undefined];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ResourceService.prototype.getResources = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.resourceClient.resources.listByResourceGroup(this.resourceGroup)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_3 = _a.sent();
                        return [2 /*return*/, undefined];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ResourceService.prototype.deleteDeployment = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.log("Deleting deployment: " + this.deploymentName);
                        return [4 /*yield*/, this.resourceClient.deployments.deleteMethod(this.resourceGroup, this.deploymentName)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ResourceService.prototype.deleteResourceGroup = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.log("Deleting resource group: " + this.resourceGroup);
                        return [4 /*yield*/, this.resourceClient.resourceGroups.deleteMethod(this.resourceGroup)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ResourceService;
}(baseService_1.BaseService));
exports.ResourceService = ResourceService;
