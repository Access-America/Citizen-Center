import { ArmParameters, ArmResourceTemplate, ArmResourceTemplateGenerator } from "../../models/armTemplates";
import { ServerlessAzureConfig } from "../../models/serverless";
export declare class FunctionAppResource implements ArmResourceTemplateGenerator {
    static getResourceName(config: ServerlessAzureConfig): string;
    getTemplate(config: ServerlessAzureConfig): ArmResourceTemplate;
    getParameters(config: ServerlessAzureConfig): ArmParameters;
    private getTemplateParameters;
    private getFunctionAppSettings;
    private getLinuxFxVersion;
}
