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
var serverless_1 = require("../../models/serverless");
var packageService_1 = require("../../services/packageService");
var azureBasePlugin_1 = require("../azureBasePlugin");
var runtime_1 = require("../../config/runtime");
var compilerService_1 = require("../../services/compilerService");
var configService_1 = require("../../services/configService");
var AzurePackagePlugin = /** @class */ (function (_super) {
    __extends(AzurePackagePlugin, _super);
    function AzurePackagePlugin(serverless, options) {
        var _this = _super.call(this, serverless, options) || this;
        _this.bindingsCreated = false;
        _this.hooks = {
            "before:package:setupProviderConfiguration": _this.setupProviderConfiguration.bind(_this),
            "before:webpack:package:packageModules": _this.webpack.bind(_this),
            "after:package:finalize": _this.finalize.bind(_this),
        };
        var configService = new configService_1.ConfigService(serverless, options);
        if (configService.shouldCompileBeforePublish()) {
            delete _this.serverless.pluginManager.hooks["package:createDeploymentArtifacts"];
            _this.hooks["package:createDeploymentArtifacts"] = _this.compileArtifact.bind(_this);
        }
        return _this;
    }
    AzurePackagePlugin.prototype.setupProviderConfiguration = function () {
        return __awaiter(this, void 0, void 0, function () {
            var packageService;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        packageService = new packageService_1.PackageService(this.serverless, this.options);
                        if (this.processedCommands[0] === serverless_1.ServerlessCliCommand.DEPLOY && this.getOption("package")) {
                            this.log("Deploying pre-built package. No need to create bindings");
                            return [2 /*return*/];
                        }
                        if (this.config.package && this.config.package.individually) {
                            throw new Error("Cannot package Azure Functions individually. " +
                                "Remove `individually` attribute from the `package` section of the serverless config");
                        }
                        packageService.cleanUpServerlessDir();
                        return [4 /*yield*/, packageService.createBindings()];
                    case 1:
                        _a.sent();
                        this.bindingsCreated = true;
                        return [2 /*return*/, Promise.resolve()];
                }
            });
        });
    };
    AzurePackagePlugin.prototype.compileArtifact = function () {
        return __awaiter(this, void 0, void 0, function () {
            var compilerService;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        compilerService = new compilerService_1.CompilerService(this.serverless, this.options);
                        return [4 /*yield*/, compilerService.build(runtime_1.BuildMode.RELEASE)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AzurePackagePlugin.prototype.webpack = function () {
        return __awaiter(this, void 0, void 0, function () {
            var packageService;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        packageService = new packageService_1.PackageService(this.serverless, this.options);
                        if (this.getOption("package")) {
                            this.log("No need to perform webpack. Using pre-existing package");
                            return [2 /*return*/, Promise.resolve()];
                        }
                        if (!!this.bindingsCreated) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.setupProviderConfiguration()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, packageService.prepareWebpack()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Cleans up generated folders & files after packaging is complete
     */
    AzurePackagePlugin.prototype.finalize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var packageService;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        packageService = new packageService_1.PackageService(this.serverless, this.options);
                        if (this.getOption("package")) {
                            this.log("No need to clean up generated folders & files. Using pre-existing package");
                            return [2 /*return*/, Promise.resolve()];
                        }
                        return [4 /*yield*/, packageService.cleanUp()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return AzurePackagePlugin;
}(azureBasePlugin_1.AzureBasePlugin));
exports.AzurePackagePlugin = AzurePackagePlugin;
