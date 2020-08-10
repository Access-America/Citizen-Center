import Serverless from "serverless";
import { BaseService } from "./baseService";
export declare class FuncService extends BaseService {
    constructor(serverless: Serverless, options: Serverless.Options);
    add(): void;
    remove(): void;
    private exists;
    private createHandler;
    private addToServerlessYml;
    private removeFromServerlessYml;
    private getServerlessYml;
    private updateFunctionsYml;
    private getFunctionHandler;
    private getFunctionSlsObject;
    private defaultFunctionSlsObject;
    private httpEvents;
}
