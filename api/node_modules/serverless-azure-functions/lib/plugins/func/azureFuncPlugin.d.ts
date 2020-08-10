import Serverless from "serverless";
import { AzureBasePlugin } from "../azureBasePlugin";
export declare class AzureFuncPlugin extends AzureBasePlugin {
    constructor(serverless: Serverless, options: Serverless.Options);
    private func;
    private add;
    private remove;
}
