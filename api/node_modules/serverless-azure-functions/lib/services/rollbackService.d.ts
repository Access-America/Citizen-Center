import Serverless from "serverless";
import { BaseService } from "./baseService";
/**
 * Services for the Rollback Plugin
 */
export declare class RollbackService extends BaseService {
    private resourceService;
    private blobService;
    /**
     * Initialize rollback service, including authentication and initialization
     * of a `ResourceService`
     * @param serverless Serverless object
     * @param options Serverless CLI options
     */
    constructor(serverless: Serverless, options: Serverless.Options);
    /**
     * Rolls back the function app. If `timestamp` present in `options`,
     * function app will be rolled back directly to that timestamp. Otherwise,
     * function app will be rolled back to the deployment previous to the most recent
     */
    rollback(): Promise<void>;
    /**
     * Re-deploy a previous deployment of a resource group
     * @param deployment Previous deployment retrieved from Azure SDK
     * @param artifactName Name of zipped artifact in blob storage associated with deployment
     */
    private redeployDeployment;
    /**
     * Convert previous deployment to ArmDeployment
     * @param deployment Previous deployment retrieved from Azure SDK
     */
    private convertToArmDeployment;
    /**
     * Deploy zipped artifact to function app
     * @param artifactPath Path to downloaded zipped artifact
     */
    private redeployArtifact;
    /**
     * Get deployment specified by timestamp in Serverless options
     * Lists deployments if no timestamp is provided
     */
    private getDeployment;
    /**
     * Download zipped function app artifact from blob storage corresponding to the specified deployment
     * @param artifactName Name of artifact to download
     */
    private downloadArtifact;
    /**
     * Get all deployments of a resource group indexed by Unix timestamp string
     */
    private getArmDeploymentsByTimestamp;
}
