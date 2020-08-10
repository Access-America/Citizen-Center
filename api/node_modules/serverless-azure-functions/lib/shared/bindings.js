"use strict";
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
var constants_1 = require("./constants");
var defaultBindingsJson = require("./bindings.json"); // eslint-disable-line @typescript-eslint/no-var-requires
var BindingUtils = /** @class */ (function () {
    function BindingUtils() {
    }
    BindingUtils.getBindingsMetaData = function (serverless) {
        return __awaiter(this, void 0, void 0, function () {
            var bindingDisplayNames, bindingTypes, bindingSettings, bindingSettingsNames, bindingsJson, bindingsIndex, settingsNames, bindingSettingsIndex;
            return __generator(this, function (_a) {
                bindingDisplayNames = [];
                bindingTypes = [];
                bindingSettings = [];
                bindingSettingsNames = [];
                serverless.cli.log("Parsing Azure Functions Bindings.json...");
                bindingsJson = defaultBindingsJson;
                for (bindingsIndex = 0; bindingsIndex < bindingsJson[constants_1.constants.bindings].length; bindingsIndex++) {
                    settingsNames = [];
                    bindingTypes.push(bindingsJson[constants_1.constants.bindings][bindingsIndex][constants_1.constants.type]);
                    bindingDisplayNames.push(bindingsJson[constants_1.constants.bindings][bindingsIndex][constants_1.constants.displayName].toLowerCase());
                    bindingSettings[bindingsIndex] = bindingsJson[constants_1.constants.bindings][bindingsIndex][constants_1.constants.settings];
                    for (bindingSettingsIndex = 0; bindingSettingsIndex < bindingSettings[bindingsIndex].length; bindingSettingsIndex++) {
                        settingsNames.push(bindingSettings[bindingsIndex][bindingSettingsIndex][constants_1.constants.name]);
                    }
                    bindingSettingsNames[bindingsIndex] = settingsNames;
                }
                return [2 /*return*/, {
                        bindingDisplayNames: bindingDisplayNames,
                        bindingTypes: bindingTypes,
                        bindingSettings: bindingSettings,
                        bindingSettingsNames: bindingSettingsNames
                    }];
            });
        });
    };
    BindingUtils.getBindingUserSettingsMetaData = function (azureSettings, bindingType, bindingTypeIndex, bindingDisplayNames) {
        var bindingDisplayNamesIndex = bindingTypeIndex;
        var bindingUserSettings = {};
        if (azureSettings) {
            var directionIndex = Object.keys(azureSettings).indexOf(constants_1.constants.direction);
            if (directionIndex >= 0) {
                var key = Object.keys(azureSettings)[directionIndex];
                var displayName = "$" + bindingType + azureSettings[key] + "_displayName";
                bindingDisplayNamesIndex = bindingDisplayNames.indexOf(displayName.toLowerCase());
                bindingUserSettings[constants_1.constants.direction] = azureSettings[key];
            }
        }
        var bindingUserSettingsMetaData = {
            index: bindingDisplayNamesIndex,
            userSettings: bindingUserSettings
        };
        return bindingUserSettingsMetaData;
    };
    BindingUtils.getHttpOutBinding = function () {
        var binding = {};
        binding[constants_1.constants.type] = "http";
        binding[constants_1.constants.direction] = constants_1.constants.outDirection;
        binding[constants_1.constants.name] = "res";
        return binding;
    };
    BindingUtils.getBinding = function (bindingType, bindingSettings, bindingUserSettings) {
        var binding = {};
        binding[constants_1.constants.type] = bindingType;
        if (bindingUserSettings && bindingUserSettings[constants_1.constants.direction]) {
            binding[constants_1.constants.direction] = bindingUserSettings[constants_1.constants.direction];
        }
        else if (bindingType.includes(constants_1.constants.trigger)) {
            binding[constants_1.constants.direction] = constants_1.constants.inDirection;
        }
        else {
            binding[constants_1.constants.direction] = constants_1.constants.outDirection;
        }
        for (var bindingSettingsIndex = 0; bindingSettingsIndex < bindingSettings.length; bindingSettingsIndex++) {
            var name_1 = bindingSettings[bindingSettingsIndex][constants_1.constants.name];
            if (bindingUserSettings && bindingUserSettings[name_1] !== undefined && bindingUserSettings[name_1] !== null) {
                binding[name_1] = bindingUserSettings[name_1];
                continue;
            }
            var value = bindingSettings[bindingSettingsIndex][constants_1.constants.value];
            var required = bindingSettings[bindingSettingsIndex][constants_1.constants.required];
            var resource = bindingSettings[bindingSettingsIndex][constants_1.constants.resource];
            if (required) {
                var defaultValue = bindingSettings[bindingSettingsIndex][constants_1.constants.defaultValue];
                if (defaultValue) {
                    binding[name_1] = defaultValue;
                }
                else if (name_1 === constants_1.constants.connection && resource.toLowerCase() === constants_1.constants.storage) {
                    binding[name_1] = "AzureWebJobsStorage";
                }
                else {
                    throw new Error("Required property " + name_1 + " is missing for binding:" + bindingType);
                }
            }
            if (value === constants_1.constants.enum && name_1 !== constants_1.constants.webHookType) {
                var enumValues = bindingSettings[bindingSettingsIndex][constants_1.constants.enum];
                binding[name_1] = enumValues[0][constants_1.constants.value];
            }
        }
        return binding;
    };
    return BindingUtils;
}());
exports.BindingUtils = BindingUtils;
