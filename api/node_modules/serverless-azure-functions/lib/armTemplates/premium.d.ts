import { ArmResourceTemplate } from "../models/armTemplates";
import { CompositeArmTemplate } from "./compositeArmTemplate";
import { ServerlessAzureConfig } from "../models/serverless";
declare class PremiumPlanTemplate extends CompositeArmTemplate {
    constructor();
    getTemplate(config: ServerlessAzureConfig): ArmResourceTemplate;
}
declare const _default: PremiumPlanTemplate;
export default _default;
