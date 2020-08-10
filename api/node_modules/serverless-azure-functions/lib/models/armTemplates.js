"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArmTemplateProvisioningState;
(function (ArmTemplateProvisioningState) {
    ArmTemplateProvisioningState["FAILED"] = "Failed";
    ArmTemplateProvisioningState["SUCCEEDED"] = "Succeeded";
})(ArmTemplateProvisioningState = exports.ArmTemplateProvisioningState || (exports.ArmTemplateProvisioningState = {}));
/**
 * The well-known serverless Azure template types
 */
var ArmTemplateType;
(function (ArmTemplateType) {
    ArmTemplateType["Consumption"] = "consumption";
    ArmTemplateType["Premium"] = "premium";
    ArmTemplateType["AppServiceEnvironment"] = "ase";
})(ArmTemplateType = exports.ArmTemplateType || (exports.ArmTemplateType = {}));
/**
 * Parameter types within an ARM template
 */
var ArmParamType;
(function (ArmParamType) {
    ArmParamType["String"] = "String";
    ArmParamType["Int"] = "Int";
    ArmParamType["SystemAssigned"] = "SystemAssigned";
    ArmParamType["Bool"] = "Bool";
})(ArmParamType = exports.ArmParamType || (exports.ArmParamType = {}));
