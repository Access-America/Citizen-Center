"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../shared/constants");
var AzureProvider = /** @class */ (function () {
    function AzureProvider(serverless) {
        this.serverless = serverless;
        this.serverless.setProvider(constants_1.constants.providerName, this);
    }
    AzureProvider.getProviderName = function () {
        return constants_1.constants.providerName;
    };
    return AzureProvider;
}());
exports.default = AzureProvider;
