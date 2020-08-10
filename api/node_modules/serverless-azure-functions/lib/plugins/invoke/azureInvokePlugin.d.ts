import Serverless from "serverless";
import { AzureBasePlugin } from "../azureBasePlugin";
export declare class AzureInvokePlugin extends AzureBasePlugin {
    constructor(serverless: Serverless, options: Serverless.Options);
    private invokeRemote;
    private invokeLocal;
    private invokeApim;
    private invoke;
    private getData;
}
