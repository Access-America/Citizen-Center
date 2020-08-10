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
var path_1 = require("path");
var bindings_1 = require("./bindings");
var constants_1 = require("./constants");
var readline_1 = require("readline");
var cross_spawn_1 = require("cross-spawn");
var runtime_1 = require("../config/runtime");
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.getFunctionMetaData = function (functionName, serverless, offlineMode) {
        if (offlineMode === void 0) { offlineMode = false; }
        return __awaiter(this, void 0, void 0, function () {
            var config, bindings, bindingSettingsNames, bindingSettings, bindingUserSettings, bindingType, functionJson, functionObject, handler, events, params, parsedBindings, bindingTypes, bindingDisplayNames, eventsIndex, index, azureSettings, bindingTypeIndex, bindingUserSettingsMetaData, azureSettingKeyIndex, key, _a, handlerPath, entryPoint;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        config = serverless.service;
                        bindings = [];
                        bindingSettingsNames = [];
                        bindingSettings = [];
                        bindingUserSettings = {};
                        functionJson = { disabled: false, bindings: [] };
                        functionObject = serverless.service.getFunction(functionName);
                        handler = functionObject.handler;
                        events = functionObject["events"];
                        params = {
                            functionJson: null
                        };
                        return [4 /*yield*/, bindings_1.BindingUtils.getBindingsMetaData(serverless)];
                    case 1:
                        parsedBindings = _b.sent();
                        bindingTypes = parsedBindings.bindingTypes;
                        bindingDisplayNames = parsedBindings.bindingDisplayNames;
                        for (eventsIndex = 0; eventsIndex < events.length; eventsIndex++) {
                            bindingType = Object.keys(functionObject["events"][eventsIndex])[0];
                            if (eventsIndex === 0) {
                                bindingType += constants_1.constants.trigger;
                            }
                            index = bindingTypes.indexOf(bindingType);
                            if (index < 0) {
                                throw new Error("Binding  " + bindingType + " not supported");
                            }
                            serverless.cli.log("Building binding for function: " + functionName + " event: " + bindingType);
                            bindingUserSettings = {};
                            azureSettings = __assign({}, events[eventsIndex][constants_1.constants.xAzureSettings], events[eventsIndex]);
                            bindingTypeIndex = bindingTypes.indexOf(bindingType);
                            bindingUserSettingsMetaData = bindings_1.BindingUtils.getBindingUserSettingsMetaData(azureSettings, bindingType, bindingTypeIndex, bindingDisplayNames);
                            bindingTypeIndex = bindingUserSettingsMetaData.index;
                            bindingUserSettings = bindingUserSettingsMetaData.userSettings;
                            if (bindingType.includes(constants_1.constants.queue) && functionObject["events"][eventsIndex].queue) {
                                bindingUserSettings[constants_1.constants.queueName] = functionObject["events"][eventsIndex].queue;
                            }
                            if (bindingTypeIndex < 0) {
                                throw new Error("Binding not supported");
                            }
                            bindingSettings = parsedBindings.bindingSettings[bindingTypeIndex];
                            bindingSettingsNames = parsedBindings.bindingSettingsNames[bindingTypeIndex];
                            if (azureSettings) {
                                for (azureSettingKeyIndex = 0; azureSettingKeyIndex < Object.keys(azureSettings).length; azureSettingKeyIndex++) {
                                    key = Object.keys(azureSettings)[azureSettingKeyIndex];
                                    if (bindingSettingsNames.indexOf(key) >= 0) {
                                        bindingUserSettings[key] = azureSettings[key];
                                    }
                                }
                            }
                            bindings.push(bindings_1.BindingUtils.getBinding(bindingType, bindingSettings, bindingUserSettings));
                        }
                        if (bindingType === constants_1.constants.httpTrigger) {
                            bindings.push(bindings_1.BindingUtils.getHttpOutBinding());
                        }
                        functionJson.bindings = bindings;
                        params.functionJson = functionJson;
                        _a = Utils.getEntryPointAndHandlerPath(handler, config), handlerPath = _a.handlerPath, entryPoint = _a.entryPoint;
                        if (functionObject["scriptFile"]) {
                            handlerPath = functionObject["scriptFile"];
                        }
                        if (offlineMode && config.plugins && config.plugins.includes("serverless-webpack")) {
                            handlerPath = path_1.join(".webpack", "service", handlerPath);
                        }
                        return [2 /*return*/, {
                                entryPoint: entryPoint,
                                handlerPath: path_1.relative(functionName, handlerPath).replace(/\\/g, "/"),
                                params: params
                            }];
                }
            });
        });
    };
    Utils.getEntryPointAndHandlerPath = function (handler, config) {
        var handlerSplit = handler.split(".");
        var entryPoint = (handlerSplit.length > 1) ? handlerSplit[handlerSplit.length - 1] : undefined;
        var handlerPath = ((handlerSplit.length > 1) ? handlerSplit[0] : handler)
            + constants_1.constants.runtimeExtensions[runtime_1.getRuntimeLanguage(config.provider.runtime)];
        return {
            entryPoint: entryPoint,
            handlerPath: handlerPath
        };
    };
    /**
     * Take the first `substringSize` characters from each string and return as one string
     * @param substringSize Size of substring to take from beginning of each string
     * @param args Strings to take substrings from
     */
    Utils.appendSubstrings = function (substringSize) {
        var e_1, _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var result = "";
        try {
            for (var args_1 = __values(args), args_1_1 = args_1.next(); !args_1_1.done; args_1_1 = args_1.next()) {
                var s = args_1_1.value;
                result += (s.substr(0, substringSize));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (args_1_1 && !args_1_1.done && (_a = args_1.return)) _a.call(args_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return result;
    };
    Utils.get = function (object, key, defaultValue) {
        if (key in object) {
            return object[key];
        }
        return defaultValue;
    };
    Utils.getTimestampFromName = function (name) {
        var regex = /.*-t([0-9]+)/;
        var match = name.match(regex);
        if (!match || match.length < 2) {
            return null;
        }
        return match[1];
    };
    Utils.getIncomingBindingConfig = function (functionConfig) {
        return functionConfig.events.find(function (event) {
            var settings = Utils.get(event, constants_1.constants.xAzureSettings, event);
            return settings && (!settings.direction || settings.direction === "in");
        });
    };
    Utils.getOutgoingBindingConfig = function (functionConfig) {
        return functionConfig.events.find(function (event) {
            var settings = Utils.get(event, constants_1.constants.xAzureSettings, event);
            return settings && settings.direction === "out";
        });
    };
    /**
     * Runs an operation with auto retry policy
     * @param operation The operation to run
     * @param maxRetries The max number of retries
     * @param retryWaitInterval The time to wait between retries
     */
    Utils.runWithRetry = function (operation, maxRetries, retryWaitInterval) {
        if (maxRetries === void 0) { maxRetries = 3; }
        if (retryWaitInterval === void 0) { retryWaitInterval = 1000; }
        return __awaiter(this, void 0, void 0, function () {
            var retry, error, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        retry = 0;
                        error = null;
                        _a.label = 1;
                    case 1:
                        if (!(retry < maxRetries)) return [3 /*break*/, 7];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        retry++;
                        return [4 /*yield*/, operation(retry)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        e_2 = _a.sent();
                        error = e_2;
                        return [3 /*break*/, 5];
                    case 5: return [4 /*yield*/, Utils.wait(retryWaitInterval)];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 7: return [2 /*return*/, Promise.reject(error)];
                }
            });
        });
    };
    /**
     * Waits for the specified amount of time.
     * @param time The amount of time to wait (default = 1000ms)
     */
    Utils.wait = function (time) {
        if (time === void 0) { time = 1000; }
        return new Promise(function (resolve) {
            setTimeout(resolve, time);
        });
    };
    /**
     * Wait for user input and return it
     */
    Utils.waitForUserInput = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rl;
            return __generator(this, function (_a) {
                rl = readline_1.createInterface({
                    input: process.stdin,
                    output: process.stdout,
                });
                return [2 /*return*/, new Promise(function (resolve) {
                        rl.question("", function (answer) {
                            rl.close();
                            resolve(answer);
                        });
                    })];
            });
        });
    };
    /*
     * Spawn a Node child process from executable within node_modules/.bin
     * @param command CLI Command - NO ARGS
     * @param spawnArgs Array of arguments for CLI command
     */
    Utils.spawnLocal = function (options) {
        var serverless = options.serverless, command = options.command;
        var localCommand = path_1.join(serverless.config.servicePath, "node_modules", ".bin", command);
        return this.spawn(__assign({}, options, { command: localCommand, commandName: command }));
    };
    // public static spawn()
    Utils.spawn = function (options) {
        var _this = this;
        var command = options.command, serverless = options.serverless, commandArgs = options.commandArgs, onSigInt = options.onSigInt, commandName = options.commandName, stdio = options.stdio, cwd = options.cwd;
        var env = __assign({}, process.env, serverless.service.provider["environment"]);
        if (!options.silent) {
            serverless.cli.log("Spawning process '" + (commandName || command) + " " + commandArgs.join(" ") + "'");
        }
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var spawnOptions, childProcess;
            return __generator(this, function (_a) {
                spawnOptions = {
                    env: env,
                    stdio: stdio || "inherit",
                    cwd: cwd
                };
                childProcess = cross_spawn_1.spawn(command, commandArgs, spawnOptions);
                if (onSigInt) {
                    process.on("SIGINT", onSigInt);
                }
                childProcess.on("exit", function (code, signal) {
                    if (code === 0) {
                        resolve();
                    }
                    else {
                        serverless.cli.log("Got an exit");
                        reject(code + " " + signal);
                    }
                });
                return [2 /*return*/];
            });
        }); });
    };
    return Utils;
}());
exports.Utils = Utils;
