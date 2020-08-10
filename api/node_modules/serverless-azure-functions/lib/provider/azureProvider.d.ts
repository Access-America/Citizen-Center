import Serverless from "serverless";
export default class AzureProvider {
    private serverless;
    static getProviderName(): string;
    constructor(serverless: Serverless);
}
