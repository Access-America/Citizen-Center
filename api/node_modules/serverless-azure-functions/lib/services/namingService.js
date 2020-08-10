"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var guard_1 = require("../shared/guard");
var constants_1 = require("../shared/constants");
var md5_1 = __importDefault(require("md5"));
var AzureNamingService = /** @class */ (function () {
    function AzureNamingService() {
    }
    /**
     * Get a resource name for an Azure Service. Naming convention:
     *
     * {prefix}-{shortRegionName}-{shortStageName}(optionally: -{suffix})
     *
     * @param config Serverless Azure Config for service (serverless.service)
     * @param resourceConfig The serverless resource configuration
     * @param suffix Optional suffix to append on the end of the generated name
     */
    AzureNamingService.getResourceName = function (options) {
        if (options.resourceConfig && options.resourceConfig.name) {
            return options.resourceConfig.name;
        }
        if (options.includeHash === undefined) {
            options.includeHash = true;
        }
        var _a = options.config.provider, prefix = _a.prefix, region = _a.region, stage = _a.stage;
        var name = [
            prefix,
            this.createShortAzureRegionName(region),
            this.createShortStageName(stage),
        ].join("-");
        if (options.includeHash) {
            name += "-" + md5_1.default(options.config.provider.resourceGroup).substr(0, constants_1.constants.resourceGroupHashLength);
        }
        if (options.suffix) {
            name += "-" + options.suffix;
        }
        return name.toLowerCase();
    };
    /**
     * Get a name for an Azure resource that is shorter than a max length and has no forbidden characters
     * Naming convention:
     *
     * {safePrefix}{safeRegion}{safeStage}{safeServiceNameHash}
     *
     * @param config Serverless Azure Config for service (serverless.service)
     * @param maxLength Maximum length of name for resource
     * @param resourceConfig The serverless resource configuration
     * @param suffix Optional suffix to append on the end of the generated name
     * @param forbidden Regex for characters to remove from name. Defaults to non-alpha-numerics
     * @param replaceWith String to replace forbidden characters. Defaults to empty string
     */
    AzureNamingService.getSafeResourceName = function (options) {
        var nonAlphaNumeric = /\W+/g;
        if (options.resourceConfig && options.resourceConfig.name) {
            var name_1 = options.resourceConfig.name;
            if (name_1.length > options.maxLength) {
                throw new Error("Name '" + name_1 + "' invalid. Should be shorter than " + options.maxLength + " characters");
            }
            return name_1.replace(nonAlphaNumeric, "");
        }
        if (options.includeHash === undefined) {
            options.includeHash = true;
        }
        var _a = options.config.provider, prefix = _a.prefix, region = _a.region, stage = _a.stage;
        var safePrefix = prefix.replace(nonAlphaNumeric, "");
        var safeRegion = this.createShortAzureRegionName(region);
        var safeStage = this.createShortStageName(stage);
        var safeSuffix = options.suffix.replace(nonAlphaNumeric, "");
        var hashLength = (options.includeHash) ? constants_1.constants.resourceGroupHashLength : 0;
        var remaining = options.maxLength - (safePrefix.length + safeRegion.length + safeStage.length + safeSuffix.length + hashLength);
        // Dynamically adjust the substring based on space needed
        if (remaining < 0) {
            var partLength = Math.floor(Math.abs(remaining) / 4);
            if (partLength < 3) {
                partLength = 3;
            }
            safePrefix = safePrefix.substr(0, partLength);
            safeStage = safeStage.substr(0, partLength);
            safeSuffix = safeSuffix.substr(0, partLength);
        }
        var safeHash = md5_1.default(options.config.provider.resourceGroup).substr(0, hashLength);
        var name = [safePrefix, safeRegion, safeStage, safeHash, safeSuffix]
            .join("")
            .toLowerCase();
        if (name.length > options.maxLength) {
            throw new Error("Name " + name + " is too long. Should be shorter than " + options.maxLength + " characters");
        }
        return name;
    };
    /**
     * Creates a deployment name from the serverless configuration
     * @param config The serverless azure config
     * @param timestamp The timestamp of the deployment
     */
    AzureNamingService.getDeploymentName = function (config, timestamp) {
        var maxLength = constants_1.constants.naming.maxLength.deploymentName;
        var suffix = constants_1.constants.naming.suffix.deployment;
        var deploymentName = config.provider.deploymentName;
        if (timestamp) {
            maxLength -= timestamp.length + suffix.length;
            var options = {
                config: config,
                suffix: config.service,
                includeHash: false,
                maxLength: maxLength,
            };
            var name_2 = (deploymentName)
                ? deploymentName.substr(0, maxLength)
                : [AzureNamingService.getSafeResourceName(options), suffix].join("-");
            return [name_2, timestamp].join("-");
        }
        return deploymentName.substr(0, maxLength);
    };
    /**
     * Creates a short name to be used for state name abbreviation
     * @param stageName The stage name
     */
    AzureNamingService.createShortStageName = function (stageName) {
        guard_1.Guard.empty(stageName, "stageName");
        var stageMap = {
            "dogfood": "df",
            "production": "prod",
            "prod": "prod",
            "development": "dev",
            "testing": "test",
            "test": "test"
        };
        return this.createShortName(stageName, stageMap);
    };
    /**
     * Gets the normalized region name from long name (ex. West US 2 -> westus2)
     * @param regionName The region name
     */
    AzureNamingService.getNormalizedRegionName = function (regionName) {
        guard_1.Guard.empty(regionName, "regionName");
        return regionName.replace(/\W/g, "").toLowerCase();
    };
    /**
     * Creates a short name for an azure region
     * @param regionName The azure region name
     */
    AzureNamingService.createShortAzureRegionName = function (regionName) {
        guard_1.Guard.empty(regionName, "regionName");
        var locationMap = {
            "north": "n",
            "south": "s",
            "east": "e",
            "west": "w",
            "central": "c",
        };
        return this.createShortName(regionName, locationMap);
    };
    /**
     * Creates a short name from a long name based on a well-known string map
     * @param longName The long name to replace
     * @param wellKnownMap A well known map of long terms to short abbreviations
     */
    AzureNamingService.createShortName = function (longName, wellKnownMap) {
        guard_1.Guard.empty(longName);
        guard_1.Guard.null(wellKnownMap);
        var pattern = "(" + Object.keys(wellKnownMap).join("|") + ")";
        var regex = new RegExp(pattern, "g");
        return longName
            .replace(/\W+/g, "")
            .toLowerCase()
            .split(regex)
            .map(function (part) {
            return wellKnownMap[part] || part.substr(0, 3);
        })
            .join("");
    };
    return AzureNamingService;
}());
exports.AzureNamingService = AzureNamingService;
