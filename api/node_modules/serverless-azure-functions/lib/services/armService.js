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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var arm_resources_1 = require("@azure/arm-resources");
var deep_equal_1 = __importDefault(require("deep-equal"));
var fs_1 = __importDefault(require("fs"));
var jsonpath_1 = __importDefault(require("jsonpath"));
var path_1 = __importDefault(require("path"));
var guard_1 = require("../shared/guard");
var baseService_1 = require("./baseService");
var resourceService_1 = require("./resourceService");
var ArmService = /** @class */ (function (_super) {
    __extends(ArmService, _super);
    function ArmService(serverless, options) {
        var _this = _super.call(this, serverless, options) || this;
        _this.resourceClient = new arm_resources_1.ResourceManagementClient(_this.credentials, _this.subscriptionId);
        return _this;
    }
    /**
     * Creates an ARM deployment from a well-known configuration (consumption, premium, ase)
     * @param type The well-known template type
     */
    ArmService.prototype.createDeploymentFromType = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var ApimResource, apimResource, template, e_1, mergedTemplate, parameters, apimTemplate, apimParameters;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        guard_1.Guard.empty(type);
                        this.log("-> Creating ARM template from type: " + type);
                        return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../armTemplates/resources/apim")); })];
                    case 1:
                        ApimResource = (_a.sent()).ApimResource;
                        apimResource = new ApimResource();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../armTemplates/" + type)); })];
                    case 3:
                        template = (_a.sent()).default;
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        throw new Error("Unable to find template with name " + type + " ");
                    case 5:
                        mergedTemplate = template.getTemplate(this.config);
                        parameters = template.getParameters(this.config);
                        if (this.config.provider.apim) {
                            apimTemplate = apimResource.getTemplate();
                            apimParameters = apimResource.getParameters(this.config);
                            mergedTemplate.parameters = __assign({}, mergedTemplate.parameters, apimTemplate.parameters);
                            mergedTemplate.resources = __spread(mergedTemplate.resources, apimTemplate.resources);
                            parameters = __assign({}, parameters, apimParameters);
                        }
                        return [2 /*return*/, {
                                template: mergedTemplate,
                                parameters: parameters,
                            }];
                }
            });
        });
    };
    /**
     * Creates an ARM deployment from the serverless custom yaml configuration
     * @param armTemplateConfig The serverless yaml ARM template configuration
     */
    ArmService.prototype.createDeploymentFromConfig = function (armTemplateConfig) {
        guard_1.Guard.null(armTemplateConfig);
        this.log("-> Creating ARM template from file: " + armTemplateConfig.file);
        var templateFilePath = path_1.default.join(this.serverless.config.servicePath, armTemplateConfig.file);
        var template = JSON.parse(fs_1.default.readFileSync(templateFilePath, "utf8"));
        return Promise.resolve({
            template: template,
            parameters: armTemplateConfig.parameters
        });
    };
    /**
     * Deploys the specified ARM template to Azure via REST service call
     * @param deployment The ARM template to deploy
     */
    ArmService.prototype.deployTemplate = function (deployment) {
        return __awaiter(this, void 0, void 0, function () {
            var resourceService, previous, _a, _b, key, armDeployment, result, err_1, previousDeployment, errorDetails;
            var e_2, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        guard_1.Guard.null(deployment);
                        this.applyEnvironmentVariables(deployment);
                        resourceService = new resourceService_1.ResourceService(this.serverless, this.options);
                        return [4 /*yield*/, resourceService.getPreviousDeploymentTemplate()];
                    case 1:
                        previous = _d.sent();
                        if (this.areDeploymentsEqual(deployment, previous)) {
                            this.log("Generated template same as previous. Skipping ARM deployment");
                            return [2 /*return*/];
                        }
                        deployment.parameters = deployment.parameters || {};
                        try {
                            for (_a = __values(Object.keys(deployment.parameters)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                key = _b.value;
                                if (!deployment.parameters[key].value) {
                                    delete deployment.parameters[key];
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        armDeployment = {
                            properties: __assign({}, deployment, { mode: "Incremental" })
                        };
                        // Deploy ARM template
                        this.log("-> Deploying ARM template...");
                        this.log("---> Resource Group: " + this.resourceGroup);
                        this.log("---> Deployment Name: " + this.deploymentName);
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 4, , 6]);
                        return [4 /*yield*/, this.resourceClient.deployments.createOrUpdate(this.resourceGroup, this.deploymentName, armDeployment)];
                    case 3:
                        result = _d.sent();
                        this.log("-> ARM deployment complete");
                        return [2 /*return*/, result];
                    case 4:
                        err_1 = _d.sent();
                        return [4 /*yield*/, resourceService.getPreviousDeployment()];
                    case 5:
                        previousDeployment = _d.sent();
                        if (previousDeployment) {
                            errorDetails = previousDeployment.properties["error"];
                            if (errorDetails) {
                                throw new Error(this.deploymentErrorToString(errorDetails));
                            }
                        }
                        throw err_1;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ArmService.prototype.areDeploymentsEqual = function (current, previous) {
        if (!current || !previous) {
            return false;
        }
        var mergedDefaultParameters = this.mergeDefaultParams(current.parameters, current.template.parameters);
        var templateNormalizer = function (template) {
            return __assign({}, template, { resources: template.resources.map(function (item) {
                    return __assign({}, item, { 
                        // Currently ignoring `identity` property given to function app arm template
                        identity: undefined });
                }) });
        };
        var paramsNormalizer = function (params) {
            var e_3, _a;
            var normalized = {};
            if (!params) {
                return normalized;
            }
            var keys = Object.keys(params);
            try {
                for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                    var key = keys_1_1.value;
                    var original = params[key];
                    normalized[key] = __assign({}, original, { type: original.type.toLowerCase() });
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return normalized;
        };
        return deep_equal_1.default(paramsNormalizer(mergedDefaultParameters), paramsNormalizer(previous.parameters)) && deep_equal_1.default(templateNormalizer(previous.template), templateNormalizer(current.template));
    };
    ArmService.prototype.deploymentErrorToString = function (deploymentError) {
        var _this = this;
        if (!deploymentError.code || !deploymentError.message) {
            return JSON.stringify(deploymentError);
        }
        var errorString = deploymentError.code + " - " + deploymentError.message;
        if (deploymentError.details) {
            errorString += [
                "------------------------",
                "DEPLOYMENT ERROR DETAILS",
                "------------------------",
            ].join("\n") + "\n";
            deploymentError.details.forEach(function (childError) {
                errorString += "\n" + _this.deploymentErrorToString(childError);
            });
        }
        return errorString;
    };
    /**
     * Merge parameters and default parameters for comparison with previously deployed template
     * @param parameters Parameters with specified values
     * @param defaultParameters Parameters with `type` and `defaultValue`
     */
    ArmService.prototype.mergeDefaultParams = function (parameters, defaultParameters) {
        var mergedParams = {};
        parameters = parameters || {};
        defaultParameters = defaultParameters || {};
        Object.keys(defaultParameters).forEach(function (key) {
            var defaultParam = defaultParameters[key];
            var param = parameters[key];
            mergedParams[key] = {
                type: defaultParam.type,
                value: (param && param.value) ? param.value : defaultParam.value || defaultParam.defaultValue
            };
        });
        return mergedParams;
    };
    /**
     * Applies sls yaml environment variables into the appSettings section of the function app configuration
     * @param deployment The ARM deployment
     */
    ArmService.prototype.applyEnvironmentVariables = function (deployment) {
        // Check if there are custom environment variables defined that need to be
        // added to the ARM template used in the deployment.
        var environmentVariables = this.config.provider.environment;
        if (environmentVariables) {
            this.log("-> Merging environment configuration");
            // This is a json path expression
            // Learn more @ https://goessner.net/articles/JsonPath/index.html#e2
            var appSettingsPath = "$.resources[?(@.type==\"Microsoft.Web/sites\")].properties.siteConfig.appSettings";
            // Merges serverless yaml environment configuration into the app settings of the template
            jsonpath_1.default.apply(deployment.template, appSettingsPath, function (appSettingsList) {
                Object.keys(environmentVariables).forEach(function (key) {
                    appSettingsList.push({
                        name: key,
                        value: environmentVariables[key]
                    });
                });
                return appSettingsList;
            });
        }
    };
    return ArmService;
}(baseService_1.BaseService));
exports.ArmService = ArmService;
