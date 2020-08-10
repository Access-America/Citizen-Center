import { ArmResourceTemplate, ArmResourceTemplateGenerator, ArmParameters } from "../../models/armTemplates";
import { ServerlessAzureConfig } from "../../models/serverless";
export declare class AppInsightsResource implements ArmResourceTemplateGenerator {
    static getResourceName(config: ServerlessAzureConfig): string;
    getTemplate(): ArmResourceTemplate;
    getParameters(config: ServerlessAzureConfig): ArmParameters;
}
