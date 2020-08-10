import { CompositeArmTemplate } from "./compositeArmTemplate";
import { ArmResourceTemplate } from "../models/armTemplates";
import { ServerlessAzureConfig } from "../models/serverless";
declare class AppServiceEnvironmentTemplate extends CompositeArmTemplate {
    constructor();
    getTemplate(config: ServerlessAzureConfig): ArmResourceTemplate;
}
declare const _default: AppServiceEnvironmentTemplate;
export default _default;
