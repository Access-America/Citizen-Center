import Serverless from "serverless";
export declare class BindingUtils {
    static getBindingsMetaData(serverless: Serverless): Promise<{
        bindingDisplayNames: any[];
        bindingTypes: any[];
        bindingSettings: any[];
        bindingSettingsNames: any[];
    }>;
    static getBindingUserSettingsMetaData(azureSettings: any, bindingType: any, bindingTypeIndex: any, bindingDisplayNames: any): {
        index: any;
        userSettings: {};
    };
    static getHttpOutBinding(): {};
    static getBinding(bindingType: any, bindingSettings: any, bindingUserSettings: any): {};
}
