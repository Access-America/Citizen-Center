"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Runtime;
(function (Runtime) {
    Runtime["NODE10"] = "nodejs10";
    Runtime["NODE12"] = "nodejs12";
    Runtime["PYTHON36"] = "python3.6";
    Runtime["PYTHON37"] = "python3.7";
    Runtime["PYTHON38"] = "python3.8";
    Runtime["DOTNET22"] = "dotnet2.2";
    Runtime["DOTNET31"] = "dotnet3.1";
})(Runtime = exports.Runtime || (exports.Runtime = {}));
exports.supportedRuntimes = [
    Runtime.NODE10,
    Runtime.NODE12,
    Runtime.PYTHON36,
    Runtime.PYTHON37,
    Runtime.PYTHON38,
    Runtime.DOTNET22,
    Runtime.DOTNET31
];
exports.supportedRuntimeSet = new Set(exports.supportedRuntimes);
var RuntimeLanguage;
(function (RuntimeLanguage) {
    RuntimeLanguage["NODE"] = "nodejs";
    RuntimeLanguage["PYTHON"] = "python";
    RuntimeLanguage["DOTNET"] = "dotnet";
})(RuntimeLanguage = exports.RuntimeLanguage || (exports.RuntimeLanguage = {}));
exports.supportedLanguages = [
    RuntimeLanguage.NODE,
    RuntimeLanguage.PYTHON,
    RuntimeLanguage.DOTNET,
];
var BuildMode;
(function (BuildMode) {
    BuildMode["RELEASE"] = "release";
    BuildMode["DEBUG"] = "debug";
})(BuildMode = exports.BuildMode || (exports.BuildMode = {}));
exports.compiledRuntimes = new Set([
    Runtime.DOTNET22,
    Runtime.DOTNET31
]);
function isCompiledRuntime(runtime) {
    return exports.compiledRuntimes.has(runtime);
}
exports.isCompiledRuntime = isCompiledRuntime;
function isNodeRuntime(runtime) {
    return getRuntimeLanguage(runtime) === RuntimeLanguage.NODE;
}
exports.isNodeRuntime = isNodeRuntime;
function isPythonRuntime(runtime) {
    return getRuntimeLanguage(runtime) === RuntimeLanguage.PYTHON;
}
exports.isPythonRuntime = isPythonRuntime;
function getRuntimeVersion(runtime) {
    var e_1, _a;
    try {
        for (var supportedLanguages_1 = __values(exports.supportedLanguages), supportedLanguages_1_1 = supportedLanguages_1.next(); !supportedLanguages_1_1.done; supportedLanguages_1_1 = supportedLanguages_1.next()) {
            var language = supportedLanguages_1_1.value;
            if (runtime.includes(language)) {
                return runtime.replace(language, "");
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (supportedLanguages_1_1 && !supportedLanguages_1_1.done && (_a = supportedLanguages_1.return)) _a.call(supportedLanguages_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    throw new Error("Runtime " + runtime + " not included in supportedRuntimes");
}
exports.getRuntimeVersion = getRuntimeVersion;
function getRuntimeLanguage(runtime) {
    var e_2, _a;
    try {
        for (var supportedLanguages_2 = __values(exports.supportedLanguages), supportedLanguages_2_1 = supportedLanguages_2.next(); !supportedLanguages_2_1.done; supportedLanguages_2_1 = supportedLanguages_2.next()) {
            var language = supportedLanguages_2_1.value;
            if (runtime.includes(language)) {
                return language;
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (supportedLanguages_2_1 && !supportedLanguages_2_1.done && (_a = supportedLanguages_2.return)) _a.call(supportedLanguages_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
    throw new Error("Runtime " + runtime + " not included in supportedRuntimes");
}
exports.getRuntimeLanguage = getRuntimeLanguage;
function getFunctionWorkerRuntime(runtime) {
    var language = getRuntimeLanguage(runtime);
    if (language === RuntimeLanguage.NODE) {
        return "node";
    }
    return language;
}
exports.getFunctionWorkerRuntime = getFunctionWorkerRuntime;
var FunctionAppOS;
(function (FunctionAppOS) {
    FunctionAppOS["WINDOWS"] = "windows";
    FunctionAppOS["LINUX"] = "linux";
})(FunctionAppOS = exports.FunctionAppOS || (exports.FunctionAppOS = {}));
exports.dockerImages = {
    nodejs10: "NODE|10",
    nodejs12: "NODE|12",
    "python3.6": "PYTHON|3.6",
    "python3.7": "PYTHON|3.7",
    "python3.8": "PYTHON|3.8",
    "dotnet3.1": "DOTNET|3.1",
};
