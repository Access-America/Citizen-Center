import Serverless from "serverless";
import AzureProvider from "../../provider/azureProvider";
import { AzureBasePlugin } from "../azureBasePlugin";
export declare class AzurePackagePlugin extends AzureBasePlugin {
    private bindingsCreated;
    provider: AzureProvider;
    constructor(serverless: Serverless, options: Serverless.Options);
    private setupProviderConfiguration;
    private compileArtifact;
    private webpack;
    /**
     * Cleans up generated folders & files after packaging is complete
     */
    private finalize;
}
