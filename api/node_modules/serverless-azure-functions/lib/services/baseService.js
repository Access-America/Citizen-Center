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
var fs_1 = __importDefault(require("fs"));
var request_1 = __importDefault(require("request"));
var storageAccount_1 = require("../armTemplates/resources/storageAccount");
var cliCommandFactory_1 = require("../config/cliCommandFactory");
var constants_1 = require("../shared/constants");
var guard_1 = require("../shared/guard");
var utils_1 = require("../shared/utils");
var configService_1 = require("./configService");
var loggingService_1 = require("./loggingService");
var BaseService = /** @class */ (function () {
    function BaseService(serverless, options, authenticate) {
        if (options === void 0) { options = { stage: null, region: null }; }
        if (authenticate === void 0) { authenticate = true; }
        this.serverless = serverless;
        this.options = options;
        guard_1.Guard.null(serverless);
        this.configService = new configService_1.ConfigService(serverless, options);
        this.loggingService = new loggingService_1.LoggingService(serverless, options);
        this.cliCommandFactory = new cliCommandFactory_1.CliCommandFactory();
        this.config = this.configService.getConfig();
        this.baseUrl = "https://management.azure.com";
        this.serviceName = this.configService.getServiceName();
        this.credentials = serverless.variables[constants_1.constants.variableKeys.azureCredentials];
        this.subscriptionId = this.configService.getSubscriptionId();
        this.resourceGroup = this.configService.getResourceGroupName();
        this.deploymentName = this.configService.getDeploymentName();
        this.artifactName = this.configService.getArtifactName(this.deploymentName);
        this.storageAccountName = storageAccount_1.StorageAccountResource.getResourceName(this.config);
        if (!this.credentials && authenticate) {
            throw new Error("Azure Credentials has not been set in " + this.constructor.name);
        }
    }
    /**
     * Get the access token from credentials token cache
     */
    BaseService.prototype.getAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.credentials.getToken()];
                    case 1:
                        token = _a.sent();
                        return [2 /*return*/, token ? token.accessToken : null];
                }
            });
        });
    };
    /**
     * Sends an API request using axios HTTP library
     * @param method The HTTP method
     * @param relativeUrl The relative url
     * @param options Additional HTTP options including headers, etc.
     */
    BaseService.prototype.sendApiRequest = function (method, relativeUrl, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var defaultHeaders, _a, _b, allHeaders, requestOptions;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = {};
                        _b = "Bearer ";
                        return [4 /*yield*/, this.getAccessToken()];
                    case 1:
                        defaultHeaders = (_a.Authorization = _b + (_c.sent()),
                            _a);
                        allHeaders = __assign({}, defaultHeaders, options.headers);
                        requestOptions = __assign({}, options, { method: method, headers: allHeaders });
                        return [4 /*yield*/, axios_1.default(relativeUrl, requestOptions)];
                    case 2: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    /**
     * Uploads the specified file via HTTP request
     * @param requestOptions The HTTP request options
     * @param filePath The local file path
     */
    BaseService.prototype.sendFile = function (requestOptions, filePath) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fs_1.default.createReadStream(filePath).pipe(request_1.default(requestOptions, function (err, response) {
                if (err) {
                    _this.log(_this.stringify(err));
                    return reject(err);
                }
                resolve(response);
            }));
        });
    };
    /**
     * Log message to Serverless CLI
     * @param message Message to log
     */
    BaseService.prototype.log = function (message, logLevel) {
        this.loggingService.log(message, logLevel);
    };
    /**
     * Log error message to Serverless CLI
     * @param message Error message to log
     */
    BaseService.prototype.error = function (message) {
        this.loggingService.error(message);
    };
    /**
     * Log warning message to Serverless CLI
     * @param message Warning message to log
     */
    BaseService.prototype.warn = function (message) {
        this.loggingService.warn(message);
    };
    /**
     * Log info message to Serverless CLI
     * @param message Info message to log
     */
    BaseService.prototype.info = function (message) {
        this.loggingService.info(message);
    };
    /**
     * Log debug message to Serverless CLI
     * @param message Debug message to log
     */
    BaseService.prototype.debug = function (message) {
        this.loggingService.debug(message);
    };
    BaseService.prototype.prettyPrint = function (object) {
        this.log(this.stringify(object));
    };
    BaseService.prototype.stringify = function (object) {
        return JSON.stringify(object, null, 2);
    };
    BaseService.prototype.getOption = function (key, defaultValue) {
        return utils_1.Utils.get(this.options, key, defaultValue);
    };
    return BaseService;
}());
exports.BaseService = BaseService;
