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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var utils_1 = require("../shared/utils");
var armService_1 = require("./armService");
var azureBlobStorageService_1 = require("./azureBlobStorageService");
var baseService_1 = require("./baseService");
var functionAppService_1 = require("./functionAppService");
var resourceService_1 = require("./resourceService");
var armTemplates_1 = require("../models/armTemplates");
var fs_1 = __importDefault(require("fs"));
/**
 * Services for the Rollback Plugin
 */
var RollbackService = /** @class */ (function (_super) {
    __extends(RollbackService, _super);
    /**
     * Initialize rollback service, including authentication and initialization
     * of a `ResourceService`
     * @param serverless Serverless object
     * @param options Serverless CLI options
     */
    function RollbackService(serverless, options) {
        var _this = _super.call(this, serverless, options) || this;
        _this.resourceService = new resourceService_1.ResourceService(serverless, options);
        _this.blobService = new azureBlobStorageService_1.AzureBlobStorageService(serverless, options);
        return _this;
    }
    /**
     * Rolls back the function app. If `timestamp` present in `options`,
     * function app will be rolled back directly to that timestamp. Otherwise,
     * function app will be rolled back to the deployment previous to the most recent
     */
    RollbackService.prototype.rollback = function () {
        return __awaiter(this, void 0, void 0, function () {
            var deployment, artifactName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDeployment()];
                    case 1:
                        deployment = _a.sent();
                        if (!deployment) {
                            return [2 /*return*/];
                        }
                        artifactName = this.configService.getArtifactName(deployment.name);
                        // Redeploy resource group (includes SAS token URL if running from blob URL)
                        return [4 /*yield*/, this.redeployDeployment(deployment, artifactName)];
                    case 2:
                        // Redeploy resource group (includes SAS token URL if running from blob URL)
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Re-deploy a previous deployment of a resource group
     * @param deployment Previous deployment retrieved from Azure SDK
     * @param artifactName Name of zipped artifact in blob storage associated with deployment
     */
    RollbackService.prototype.redeployDeployment = function (deployment, artifactName) {
        return __awaiter(this, void 0, void 0, function () {
            var armService, armDeployment, _a, _b, artifactPath;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        armService = new armService_1.ArmService(this.serverless, this.options);
                        return [4 /*yield*/, this.convertToArmDeployment(deployment)];
                    case 1:
                        armDeployment = _c.sent();
                        // Initialize blob service for either creating SAS token or downloading artifact to uplod to function app
                        return [4 /*yield*/, this.blobService.initialize()];
                    case 2:
                        // Initialize blob service for either creating SAS token or downloading artifact to uplod to function app
                        _c.sent();
                        if (!this.config.provider.deployment.external) return [3 /*break*/, 4];
                        // Set functionRunFromPackage param to SAS URL of blob
                        _a = armDeployment.parameters;
                        _b = {
                            type: armTemplates_1.ArmParamType.String
                        };
                        return [4 /*yield*/, this.blobService.generateBlobSasTokenUrl(this.config.provider.deployment.container, artifactName)];
                    case 3:
                        // Set functionRunFromPackage param to SAS URL of blob
                        _a.functionAppRunFromPackage = (_b.value = _c.sent(),
                            _b);
                        _c.label = 4;
                    case 4: return [4 /*yield*/, armService.deployTemplate(armDeployment)];
                    case 5:
                        _c.sent();
                        if (!!this.config.provider.deployment.external) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.downloadArtifact(artifactName)];
                    case 6:
                        artifactPath = _c.sent();
                        return [4 /*yield*/, this.redeployArtifact(artifactPath)];
                    case 7:
                        _c.sent();
                        _c.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Convert previous deployment to ArmDeployment
     * @param deployment Previous deployment retrieved from Azure SDK
     */
    RollbackService.prototype.convertToArmDeployment = function (deployment) {
        return __awaiter(this, void 0, void 0, function () {
            var resourceService, template, parameters;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resourceService = new resourceService_1.ResourceService(this.serverless, this.options);
                        return [4 /*yield*/, resourceService.getDeploymentTemplate(deployment.name)];
                    case 1:
                        template = (_a.sent()).template;
                        parameters = deployment.properties.parameters;
                        return [2 /*return*/, {
                                template: template,
                                parameters: parameters,
                            }];
                }
            });
        });
    };
    /**
     * Deploy zipped artifact to function app
     * @param artifactPath Path to downloaded zipped artifact
     */
    RollbackService.prototype.redeployArtifact = function (artifactPath) {
        return __awaiter(this, void 0, void 0, function () {
            var functionAppService, functionApp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        functionAppService = new functionAppService_1.FunctionAppService(this.serverless, this.options);
                        return [4 /*yield*/, functionAppService.get()];
                    case 1:
                        functionApp = _a.sent();
                        return [4 /*yield*/, functionAppService.uploadZippedArtifactToFunctionApp(functionApp, artifactPath)];
                    case 2:
                        _a.sent();
                        if (fs_1.default.existsSync(artifactPath)) {
                            fs_1.default.unlinkSync(artifactPath);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get deployment specified by timestamp in Serverless options
     * Lists deployments if no timestamp is provided
     */
    RollbackService.prototype.getDeployment = function () {
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, _a, _b, deployments, deployment;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        timestamp = utils_1.Utils.get(this.options, "timestamp");
                        if (!!timestamp) return [3 /*break*/, 2];
                        _a = this.log;
                        _b = "Need to specify a timestamp for rollback.\n\n" +
                            "Example usage:\n\nsls rollback -t 1562014362\n\n";
                        return [4 /*yield*/, this.resourceService.listDeployments()];
                    case 1:
                        _a.apply(this, [_b +
                                (_c.sent())]);
                        return [2 /*return*/];
                    case 2: return [4 /*yield*/, this.getArmDeploymentsByTimestamp()];
                    case 3:
                        deployments = _c.sent();
                        deployment = deployments.get(timestamp);
                        if (!deployment) {
                            this.log("Couldn't find deployment with timestamp: " + timestamp);
                            this.log("Timestamps: " + Array.from(deployments.keys()).map(function (key) { return "\n" + key; }));
                        }
                        return [2 /*return*/, deployment];
                }
            });
        });
    };
    /**
     * Download zipped function app artifact from blob storage corresponding to the specified deployment
     * @param artifactName Name of artifact to download
     */
    RollbackService.prototype.downloadArtifact = function (artifactName) {
        return __awaiter(this, void 0, void 0, function () {
            var artifactPath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        artifactPath = path_1.default.join(this.serverless.config.servicePath, ".serverless", artifactName);
                        return [4 /*yield*/, this.blobService.downloadBinary(this.config.provider.deployment.container, artifactName, artifactPath)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, artifactPath];
                }
            });
        });
    };
    /**
     * Get all deployments of a resource group indexed by Unix timestamp string
     */
    RollbackService.prototype.getArmDeploymentsByTimestamp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, armDeployments, armDeployments_1, armDeployments_1_1, armDeployment, timestamp;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        result = new Map();
                        return [4 /*yield*/, this.resourceService.getDeployments()];
                    case 1:
                        armDeployments = _b.sent();
                        try {
                            for (armDeployments_1 = __values(armDeployments), armDeployments_1_1 = armDeployments_1.next(); !armDeployments_1_1.done; armDeployments_1_1 = armDeployments_1.next()) {
                                armDeployment = armDeployments_1_1.value;
                                timestamp = utils_1.Utils.getTimestampFromName(armDeployment.name);
                                if (timestamp) {
                                    result.set(timestamp, armDeployment);
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (armDeployments_1_1 && !armDeployments_1_1.done && (_a = armDeployments_1.return)) _a.call(armDeployments_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return RollbackService;
}(baseService_1.BaseService));
exports.RollbackService = RollbackService;
