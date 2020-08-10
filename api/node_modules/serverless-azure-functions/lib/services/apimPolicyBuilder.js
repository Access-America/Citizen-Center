"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var guard_1 = require("../shared/guard");
var xml2js_1 = require("xml2js");
/**
 * APIM Policy build that can be used to build polices for APIs, Backends & operations
 */
var ApimPolicyBuilder = /** @class */ (function () {
    function ApimPolicyBuilder() {
        this.policyRoot = {};
        this.init();
    }
    /**
     * Parses an APIM xml policy and loads it into a Policy Builder
     * @param xml The xml policy
     */
    ApimPolicyBuilder.parse = function (xml) {
        return __awaiter(this, void 0, void 0, function () {
            var parser, builder, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        guard_1.Guard.empty(xml, "xml");
                        parser = new xml2js_1.Parser();
                        builder = new ApimPolicyBuilder();
                        _a = builder;
                        return [4 /*yield*/, parser.parseStringPromise(xml)];
                    case 1:
                        _a.policyRoot = _b.sent();
                        return [2 /*return*/, builder];
                }
            });
        });
    };
    /**
     * Generates the XML policy that is compatible with APIM
     */
    ApimPolicyBuilder.prototype.build = function () {
        var builder = new xml2js_1.Builder();
        return builder.buildObject(this.policyRoot);
    };
    /**
     * Adds a policy to specify the APIM backend to use for an operation
     * @param backendId The APIM backend id
     */
    ApimPolicyBuilder.prototype.setBackendService = function (backendId) {
        guard_1.Guard.empty(backendId, "backendId");
        this.policyRoot.policies.inbound[0]["set-backend-service"] = [
            { $: { "id": "apim-generated-policy", "backend-id": backendId } }
        ];
        return this;
    };
    /**
     * Applies the CORS policy to an APIM API
     * @param corsConfig The APIM CORS configuration
     */
    ApimPolicyBuilder.prototype.cors = function (corsConfig) {
        guard_1.Guard.null(corsConfig, "corsConfig");
        var origins = corsConfig.allowedOrigins ? [corsConfig.allowedOrigins.map(function (origin) { return ({ origin: origin }); })] : null;
        var methods = corsConfig.allowedMethods ? [corsConfig.allowedMethods.map(function (method) { return ({ method: method }); })] : null;
        var allowedHeaders = corsConfig.allowedHeaders ? [corsConfig.allowedHeaders.map(function (header) { return ({ header: header }); })] : null;
        var exposeHeaders = corsConfig.exposeHeaders ? [corsConfig.exposeHeaders.map(function (header) { return ({ header: header }); })] : null;
        this.policyRoot.policies.inbound[0].cors = [
            {
                $: { "allow-credentials": !!corsConfig.allowCredentials },
                "allowed-origins": origins,
                "allowed-methods": methods,
                "allowed-headers": allowedHeaders,
                "expose-headers": exposeHeaders
            }
        ];
        return this;
    };
    /**
     * Applies an IP filter configuration policy to an APIM API
     * @param ipConfig The IP configuration policy
     */
    ApimPolicyBuilder.prototype.ipFilter = function (ipConfig) {
        guard_1.Guard.null(ipConfig, "ipConfig");
        var policy = {
            $: { action: ipConfig.action },
            addressRange: ipConfig.addressRange,
            address: ipConfig.addresses
        };
        ApimPolicyBuilder.cleanElement(policy);
        this.updatePolicy("inbound", "ip-filter", policy, 
        // We are keying the ipFilter policy by action
        function (policy) { return policy.$.action === ipConfig.action; });
        return this;
    };
    /**
     * Applies the JWT validation policy to an APIM API
     * @param jwtPolicy The JWT validation configuration
     */
    ApimPolicyBuilder.prototype.jwtValidate = function (jwtPolicy) {
        guard_1.Guard.null(jwtPolicy, "jwtPolicy");
        var signingKeys = jwtPolicy.signingKeys ? [jwtPolicy.signingKeys.map(function (key) { return ({ key: key }); })] : null;
        var decryptionKeys = jwtPolicy.decryptionKeys ? [jwtPolicy.decryptionKeys.map(function (key) { return ({ key: key }); })] : null;
        var audiences = jwtPolicy.audiences ? [jwtPolicy.audiences.map(function (audience) { return ({ audience: audience }); })] : null;
        var issuers = jwtPolicy.issuers ? [jwtPolicy.issuers.map(function (issuer) { return ({ issuer: issuer }); })] : null;
        var oidConfig = jwtPolicy.openId && jwtPolicy.openId.metadataUrl ? [{ $: { url: jwtPolicy.openId.metadataUrl } }] : null;
        var claims = jwtPolicy.requiredClaims ? [jwtPolicy.requiredClaims.map(ApimPolicyBuilder.createClaimElement)] : null;
        // Maps yaml config names to xml attribute names
        var attributeMap = {
            headerName: "header-name",
            tokenValue: "token-value",
            queryParamName: "query-parameter-name",
            failedStatusCode: "failed-validation-httpcode",
            failedErrorMessage: "failed-validation-error-message",
            requireExpirationTime: "require-expiration-time",
            scheme: "require-scheme",
            requireSignedTokens: "require-signed-tokens",
            clockSkew: "clock-skew",
            outputTokenVariableName: "output-token-variable-name"
        };
        var attributes = ApimPolicyBuilder.createAttributes(attributeMap, jwtPolicy);
        var policy = {
            $: attributes,
            "openid-config": oidConfig,
            "issuer-signing-keys": signingKeys,
            "decryption-keys": decryptionKeys,
            "audiences": audiences,
            "issuers": issuers,
            "required-claims": claims
        };
        ApimPolicyBuilder.cleanElement(policy);
        this.policyRoot.policies.inbound[0]["validate-jwt"] = [policy];
        return this;
    };
    ApimPolicyBuilder.prototype.checkHeader = function (checkHeaderPolicy) {
        guard_1.Guard.null(checkHeaderPolicy, "checkHeaderPolicy");
        // Maps yaml config names to xml attribute names
        var attributeMap = {
            headerName: "name",
            failedStatusCode: "failed-check-httpcode",
            failedErrorMessage: "failed-check-error-message",
            ignoreCase: "ignore-case"
        };
        var attributes = ApimPolicyBuilder.createAttributes(attributeMap, checkHeaderPolicy);
        var policy = {
            $: attributes,
            value: checkHeaderPolicy.values
        };
        this.updatePolicy("inbound", "check-header", policy, 
        // We are keying the check-header policy by header name
        function (policy) { return policy.$.name === checkHeaderPolicy.headerName; });
        return this;
    };
    /**
     * Initializes an empty APIM policy
     */
    ApimPolicyBuilder.prototype.init = function () {
        this.policyRoot = {
            policies: {
                "inbound": [{ base: null }],
                "backend": [{ base: null }],
                "outbound": [{ base: null }],
                "on-error": [{ base: null }]
            }
        };
    };
    /**
     * Updates the matching policy or appends a new policy
     * @param policyType The policy type (inbound | outbound | backend | on-error)
     * @param policyName The xml element name of the policy
     * @param newPolicy The new policy XML object
     * @param predicate The condition to check for existing policy
     */
    ApimPolicyBuilder.prototype.updatePolicy = function (policyType, policyName, newPolicy, predicate) {
        var existing = this.policyRoot.policies[policyType][0][policyName];
        // Add new policy to empty list
        if (!existing) {
            this.policyRoot.policies[policyType][0][policyName] = [newPolicy];
            return;
        }
        // Find and replace the first matching policy
        for (var i = 0; i < existing.length; i++) {
            var policy = existing[i];
            if (predicate(policy)) {
                existing[i] = newPolicy;
                return;
            }
        }
        // Append new policy if not found
        existing.push(newPolicy);
    };
    /**
     * Creates a map of XML attributes for the APIM policy
     * @param attributeMap The attribute mapping from yaml -> xml
     * @param policy The APIM yaml policy
     */
    ApimPolicyBuilder.createAttributes = function (attributeMap, policy) {
        var attributes = {};
        Object.keys(attributeMap).forEach(function (key) {
            if (policy[key]) {
                attributes[attributeMap[key]] = policy[key];
            }
        });
        return attributes;
    };
    /**
     * Cleans an element so that when its converted to XML it doesn't generate empty tags
     * @param element The pseudo XML element to clean
     */
    ApimPolicyBuilder.cleanElement = function (element) {
        Object.keys(element).forEach(function (key) {
            if (!element[key]) {
                delete element[key];
            }
        });
    };
    /**
     * Create a claim element for a JWT validation policy
     * @param claim The JWT claim
     */
    ApimPolicyBuilder.createClaimElement = function (claim) {
        return {
            claim: {
                $: { name: claim.name, match: claim.match, separator: claim.separator },
                value: claim.values
            }
        };
    };
    return ApimPolicyBuilder;
}());
exports.ApimPolicyBuilder = ApimPolicyBuilder;
