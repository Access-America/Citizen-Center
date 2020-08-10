import Serverless from "serverless";
import { AzureBasePlugin } from "../azureBasePlugin";
export declare class AzureKeyVaultPlugin extends AzureBasePlugin {
    constructor(serverless: Serverless, options: Serverless.Options);
    private link;
}
