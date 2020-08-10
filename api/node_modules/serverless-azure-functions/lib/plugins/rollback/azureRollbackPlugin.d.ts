import Serverless from "serverless";
import { AzureBasePlugin } from "../azureBasePlugin";
/**
 * Plugin for rolling back Function App Service to previous deployment
 */
export declare class AzureRollbackPlugin extends AzureBasePlugin {
    constructor(serverless: Serverless, options: Serverless.Options);
    private rollback;
}
