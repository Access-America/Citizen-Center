import Serverless from "serverless";
import { AzureBasePlugin } from "../azureBasePlugin";
export declare class AzureRemovePlugin extends AzureBasePlugin {
    constructor(serverless: Serverless, options: Serverless.Options);
    private remove;
}
