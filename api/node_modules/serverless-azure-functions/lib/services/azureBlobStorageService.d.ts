import Serverless from "serverless";
import { BaseService } from "./baseService";
/**
 * Type of authentication with Azure Storage
 * @member SharedKey - Retrieve and use a Shared Key for Azure Blob BStorage
 * @member Token - Retrieve and use an Access Token to authenticate with Azure Blob Storage
 */
export declare enum AzureStorageAuthType {
    SharedKey = 0,
    Token = 1
}
/**
 * Wrapper for operations on Azure Blob Storage account
 */
export declare class AzureBlobStorageService extends BaseService {
    /**
     * Account URL for Azure Blob Storage account. Depends on `storageAccountName` being set in baseService
     */
    private accountUrl;
    private authType;
    private storageCredential;
    constructor(serverless: Serverless, options: Serverless.Options, authType?: AzureStorageAuthType);
    /**
     * Initialize Blob Storage service. This creates the credentials required
     * to perform any operation with the service
     */
    initialize(): Promise<void>;
    /**
     * Upload a file to Azure Blob Storage
     * @param path Path of file to upload
     * @param containerName Name of container in Azure Blob storage for upload
     * @param blobName Name of blob file created as a result of upload
     */
    uploadFile(path: string, containerName: string, blobName?: string): Promise<void>;
    /**
     * Download blob to file
     * https://github.com/Azure/azure-storage-js/blob/master/blob/samples/highlevel.sample.js#L82-L97
     * @param containerName Container containing blob to download
     * @param blobName Blob to download
     * @param targetPath Path to which blob will be downloaded
     */
    downloadBinary(containerName: string, blobName: string, targetPath: string): Promise<void>;
    /**
     * Delete a blob from Azure Blob Storage
     * @param containerName Name of container containing blob
     * @param blobName Blob to delete
     */
    deleteFile(containerName: string, blobName: string): Promise<void>;
    /**
     * Lists files in container
     * @param ext - Extension of files to filter on when retrieving files
     * from container
     */
    listFiles(containerName: string, ext?: string): Promise<string[]>;
    /**
     * Lists the containers within the Azure Blob Storage account
     */
    listContainers(): Promise<string[]>;
    /**
     * Creates container specified in Azure Cloud Storage options
     * @param containerName - Name of container to create
     */
    createContainerIfNotExists(containerName: string): Promise<void>;
    /**
     * Delete a container from Azure Blob Storage Account
     * @param containerName Name of container to delete
     */
    deleteContainer(containerName: string): Promise<void>;
    /**
     * Generate URL with SAS token for a specific blob
     * @param containerName Name of container containing blob
     * @param blobName Name of blob to generate SAS token for
     * @param days Number of days from current date until expiry of SAS token. Defaults to 1 year
     */
    generateBlobSasTokenUrl(containerName: string, blobName: string, days?: number): Promise<string>;
    /**
     * Get ServiceURL object for Azure Blob Storage Account
     */
    private getServiceURL;
    /**
     * Get a ContainerURL object to perform operations on Azure Blob Storage container
     * @param containerName Name of container
     * @param serviceURL Previously created ServiceURL object (will create if undefined)
     */
    private getContainerURL;
    /**
     * Get a BlockBlobURL object to perform operations on Azure Blob Storage Blob
     * @param containerName Name of container containing blob
     * @param blobName Name of blob
     */
    private getBlockBlobURL;
    /**
     * Get access token by logging in (again) with a storage-specific context
     */
    private getToken;
    /**
     * Get access key for storage account
     */
    private getKey;
    /**
     * Ensure that the blob storage service has been initialized. If not initialized,
     * the credentials will not be available for any operation
     */
    private checkInitialization;
}
