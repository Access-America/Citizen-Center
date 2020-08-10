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
var functionApp_1 = require("./resources/functionApp");
var appInsights_1 = require("./resources/appInsights");
var storageAccount_1 = require("./resources/storageAccount");
var appServicePlan_1 = require("./resources/appServicePlan");
var hostingEnvironment_1 = require("./resources/hostingEnvironment");
var virtualNetwork_1 = require("./resources/virtualNetwork");
var compositeArmTemplate_1 = require("./compositeArmTemplate");
var AppServiceEnvironmentTemplate = /** @class */ (function (_super) {
    __extends(AppServiceEnvironmentTemplate, _super);
    function AppServiceEnvironmentTemplate() {
        return _super.call(this, [
            new functionApp_1.FunctionAppResource(),
            new appInsights_1.AppInsightsResource(),
            new storageAccount_1.StorageAccountResource(),
            new appServicePlan_1.AppServicePlanResource(),
            new hostingEnvironment_1.HostingEnvironmentResource(),
            new virtualNetwork_1.VirtualNetworkResource(),
        ]) || this;
    }
    AppServiceEnvironmentTemplate.prototype.getTemplate = function (config) {
        var template = _super.prototype.getTemplate.call(this, config);
        template.parameters.appServicePlanSkuName.defaultValue = "I1";
        template.parameters.appServicePlanSkuTier.defaultValue = "Isolated";
        // Update the app service plan to point to the hosting environment
        var appServicePlan = template.resources.find(function (resource) { return resource.type === "Microsoft.Web/serverfarms"; });
        if (appServicePlan) {
            appServicePlan.dependsOn = __spread((appServicePlan.dependsOn || []), ["[resourceId('Microsoft.Web/hostingEnvironments', parameters('hostingEnvironmentName'))]"]);
            appServicePlan.properties.hostingEnvironmentProfile = __assign({}, appServicePlan.properties.hostingEnvironmentProfile, { id: "[resourceId('Microsoft.Web/hostingEnvironments', parameters('hostingEnvironmentName'))]" });
        }
        // Update the functionApp resource to include the app service plan references
        var app = template.resources.find(function (resource) { return resource.type === "Microsoft.Web/sites"; });
        if (app) {
            app.dependsOn = __spread((app.dependsOn || []), ["[concat('Microsoft.Web/serverfarms/', parameters('appServicePlanName'))]"]);
            app.properties.serverFarmId = "[resourceId('Microsoft.Web/serverfarms', parameters('appServicePlanName'))]";
            app.properties.hostingEnvironmentProfile = __assign({}, app.properties.hostingEnvironmentProfile, { id: "[resourceId('Microsoft.Web/hostingEnvironments', parameters('hostingEnvironmentName'))]" });
        }
        return template;
    };
    return AppServiceEnvironmentTemplate;
}(compositeArmTemplate_1.CompositeArmTemplate));
exports.default = new AppServiceEnvironmentTemplate();
