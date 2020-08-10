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
var open_1 = __importDefault(require("open"));
var ms_rest_nodeauth_1 = require("@azure/ms-rest-nodeauth");
var simpleFileTokenCache_1 = require("../plugins/login/utils/simpleFileTokenCache");
var baseService_1 = require("./baseService");
var AzureLoginService = /** @class */ (function (_super) {
    __extends(AzureLoginService, _super);
    function AzureLoginService(serverless, options) {
        return _super.call(this, serverless, options, false) || this;
    }
    /**
     * Logs in via service principal login if environment variables are
     * set or via interactive login if environment variables are not set
     * @param options Options for different authentication methods
     */
    AzureLoginService.prototype.login = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var subscriptionId, clientId, secret, tenantId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        subscriptionId = this.configService.getSubscriptionId();
                        clientId = process.env.AZURE_CLIENT_ID;
                        secret = process.env.AZURE_CLIENT_SECRET;
                        tenantId = process.env.AZURE_TENANT_ID;
                        if (!(subscriptionId && clientId && secret && tenantId)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.servicePrincipalLogin(clientId, secret, tenantId, options)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.interactiveLogin(options)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AzureLoginService.prototype.interactiveLogin = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var authResp, fileTokenCache;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        authResp = { credentials: undefined, subscriptions: [] };
                        fileTokenCache = new simpleFileTokenCache_1.SimpleFileTokenCache();
                        if (!fileTokenCache.isEmpty()) return [3 /*break*/, 3];
                        return [4 /*yield*/, open_1.default("https://microsoft.com/devicelogin")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, ms_rest_nodeauth_1.interactiveLoginWithAuthResponse(__assign({}, options, { tokenCache: fileTokenCache }))];
                    case 2:
                        authResp = _a.sent();
                        fileTokenCache.addSubs(authResp.subscriptions);
                        return [3 /*break*/, 4];
                    case 3:
                        authResp.credentials = new ms_rest_nodeauth_1.DeviceTokenCredentials(undefined, undefined, fileTokenCache.first().userId, undefined, undefined, fileTokenCache);
                        authResp.subscriptions = fileTokenCache.listSubscriptions();
                        _a.label = 4;
                    case 4: return [2 /*return*/, authResp];
                }
            });
        });
    };
    AzureLoginService.prototype.servicePrincipalLogin = function (clientId, secret, tenantId, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ms_rest_nodeauth_1.loginWithServicePrincipalSecretWithAuthResponse(clientId, secret, tenantId, options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AzureLoginService.prototype.getSubscriptionId = function () {
        return this.configService.getSubscriptionId();
    };
    return AzureLoginService;
}(baseService_1.BaseService));
exports.AzureLoginService = AzureLoginService;
