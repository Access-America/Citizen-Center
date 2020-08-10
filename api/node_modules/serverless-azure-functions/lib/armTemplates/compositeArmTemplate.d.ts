import { ArmParameters, ArmResourceTemplate, ArmResourceTemplateGenerator } from "../models/armTemplates";
import { ServerlessAzureConfig } from "../models/serverless";
export declare class CompositeArmTemplate implements ArmResourceTemplateGenerator {
    private childTemplates;
    constructor(childTemplates: ArmResourceTemplateGenerator[]);
    getTemplate(config: ServerlessAzureConfig): ArmResourceTemplate;
    getParameters(config: ServerlessAzureConfig): ArmParameters;
}
