import Serverless from "serverless";
import { AzureLoginOptions } from "../../services/loginService";
import { AzureBasePlugin } from "../azureBasePlugin";
export declare class AzureDeployPlugin extends AzureBasePlugin<AzureLoginOptions> {
    commands: any;
    constructor(serverless: Serverless, options: AzureLoginOptions);
    private list;
    private deploy;
    /**
     * Deploys APIM if configured
     */
    private deployApim;
    /**
     * Check to see if user tried to target an individual function for deployment or deployment list
     * Throws error if `function` is specified
     */
    private checkForIndividualFunctionDeploy;
}
