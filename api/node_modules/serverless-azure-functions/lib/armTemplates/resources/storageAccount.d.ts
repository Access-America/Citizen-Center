import { ArmParameters, ArmResourceTemplate, ArmResourceTemplateGenerator } from "../../models/armTemplates";
import { ServerlessAzureConfig } from "../../models/serverless";
export declare class StorageAccountResource implements ArmResourceTemplateGenerator {
    static getResourceName(config: ServerlessAzureConfig): string;
    getTemplate(): ArmResourceTemplate;
    getParameters(config: ServerlessAzureConfig): ArmParameters;
}
