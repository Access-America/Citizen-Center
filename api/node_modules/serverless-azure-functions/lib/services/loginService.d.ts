import Serverless from "serverless";
import { AuthResponse, AzureTokenCredentialsOptions, InteractiveLoginOptions } from "@azure/ms-rest-nodeauth";
import { BaseService } from "./baseService";
export interface AzureLoginOptions extends Serverless.Options {
    subscriptionId?: string;
}
export declare class AzureLoginService extends BaseService {
    constructor(serverless: Serverless, options: Serverless.Options);
    /**
     * Logs in via service principal login if environment variables are
     * set or via interactive login if environment variables are not set
     * @param options Options for different authentication methods
     */
    login(options?: AzureTokenCredentialsOptions | InteractiveLoginOptions): Promise<AuthResponse>;
    interactiveLogin(options?: InteractiveLoginOptions): Promise<AuthResponse>;
    servicePrincipalLogin(clientId: string, secret: string, tenantId: string, options: AzureTokenCredentialsOptions): Promise<AuthResponse>;
    getSubscriptionId(): string;
}
