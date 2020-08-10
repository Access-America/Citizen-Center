import Serverless from "serverless";
import { ServiceInfo } from "../models/serverless";
import { BaseService } from "./baseService";
/**
 * Type of information to be presented
 */
export declare enum ServiceInfoType {
    /** Information on hypothetical deployment */
    DRYRUN = 0,
    /** Information reflecting currently deployed resources in resource group */
    DEPLOYED = 1
}
/**
 * Service to collect and present information about the serverless service
 */
export declare class AzureInfoService extends BaseService {
    constructor(serverless: Serverless, options: Serverless.Options);
    /**
     * Prints information relating to the configuration and infrastructure
     * of the service. By default, prints a basic summary. If the "-v" or "--verbose"
     * flag is added, it prints the entire ARM template and parameters
     * @param infoType Type of information to print.
     * DRYRUN uses the information that will be configured by the plugin
     * DEPLOYED uses the information from the actual deployed services in Azure
     */
    printInfo(infoType?: ServiceInfoType): Promise<void>;
    /**
     * Gets the data structure that summarizes the configuration and infrastructure
     * of the service.
     * @param infoType Type of information to print.
     * DRYRUN uses the information that will be configured by the plugin
     * DEPLOYED uses the information from the actual deployed services in Azure
     */
    getInfo(infoType?: ServiceInfoType): Promise<ServiceInfo>;
    private getDeployed;
    /**
     * Prints the service info in a summarized, readable manner
     * @param serviceInfo Data structure describing service
     */
    private printSummary;
    /**
     * Create the dry-run data structure. Assembles the `ServiceInfo` based on what
     * would be deployed if it were run. Collects names of Azure resources from generated
     * ARM template and replaces the parameter stubs with the actual name
     */
    private getDryRun;
    /**
     * Returns the name that will be used by the ARM template. If it is a parameterized name, it will
     * return the correct replacement value. If not, it will return the original value
     * @param original Parameter stub or original value. Should be something like `[parameters('myParamName')]`
     * @param parameters Object containing parameter values (e.g. { myParamName: 'ThisIsMyParamName' })
     */
    private parametersValueReplace;
}
