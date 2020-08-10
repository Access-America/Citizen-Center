import Serverless from "serverless";
import { AzureBasePlugin } from "../azureBasePlugin";
export declare class AzureOfflinePlugin extends AzureBasePlugin {
    constructor(serverless: Serverless, options: Serverless.Options);
    private azureOfflineBuild;
    private azureOfflineStart;
    private azureOfflineCleanup;
}
