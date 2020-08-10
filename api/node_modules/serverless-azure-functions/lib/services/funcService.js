"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var js_yaml_1 = __importDefault(require("js-yaml"));
var rimraf_1 = __importDefault(require("rimraf"));
var baseService_1 = require("./baseService");
var fs_1 = __importDefault(require("fs"));
var FuncService = /** @class */ (function (_super) {
    __extends(FuncService, _super);
    function FuncService(serverless, options) {
        return _super.call(this, serverless, options, false) || this;
    }
    FuncService.prototype.add = function () {
        var functionName = this.options["name"];
        if (!functionName) {
            this.log("Need to provide a name of function to add");
            return;
        }
        if (this.exists(functionName)) {
            this.log("Function " + functionName + " already exists");
            return;
        }
        this.createHandler(functionName);
        this.addToServerlessYml(functionName);
    };
    FuncService.prototype.remove = function () {
        var functionName = this.options["name"];
        if (!functionName) {
            this.log("Need to provide a name of function to remove");
            return;
        }
        if (!this.exists(functionName)) {
            this.log("Function " + functionName + " does not exist");
            return;
        }
        var fileName = functionName + ".js";
        if (fs_1.default.existsSync(fileName)) {
            fs_1.default.unlinkSync(fileName);
        }
        if (fs_1.default.existsSync(functionName)) {
            rimraf_1.default.sync(functionName);
        }
        this.removeFromServerlessYml(functionName);
    };
    FuncService.prototype.exists = function (functionName) {
        return (functionName in this.configService.getFunctionConfig());
    };
    FuncService.prototype.createHandler = function (functionName) {
        this.serverless.utils.writeFileSync("./" + functionName + ".js", this.getFunctionHandler(functionName));
    };
    FuncService.prototype.addToServerlessYml = function (functionName) {
        var functions = this.configService.getFunctionConfig();
        functions[functionName] = this.getFunctionSlsObject(functionName);
        this.updateFunctionsYml(functions);
    };
    FuncService.prototype.removeFromServerlessYml = function (functionName) {
        var functions = this.configService.getFunctionConfig();
        delete functions[functionName];
        this.updateFunctionsYml(functions);
    };
    FuncService.prototype.getServerlessYml = function () {
        return this.serverless.utils.readFileSync(this.configService.getConfigFile());
    };
    FuncService.prototype.updateFunctionsYml = function (functionYml) {
        var serverlessYml = this.getServerlessYml();
        serverlessYml["functions"] = functionYml;
        this.serverless.utils.writeFileSync(this.configService.getConfigFile(), js_yaml_1.default.dump(serverlessYml));
    };
    FuncService.prototype.getFunctionHandler = function (name) {
        return "\"use strict\";\n\nmodule.exports.handler = async function (context, req) {\n  context.log(\"JavaScript HTTP trigger function processed a request.\");\n\n  if (req.query.name || (req.body && req.body.name)) {\n    context.res = {\n      // status: 200, /* Defaults to 200 */\n      body: \"" + name + " \" + (req.query.name || req.body.name)\n    };\n  }\n  else {\n    context.res = {\n      status: 400,\n      body: \"Please pass a name on the query string or in the request body\"\n    };\n  }\n};";
    };
    FuncService.prototype.getFunctionSlsObject = function (name) {
        return this.defaultFunctionSlsObject(name);
    };
    FuncService.prototype.defaultFunctionSlsObject = function (name) {
        return {
            handler: name + ".handler",
            events: this.httpEvents()
        };
    };
    FuncService.prototype.httpEvents = function () {
        return [
            {
                http: true,
                authLevel: "anonymous"
            },
            {
                http: true,
                direction: "out",
                name: "res"
            },
        ];
    };
    return FuncService;
}(baseService_1.BaseService));
exports.FuncService = FuncService;
