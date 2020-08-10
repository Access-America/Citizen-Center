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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var functionAppService_1 = require("../../services/functionAppService");
var resourceService_1 = require("../../services/resourceService");
var azureBasePlugin_1 = require("../azureBasePlugin");
var apimService_1 = require("../../services/apimService");
var constants_1 = require("../../shared/constants");
var infoService_1 = require("../../services/infoService");
var AzureDeployPlugin = /** @class */ (function (_super) {
    __extends(AzureDeployPlugin, _super);
    function AzureDeployPlugin(serverless, options) {
        var _this = _super.call(this, serverless, options) || this;
        _this.hooks = {
            "deploy:deploy": _this.deploy.bind(_this),
            "deploy:list:list": _this.list.bind(_this),
            "deploy:apim:apim": _this.deployApim.bind(_this),
        };
        _this.commands = {
            deploy: {
                commands: {
                    list: {
                        usage: "List deployments",
                        lifecycleEvents: ["list"],
                        options: __assign({}, constants_1.constants.deployedServiceOptions)
                    },
                    apim: {
                        usage: "Deploys APIM",
                        lifecycleEvents: ["apim"]
                    }
                },
                options: __assign({}, constants_1.constants.deployedServiceOptions, { dryrun: {
                        usage: "Get a summary for what the deployment would look like",
                        shortcut: "d"
                    } })
            }
        };
        return _this;
    }
    AzureDeployPlugin.prototype.list = function () {
        return __awaiter(this, void 0, void 0, function () {
            var resourceService, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.checkForIndividualFunctionDeploy();
                        this.log("Listing deployments");
                        resourceService = new resourceService_1.ResourceService(this.serverless, this.options);
                        _a = this.log;
                        return [4 /*yield*/, resourceService.listDeployments()];
                    case 1:
                        _a.apply(this, [_b.sent()]);
                        return [2 /*return*/];
                }
            });
        });
    };
    AzureDeployPlugin.prototype.deploy = function () {
        return __awaiter(this, void 0, void 0, function () {
            var infoService, resourceService, functionAppService, zipFile, functionApp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkForIndividualFunctionDeploy();
                        if (!this.getOption("dryrun")) return [3 /*break*/, 2];
                        infoService = new infoService_1.AzureInfoService(this.serverless, this.options);
                        return [4 /*yield*/, infoService.printInfo()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        resourceService = new resourceService_1.ResourceService(this.serverless, this.options);
                        functionAppService = new functionAppService_1.FunctionAppService(this.serverless, this.options);
                        zipFile = functionAppService.getFunctionZipFile();
                        if (!fs_1.default.existsSync(zipFile)) {
                            throw new Error("Function app zip file '" + zipFile + "' does not exist");
                        }
                        return [4 /*yield*/, resourceService.deployResourceGroup()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, functionAppService.deploy()];
                    case 4:
                        functionApp = _a.sent();
                        return [4 /*yield*/, functionAppService.uploadFunctions(functionApp)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Deploys APIM if configured
     */
    AzureDeployPlugin.prototype.deployApim = function () {
        return __awaiter(this, void 0, void 0, function () {
            var apimConfig, apimService;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        apimConfig = this.serverless.service.provider["apim"];
                        if (!apimConfig) {
                            this.log("No APIM configuration found");
                            return [2 /*return*/, Promise.resolve()];
                        }
                        this.log("Starting APIM service deployment");
                        apimService = new apimService_1.ApimService(this.serverless, this.options);
                        return [4 /*yield*/, apimService.deploy()];
                    case 1:
                        _a.sent();
                        this.log("Finished APIM service deployment");
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Check to see if user tried to target an individual function for deployment or deployment list
     * Throws error if `function` is specified
     */
    AzureDeployPlugin.prototype.checkForIndividualFunctionDeploy = function () {
        if (this.options.function) {
            throw new Error("The Azure Functions plugin does not currently support deployments of individual functions. " +
                "Azure Functions are zipped up as a package and deployed together as a unit");
        }
    };
    return AzureDeployPlugin;
}(azureBasePlugin_1.AzureBasePlugin));
exports.AzureDeployPlugin = AzureDeployPlugin;
