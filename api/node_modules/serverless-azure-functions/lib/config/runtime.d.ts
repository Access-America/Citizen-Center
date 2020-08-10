export declare enum Runtime {
    NODE10 = "nodejs10",
    NODE12 = "nodejs12",
    PYTHON36 = "python3.6",
    PYTHON37 = "python3.7",
    PYTHON38 = "python3.8",
    DOTNET22 = "dotnet2.2",
    DOTNET31 = "dotnet3.1"
}
export declare const supportedRuntimes: Runtime[];
export declare const supportedRuntimeSet: Set<Runtime>;
export declare enum RuntimeLanguage {
    NODE = "nodejs",
    PYTHON = "python",
    DOTNET = "dotnet"
}
export declare const supportedLanguages: RuntimeLanguage[];
export declare enum BuildMode {
    RELEASE = "release",
    DEBUG = "debug"
}
export declare const compiledRuntimes: Set<Runtime>;
export declare function isCompiledRuntime(runtime: Runtime): boolean;
export declare function isNodeRuntime(runtime: Runtime): boolean;
export declare function isPythonRuntime(runtime: Runtime): boolean;
export declare function getRuntimeVersion(runtime: Runtime): string;
export declare function getRuntimeLanguage(runtime: Runtime): string;
export declare function getFunctionWorkerRuntime(runtime: Runtime): string;
export declare enum FunctionAppOS {
    WINDOWS = "windows",
    LINUX = "linux"
}
export declare const dockerImages: {
    nodejs10: string;
    nodejs12: string;
    "python3.6": string;
    "python3.7": string;
    "python3.8": string;
    "dotnet3.1": string;
};
