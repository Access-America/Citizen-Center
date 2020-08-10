import { ArmResourceTemplate, ArmResourceTemplateGenerator, ArmParameters } from "../../models/armTemplates";
import { ServerlessAzureConfig } from "../../models/serverless";
export declare class ApimResource implements ArmResourceTemplateGenerator {
    static getResourceName(config: ServerlessAzureConfig): string;
    getTemplate(): ArmResourceTemplate;
    getParameters(config: ServerlessAzureConfig): ArmParameters;
}
