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
Object.defineProperty(exports, "__esModule", { value: true });
var functionApp_1 = require("./resources/functionApp");
var appInsights_1 = require("./resources/appInsights");
var storageAccount_1 = require("./resources/storageAccount");
var compositeArmTemplate_1 = require("./compositeArmTemplate");
var ConsumptionPlanTemplate = /** @class */ (function (_super) {
    __extends(ConsumptionPlanTemplate, _super);
    function ConsumptionPlanTemplate() {
        return _super.call(this, [
            new functionApp_1.FunctionAppResource(),
            new appInsights_1.AppInsightsResource(),
            new storageAccount_1.StorageAccountResource(),
        ]) || this;
    }
    return ConsumptionPlanTemplate;
}(compositeArmTemplate_1.CompositeArmTemplate));
exports.default = new ConsumptionPlanTemplate();
