import { DeploymentExtended } from "@azure/arm-resources/esm/models";
import Serverless from "serverless";
import { ArmDeployment, ArmTemplateType } from "../models/armTemplates";
import { ArmTemplateConfig, ServerlessAzureOptions } from "../models/serverless";
import { BaseService } from "./baseService";
export declare class ArmService extends BaseService {
    private resourceClient;
    constructor(serverless: Serverless, options: ServerlessAzureOptions);
    /**
     * Creates an ARM deployment from a well-known configuration (consumption, premium, ase)
     * @param type The well-known template type
     */
    createDeploymentFromType(type: ArmTemplateType | string): Promise<ArmDeployment>;
    /**
     * Creates an ARM deployment from the serverless custom yaml configuration
     * @param armTemplateConfig The serverless yaml ARM template configuration
     */
    createDeploymentFromConfig(armTemplateConfig: ArmTemplateConfig): Promise<ArmDeployment>;
    /**
     * Deploys the specified ARM template to Azure via REST service call
     * @param deployment The ARM template to deploy
     */
    deployTemplate(deployment: ArmDeployment): Promise<DeploymentExtended>;
    private areDeploymentsEqual;
    private deploymentErrorToString;
    /**
     * Merge parameters and default parameters for comparison with previously deployed template
     * @param parameters Parameters with specified values
     * @param defaultParameters Parameters with `type` and `defaultValue`
     */
    private mergeDefaultParams;
    /**
     * Applies sls yaml environment variables into the appSettings section of the function app configuration
     * @param deployment The ARM deployment
     */
    private applyEnvironmentVariables;
}
