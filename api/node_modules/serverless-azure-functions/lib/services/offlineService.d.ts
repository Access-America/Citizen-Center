import Serverless from "serverless";
import { BaseService } from "./baseService";
export declare class OfflineService extends BaseService {
    private packageService;
    private localFiles;
    constructor(serverless: Serverless, options: Serverless.Options);
    build(): Promise<void>;
    cleanup(): Promise<void>;
    /**
     * Spawn `func host start` from core func tools
     */
    start(): Promise<void>;
}
