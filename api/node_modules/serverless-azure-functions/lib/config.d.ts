export declare const configConstants: {
    bearer: string;
    deploymentConfig: {
        container: string;
        rollback: boolean;
        external: boolean;
    };
    naming: {
        maxLength: {
            storageAccount: number;
            deploymentName: number;
        };
        suffix: {
            deployment: string;
            artifact: string;
        };
    };
    functionAppApiPath: string;
    functionAppDomain: string;
    functionsAdminApiPath: string;
    functionsApiPath: string;
    funcCoreTools: string;
    funcCoreToolsArgs: string[];
    funcConsoleColor: string;
    runFromPackageSetting: string;
    jsonContentType: string;
    logInvocationsApiPath: string;
    logOutputApiPath: string;
    logStreamApiPath: string;
    masterKeyApiPath: string;
    providerName: string;
    scmCommandApiPath: string;
    scmDomain: string;
    scmVfsPath: string;
    scmZipDeployApiPath: string;
    resourceGroupHashLength: number;
    defaults: {
        awsRegion: string;
        region: string;
        stage: string;
        prefix: string;
        localPort: number;
    };
};
export default configConstants;
