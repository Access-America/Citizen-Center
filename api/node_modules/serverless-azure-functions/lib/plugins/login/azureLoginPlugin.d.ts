import Serverless from "serverless";
import { AzureLoginOptions } from "../../services/loginService";
import { AzureBasePlugin } from "../azureBasePlugin";
export declare class AzureLoginPlugin extends AzureBasePlugin<AzureLoginOptions> {
    constructor(serverless: Serverless, options: AzureLoginOptions);
    private login;
}
