import Serverless from "serverless";
import { AzureBasePlugin } from "../azureBasePlugin";
export declare class AzureInfoPlugin extends AzureBasePlugin {
    constructor(serverless: Serverless, options: Serverless.Options);
    private executeInfo;
}
