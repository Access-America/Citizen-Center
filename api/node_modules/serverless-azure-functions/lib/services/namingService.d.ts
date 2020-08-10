import { ServerlessAzureConfig, ResourceConfig } from "../models/serverless";
export interface AzureNamingServiceOptions {
    config: ServerlessAzureConfig;
    resourceConfig?: ResourceConfig;
    suffix?: string;
    includeHash?: boolean;
    maxLength?: number;
}
export declare class AzureNamingService {
    /**
     * Get a resource name for an Azure Service. Naming convention:
     *
     * {prefix}-{shortRegionName}-{shortStageName}(optionally: -{suffix})
     *
     * @param config Serverless Azure Config for service (serverless.service)
     * @param resourceConfig The serverless resource configuration
     * @param suffix Optional suffix to append on the end of the generated name
     */
    static getResourceName(options: AzureNamingServiceOptions): string;
    /**
     * Get a name for an Azure resource that is shorter than a max length and has no forbidden characters
     * Naming convention:
     *
     * {safePrefix}{safeRegion}{safeStage}{safeServiceNameHash}
     *
     * @param config Serverless Azure Config for service (serverless.service)
     * @param maxLength Maximum length of name for resource
     * @param resourceConfig The serverless resource configuration
     * @param suffix Optional suffix to append on the end of the generated name
     * @param forbidden Regex for characters to remove from name. Defaults to non-alpha-numerics
     * @param replaceWith String to replace forbidden characters. Defaults to empty string
     */
    static getSafeResourceName(options: AzureNamingServiceOptions): string;
    /**
     * Creates a deployment name from the serverless configuration
     * @param config The serverless azure config
     * @param timestamp The timestamp of the deployment
     */
    static getDeploymentName(config: ServerlessAzureConfig, timestamp?: string): string;
    /**
     * Creates a short name to be used for state name abbreviation
     * @param stageName The stage name
     */
    static createShortStageName(stageName: string): string;
    /**
     * Gets the normalized region name from long name (ex. West US 2 -> westus2)
     * @param regionName The region name
     */
    static getNormalizedRegionName(regionName: string): string;
    /**
     * Creates a short name for an azure region
     * @param regionName The azure region name
     */
    static createShortAzureRegionName(regionName: string): string;
    /**
     * Creates a short name from a long name based on a well-known string map
     * @param longName The long name to replace
     * @param wellKnownMap A well known map of long terms to short abbreviations
     */
    private static createShortName;
}
