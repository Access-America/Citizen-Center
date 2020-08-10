import { ArmResourceTemplate, ArmResourceTemplateGenerator, ArmParameters, DefaultArmParams, ArmParameter } from "../../models/armTemplates";
import { ServerlessAzureConfig } from "../../models/serverless";
export interface HostingEnvironmentParams extends DefaultArmParams {
    hostingEnvironmentName?: ArmParameter;
    virtualNetworkName?: ArmParameter;
}
export declare class HostingEnvironmentResource implements ArmResourceTemplateGenerator {
    static getResourceName(config: ServerlessAzureConfig): string;
    getTemplate(): ArmResourceTemplate;
    getParameters(config: ServerlessAzureConfig): ArmParameters;
}
