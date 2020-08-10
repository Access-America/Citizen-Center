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
Object.defineProperty(exports, "__esModule", { value: true });
var functionApp_1 = require("../armTemplates/resources/functionApp");
var armService_1 = require("./armService");
var baseService_1 = require("./baseService");
var functionAppService_1 = require("./functionAppService");
var resourceService_1 = require("./resourceService");
/**
 * Type of information to be presented
 */
var ServiceInfoType;
(function (ServiceInfoType) {
    /** Information on hypothetical deployment */
    ServiceInfoType[ServiceInfoType["DRYRUN"] = 0] = "DRYRUN";
    /** Information reflecting currently deployed resources in resource group */
    ServiceInfoType[ServiceInfoType["DEPLOYED"] = 1] = "DEPLOYED";
})(ServiceInfoType = exports.ServiceInfoType || (exports.ServiceInfoType = {}));
/**
 * Service to collect and present information about the serverless service
 */
var AzureInfoService = /** @class */ (function (_super) {
    __extends(AzureInfoService, _super);
    function AzureInfoService(serverless, options) {
        return _super.call(this, serverless, options) || this;
    }
    /**
     * Prints information relating to the configuration and infrastructure
     * of the service. By default, prints a basic summary. If the "-v" or "--verbose"
     * flag is added, it prints the entire ARM template and parameters
     * @param infoType Type of information to print.
     * DRYRUN uses the information that will be configured by the plugin
     * DEPLOYED uses the information from the actual deployed services in Azure
     */
    AzureInfoService.prototype.printInfo = function (infoType) {
        if (infoType === void 0) { infoType = ServiceInfoType.DRYRUN; }
        return __awaiter(this, void 0, void 0, function () {
            var info;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getInfo(infoType)];
                    case 1:
                        info = _a.sent();
                        if ("arm" in this.options) {
                            this.prettyPrint(info.deployment);
                            return [2 /*return*/];
                        }
                        this.printSummary(info);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Gets the data structure that summarizes the configuration and infrastructure
     * of the service.
     * @param infoType Type of information to print.
     * DRYRUN uses the information that will be configured by the plugin
     * DEPLOYED uses the information from the actual deployed services in Azure
     */
    AzureInfoService.prototype.getInfo = function (infoType) {
        if (infoType === void 0) { infoType = ServiceInfoType.DRYRUN; }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(infoType === ServiceInfoType.DRYRUN)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getDryRun()];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.getDeployed()];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/, _a];
                }
            });
        });
    };
    AzureInfoService.prototype.getDeployed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var resourceService, resourceGroup, resources, functionAppService, functionApp, functions, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        resourceService = new resourceService_1.ResourceService(this.serverless, this.options);
                        return [4 /*yield*/, resourceService.getResourceGroup()];
                    case 1:
                        resourceGroup = _b.sent();
                        if (!resourceGroup) {
                            this.log("Resource group " + this.resourceGroup + " is not yet deployed");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, resourceService.getResources()];
                    case 2:
                        resources = _b.sent();
                        if (!resources.length) {
                            this.log("Resource group " + this.resourceGroup + " has no resources");
                            return [2 /*return*/];
                        }
                        functionAppService = new functionAppService_1.FunctionAppService(this.serverless, this.options);
                        return [4 /*yield*/, functionAppService.get()];
                    case 3:
                        functionApp = _b.sent();
                        return [4 /*yield*/, functionAppService.listFunctions(functionApp)];
                    case 4:
                        functions = _b.sent();
                        _a = {
                            resourceGroup: this.resourceGroup,
                            isDryRun: false,
                            resources: resources.map(function (r) {
                                var info = {
                                    name: r.name,
                                    resourceType: r.type,
                                    region: r.location
                                };
                                return info;
                            }),
                            functionApp: {
                                name: functionApp.name,
                                functions: functions.map(function (f) { return f.name; }),
                            }
                        };
                        return [4 /*yield*/, resourceService.getPreviousDeploymentTemplate()];
                    case 5: return [2 /*return*/, (_a.deployment = _b.sent(),
                            _a)];
                }
            });
        });
    };
    /**
     * Prints the service info in a summarized, readable manner
     * @param serviceInfo Data structure describing service
     */
    AzureInfoService.prototype.printSummary = function (serviceInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var printVersion;
            var _this = this;
            return __generator(this, function (_a) {
                if (!serviceInfo) {
                    return [2 /*return*/];
                }
                printVersion = [
                    "\nResource Group Name: " + serviceInfo.resourceGroup,
                    "Function App Name: " + serviceInfo.functionApp.name,
                    "Functions:",
                    "\t" + serviceInfo.functionApp.functions.map(function (f) { return "" + f; }).join("\n\t"),
                    "Azure Resources:",
                    serviceInfo.resources.map(function (r) { return _this.stringify(r); }).join(",\n")
                ].join("\n");
                this.log(printVersion);
                return [2 /*return*/];
            });
        });
    };
    /**
     * Create the dry-run data structure. Assembles the `ServiceInfo` based on what
     * would be deployed if it were run. Collects names of Azure resources from generated
     * ARM template and replaces the parameter stubs with the actual name
     */
    AzureInfoService.prototype.getDryRun = function () {
        return __awaiter(this, void 0, void 0, function () {
            var armService, _a, parameters, template, resources;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        armService = new armService_1.ArmService(this.serverless, this.options);
                        return [4 /*yield*/, armService.createDeploymentFromType(this.config.provider.type)];
                    case 1:
                        _a = _b.sent(), parameters = _a.parameters, template = _a.template;
                        resources = template.resources.map(function (resource) {
                            var info = {
                                name: _this.parametersValueReplace(resource.name, parameters),
                                resourceType: resource.type,
                                region: _this.parametersValueReplace(resource.location, parameters),
                            };
                            return info;
                        });
                        return [2 /*return*/, {
                                resourceGroup: this.configService.getResourceGroupName(),
                                isDryRun: true,
                                resources: resources,
                                functionApp: {
                                    name: functionApp_1.FunctionAppResource.getResourceName(this.config),
                                    functions: Object.keys(this.configService.getFunctionConfig()),
                                },
                                deployment: {
                                    parameters: parameters,
                                    template: template
                                }
                            }];
                }
            });
        });
    };
    /**
     * Returns the name that will be used by the ARM template. If it is a parameterized name, it will
     * return the correct replacement value. If not, it will return the original value
     * @param original Parameter stub or original value. Should be something like `[parameters('myParamName')]`
     * @param parameters Object containing parameter values (e.g. { myParamName: 'ThisIsMyParamName' })
     */
    AzureInfoService.prototype.parametersValueReplace = function (original, parameters) {
        var match = original.match(/\[parameters\('(.*)'\)\]/i);
        if (!match || match.length < 2) {
            return original;
        }
        var key = match[1];
        var _a = parameters[key], defaultValue = _a.defaultValue, value = _a.value;
        return (value ? value : defaultValue);
    };
    return AzureInfoService;
}(baseService_1.BaseService));
exports.AzureInfoService = AzureInfoService;
