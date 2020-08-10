import Serverless from "serverless";
import { BuildMode } from "../config/runtime";
import { BaseService } from "./baseService";
export declare class CompilerService extends BaseService {
    constructor(serverless: Serverless, options: Serverless.Options);
    build(mode: BuildMode): Promise<void>;
}
