import Serverless from "serverless";
import { BaseService } from "./baseService";
import { AzureKeyVaultConfig } from "../models/serverless";
/**
 * Services for the Key Vault Plugin
 */
export declare class AzureKeyVaultService extends BaseService {
    /**
     * Initialize key vault service and get function app
     * @param serverless Serverless object
     * @param options Serverless CLI options
     */
    constructor(serverless: Serverless, options: Serverless.Options);
    /**
     * Sets the KeyVault policy for the function app to allow secrets permissions.
     * @param keyVaultConfig Azure Key Vault settings
     */
    setPolicy(keyVaultConfig: AzureKeyVaultConfig): Promise<void>;
}
