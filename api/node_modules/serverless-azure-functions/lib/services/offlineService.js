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
var fs_1 = __importDefault(require("fs"));
var baseService_1 = require("./baseService");
var packageService_1 = require("./packageService");
var runtime_1 = require("../config/runtime");
var utils_1 = require("../shared/utils");
var compilerService_1 = require("./compilerService");
var constants_1 = require("../shared/constants");
var path_1 = __importDefault(require("path"));
var OfflineService = /** @class */ (function (_super) {
    __extends(OfflineService, _super);
    function OfflineService(serverless, options) {
        var _this = _super.call(this, serverless, options, false) || this;
        _this.localFiles = {
            "local.settings.json": JSON.stringify({
                IsEncrypted: false,
                Values: {
                    AzureWebJobsStorage: "UseDevelopmentStorage=true",
                    FUNCTIONS_WORKER_RUNTIME: runtime_1.getFunctionWorkerRuntime(_this.config.provider.runtime),
                }
            }),
        };
        _this.packageService = new packageService_1.PackageService(serverless, options);
        return _this;
    }
    OfflineService.prototype.build = function () {
        return __awaiter(this, void 0, void 0, function () {
            var compilerService, filenames, filenames_1, filenames_1_1, filename;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.log("Building offline service");
                        return [4 /*yield*/, this.packageService.createBindings(true)];
                    case 1:
                        _b.sent();
                        if (!runtime_1.isCompiledRuntime(this.config.provider.runtime)) return [3 /*break*/, 3];
                        compilerService = new compilerService_1.CompilerService(this.serverless, this.options);
                        return [4 /*yield*/, compilerService.build(runtime_1.BuildMode.DEBUG)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        filenames = Object.keys(this.localFiles);
                        try {
                            for (filenames_1 = __values(filenames), filenames_1_1 = filenames_1.next(); !filenames_1_1.done; filenames_1_1 = filenames_1.next()) {
                                filename = filenames_1_1.value;
                                if (!fs_1.default.existsSync(filename)) {
                                    fs_1.default.writeFileSync(filename, this.localFiles[filename]);
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (filenames_1_1 && !filenames_1_1.done && (_a = filenames_1.return)) _a.call(filenames_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        this.log("Finished building offline service");
                        return [2 /*return*/];
                }
            });
        });
    };
    OfflineService.prototype.cleanup = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.log("Cleaning up offline files");
                        return [4 /*yield*/, this.packageService.cleanUp()];
                    case 1:
                        _a.sent();
                        this.log("Finished cleaning up offline files");
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Spawn `func host start` from core func tools
     */
    OfflineService.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var additionalArgs, _a, command, args, cwd;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        additionalArgs = this.getOption("spawnargs");
                        _a = this.configService.getCommand("start"), command = _a.command, args = _a.args;
                        cwd = runtime_1.isCompiledRuntime(this.config.provider.runtime)
                            ? path_1.default.join(this.serverless.config.servicePath, constants_1.constants.tmpBuildDir)
                            : undefined;
                        this.log(cwd);
                        return [4 /*yield*/, utils_1.Utils.spawnLocal({
                                serverless: this.serverless,
                                command: command,
                                cwd: cwd,
                                commandArgs: (additionalArgs) ? args.concat(additionalArgs.split(" ")) : args,
                                onSigInt: function () { return __awaiter(_this, void 0, void 0, function () {
                                    var _a;
                                    return __generator(this, function (_b) {
                                        switch (_b.label) {
                                            case 0:
                                                _b.trys.push([0, 4, 5, 6]);
                                                if (!this.getOption("nocleanup")) return [3 /*break*/, 1];
                                                this.log("Skipping offline file cleanup...");
                                                return [3 /*break*/, 3];
                                            case 1: return [4 /*yield*/, this.cleanup()];
                                            case 2:
                                                _b.sent();
                                                _b.label = 3;
                                            case 3: return [3 /*break*/, 6];
                                            case 4:
                                                _a = _b.sent();
                                                return [3 /*break*/, 6];
                                            case 5:
                                                process.exit();
                                                return [7 /*endfinally*/];
                                            case 6: return [2 /*return*/];
                                        }
                                    });
                                }); }
                            })];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return OfflineService;
}(baseService_1.BaseService));
exports.OfflineService = OfflineService;
