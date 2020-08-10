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
var compositeArmTemplate_1 = require("./compositeArmTemplate");
var PremiumPlanTemplate = /** @class */ (function (_super) {
    __extends(PremiumPlanTemplate, _super);
    function PremiumPlanTemplate() {
        return _super.call(this, [
            new functionApp_1.FunctionAppResource(),
            new appInsights_1.AppInsightsResource(),
            new storageAccount_1.StorageAccountResource(),
            new appServicePlan_1.AppServicePlanResource(),
        ]) || this;
    }
    PremiumPlanTemplate.prototype.getTemplate = function (config) {
        var template = _super.prototype.getTemplate.call(this, config);
        template.parameters.appServicePlanSkuName.defaultValue = "EP1";
        template.parameters.appServicePlanSkuTier.defaultValue = "ElasticPremium";
        // Update the functionApp resource to include the app service plan references
        var app = template.resources.find(function (resource) { return resource.type === "Microsoft.Web/sites"; });
        if (app) {
            app.properties.serverFarmId = "[resourceId('Microsoft.Web/serverfarms', parameters('appServicePlanName'))]";
            app.dependsOn = __spread((app.dependsOn || []), ["[concat('Microsoft.Web/serverfarms/', parameters('appServicePlanName'))]"]);
        }
        return template;
    };
    return PremiumPlanTemplate;
}(compositeArmTemplate_1.CompositeArmTemplate));
exports.default = new PremiumPlanTemplate();
