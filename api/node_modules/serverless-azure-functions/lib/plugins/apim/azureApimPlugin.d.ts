import Serverless from "serverless";
import { AzureBasePlugin } from "../azureBasePlugin";
export declare class AzureApimPlugin extends AzureBasePlugin {
    constructor(serverless: Serverless, options: Serverless.Options);
    private deploy;
}
