import { FunctionAppOS } from "../config/runtime";
export declare const constants: {
    bindings: string;
    settings: string;
    name: string;
    displayName: string;
    type: string;
    direction: string;
    trigger: string;
    inDirection: string;
    outDirection: string;
    value: string;
    resource: string;
    required: string;
    storage: string;
    connection: string;
    enum: string;
    defaultValue: string;
    webHookType: string;
    httpTrigger: string;
    queue: string;
    queueName: string;
    xAzureSettings: string;
    entryPoint: string;
    variableKeys: {
        providerConfig: string;
        subscriptionId: string;
        tenantId: string;
        appId: string;
        packageTimestamp: string;
        azureCredentials: string;
        os: string;
    };
    runtimeExtensions: {
        nodejs: string;
        python: string;
    };
    deployedServiceOptions: {
        resourceGroup: {
            usage: string;
            shortcut: string;
        };
        stage: {
            usage: string;
            shortcut: string;
        };
        region: {
            usage: string;
            shortcut: string;
        };
        subscriptionId: {
            usage: string;
            shortcut: string;
        };
        function: {
            usage: string;
            shortcut: string;
        };
    };
    invokeOptions: {
        function: {
            usage: string;
            shortcut: string;
        };
        path: {
            usage: string;
            shortcut: string;
        };
        data: {
            usage: string;
            shortcut: string;
        };
        method: {
            usage: string;
            shortcut: string;
        };
    };
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
    cliCommandKeys: {
        start: string;
    };
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
        os: FunctionAppOS;
    };
    bindingsJsonUrl: string;
    tmpBuildDir: string;
};
