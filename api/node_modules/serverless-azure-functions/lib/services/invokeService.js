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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var querystring_1 = require("querystring");
var apim_1 = require("../armTemplates/resources/apim");
var constants_1 = require("../shared/constants");
var baseService_1 = require("./baseService");
var functionAppService_1 = require("./functionAppService");
var InvokeMode;
(function (InvokeMode) {
    InvokeMode[InvokeMode["FUNCTION"] = 0] = "FUNCTION";
    InvokeMode[InvokeMode["LOCAL"] = 1] = "LOCAL";
    InvokeMode[InvokeMode["APIM"] = 2] = "APIM";
})(InvokeMode = exports.InvokeMode || (exports.InvokeMode = {}));
var InvokeService = /** @class */ (function (_super) {
    __extends(InvokeService, _super);
    function InvokeService(serverless, options, mode) {
        if (mode === void 0) { mode = InvokeMode.FUNCTION; }
        var _this = this;
        var local = mode === InvokeMode.LOCAL;
        _this = _super.call(this, serverless, options, !local) || this;
        _this.mode = mode;
        if (!local) {
            _this.functionAppService = new functionAppService_1.FunctionAppService(serverless, options);
        }
        return _this;
    }
    /**
     * Invoke an Azure Function
     * @param method HTTP method
     * @param functionName Name of function to invoke
     * @param data Data to use as body or query params
     */
    InvokeService.prototype.invoke = function (method, functionName, data) {
        return __awaiter(this, void 0, void 0, function () {
            var functionObject, eventType, options, url, err_1, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        functionObject = this.configService.getFunctionConfig()[functionName];
                        /* accesses the admin key */
                        if (!functionObject) {
                            this.log("Function " + functionName + " does not exist");
                            return [2 /*return*/];
                        }
                        eventType = Object.keys(functionObject["events"][0])[0];
                        if (eventType !== "http") {
                            this.log("Needs to be an http function");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.getRequestOptions(method, data)];
                    case 1:
                        options = _a.sent();
                        return [4 /*yield*/, this.getUrl(functionName)];
                    case 2:
                        url = _a.sent();
                        if (method === "GET" && data) {
                            url += "?" + this.getQueryString(data);
                            options.params = data;
                        }
                        this.log("Invocation url: " + url);
                        this.log("Invoking function " + functionName + " with " + method + " request");
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, axios_1.default(url, options)];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5:
                        err_1 = _a.sent();
                        response = err_1.response;
                        throw new Error("HTTP Error: " + response.status + " - " + response.data);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    InvokeService.prototype.getUrl = function (functionName) {
        return __awaiter(this, void 0, void 0, function () {
            var functionApp, functionConfig, httpConfig;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.mode === InvokeMode.LOCAL || this.mode === InvokeMode.APIM) {
                            return [2 /*return*/, this.getHost() + "/api/" + this.getConfiguredFunctionRoute(functionName)];
                        }
                        return [4 /*yield*/, this.functionAppService.get()];
                    case 1:
                        functionApp = _a.sent();
                        return [4 /*yield*/, this.functionAppService.getFunction(functionApp, functionName)];
                    case 2:
                        functionConfig = _a.sent();
                        httpConfig = this.functionAppService.getFunctionHttpTriggerConfig(functionApp, functionConfig);
                        return [2 /*return*/, "http://" + httpConfig.url];
                }
            });
        });
    };
    InvokeService.prototype.getLocalHost = function () {
        return "http://localhost:" + this.getOption("port", constants_1.constants.defaults.localPort);
    };
    InvokeService.prototype.getApimHost = function () {
        return "https://" + apim_1.ApimResource.getResourceName(this.config) + ".azure-api.net";
    };
    InvokeService.prototype.getConfiguredFunctionRoute = function (functionName) {
        try {
            var route = this.config.functions[functionName].events[0].route;
            return route || functionName;
        }
        catch (_a) {
            return functionName;
        }
    };
    InvokeService.prototype.getQueryString = function (eventData) {
        if (typeof eventData === "string") {
            try {
                eventData = JSON.parse(eventData);
            }
            catch (error) {
                throw new Error("The specified input data isn't a valid JSON string. " +
                    "Please correct it and try invoking the function again.");
            }
        }
        return querystring_1.stringify(eventData);
    };
    /**
     * Get options object
     * @param method The method used (POST or GET)
     * @param data Data to use as body or query params
     */
    InvokeService.prototype.getRequestOptions = function (method, data) {
        return __awaiter(this, void 0, void 0, function () {
            var host, _a, _b, options, _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        if (!(this.mode === InvokeMode.LOCAL)) return [3 /*break*/, 1];
                        _a = this.getLocalHost();
                        return [3 /*break*/, 5];
                    case 1:
                        if (!(this.mode === InvokeMode.APIM)) return [3 /*break*/, 2];
                        _b = this.getApimHost();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.functionAppService.get()];
                    case 3:
                        _b = _f.sent();
                        _f.label = 4;
                    case 4:
                        _a = _b;
                        _f.label = 5;
                    case 5:
                        host = _a;
                        options = {
                            host: host,
                            method: method,
                            data: data,
                        };
                        if (!(this.mode !== InvokeMode.LOCAL)) return [3 /*break*/, 7];
                        _c = options;
                        _d = {};
                        _e = "x-functions-key";
                        return [4 /*yield*/, this.functionAppService.getMasterKey()];
                    case 6:
                        _c.headers = (_d[_e] = _f.sent(),
                            _d);
                        _f.label = 7;
                    case 7: return [2 /*return*/, options];
                }
            });
        });
    };
    InvokeService.prototype.getHost = function () {
        if (this.mode === InvokeMode.LOCAL) {
            return this.getLocalHost();
        }
        else if (this.mode === InvokeMode.APIM) {
            return this.getApimHost();
        }
    };
    return InvokeService;
}(baseService_1.BaseService));
exports.InvokeService = InvokeService;
