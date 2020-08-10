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
Object.defineProperty(exports, "__esModule", { value: true });
var namingService_1 = require("../services/namingService");
var guard_1 = require("../shared/guard");
var CompositeArmTemplate = /** @class */ (function () {
    function CompositeArmTemplate(childTemplates) {
        this.childTemplates = childTemplates;
        guard_1.Guard.null(childTemplates);
    }
    CompositeArmTemplate.prototype.getTemplate = function (config) {
        var template = {
            $schema: "https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",
            contentVersion: "1.0.0.0",
            parameters: {},
            resources: []
        };
        this.childTemplates.forEach(function (resource) {
            var resourceTemplate = resource.getTemplate(config);
            template.parameters = __assign({}, template.parameters, resourceTemplate.parameters);
            template.resources = __spread(template.resources, resourceTemplate.resources);
        });
        return template;
    };
    CompositeArmTemplate.prototype.getParameters = function (config) {
        var parameters = {};
        this.childTemplates.forEach(function (resource) {
            parameters = __assign({}, parameters, resource.getParameters(config), { location: {
                    value: namingService_1.AzureNamingService.getNormalizedRegionName(config.provider.region)
                } });
        });
        return parameters;
    };
    return CompositeArmTemplate;
}());
exports.CompositeArmTemplate = CompositeArmTemplate;
