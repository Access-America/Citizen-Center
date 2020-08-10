import Serverless from "serverless";
import { BaseService } from "./baseService";
import { ArmDeployment } from "../models/armTemplates";
import { DeploymentExtended, ResourceGroupsGetResponse } from "@azure/arm-resources/esm/models";
export declare class ResourceService extends BaseService {
    private resourceClient;
    constructor(serverless: Serverless, options: Serverless.Options);
    /**
     * Name of configured resource group
     */
    getResourceGroupName(): string;
    /**
     * Get all deployments for resource group sorted by timestamp (most recent first)
     */
    getDeployments(): Promise<import("@azure/arm-resources/esm/models").DeploymentsListByResourceGroupResponse>;
    /**
     * Get the most recent resource group deployment
     */
    getPreviousDeployment(): Promise<DeploymentExtended>;
    /**
     * Get template from last resource group deployment
     */
    getPreviousDeploymentTemplate(): Promise<ArmDeployment>;
    /**
     * Returns stringified list of deployments with timestamps
     */
    listDeployments(): Promise<string>;
    /**
     * Get ARM template for previous deployment
     * @param deploymentName Name of deployment
     */
    getDeploymentTemplate(deploymentName: string): Promise<import("@azure/arm-resources/esm/models").DeploymentsExportTemplateResponse>;
    deployResourceGroup(): Promise<import("@azure/arm-resources/esm/models").ResourceGroupsCreateOrUpdateResponse>;
    getResourceGroup(): Promise<ResourceGroupsGetResponse>;
    getResources(): Promise<import("@azure/arm-resources/esm/models").ResourcesListByResourceGroupResponse>;
    deleteDeployment(): Promise<import("@azure/ms-rest-js").RestResponse>;
    deleteResourceGroup(): Promise<import("@azure/ms-rest-js").RestResponse>;
}
