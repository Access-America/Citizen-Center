import Serverless from "serverless";
import { BaseService } from "./baseService";
import { FunctionAppService } from "./functionAppService";
export declare enum InvokeMode {
    FUNCTION = 0,
    LOCAL = 1,
    APIM = 2
}
export declare class InvokeService extends BaseService {
    functionAppService: FunctionAppService;
    private mode;
    constructor(serverless: Serverless, options: Serverless.Options, mode?: InvokeMode);
    /**
     * Invoke an Azure Function
     * @param method HTTP method
     * @param functionName Name of function to invoke
     * @param data Data to use as body or query params
     */
    invoke(method: string, functionName: string, data?: any): Promise<import("axios").AxiosResponse<any>>;
    private getUrl;
    private getLocalHost;
    private getApimHost;
    private getConfiguredFunctionRoute;
    private getQueryString;
    /**
     * Get options object
     * @param method The method used (POST or GET)
     * @param data Data to use as body or query params
     */
    private getRequestOptions;
    private getHost;
}
