import { ApiJwtValidatePolicy, ApiCorsPolicy, ApiIpFilterPolicy, ApiCheckHeaderPolicy } from "../models/apiManagement";
/**
 * APIM Policy build that can be used to build polices for APIs, Backends & operations
 */
export declare class ApimPolicyBuilder {
    private policyRoot;
    constructor();
    /**
     * Parses an APIM xml policy and loads it into a Policy Builder
     * @param xml The xml policy
     */
    static parse(xml: string): Promise<ApimPolicyBuilder>;
    /**
     * Generates the XML policy that is compatible with APIM
     */
    build(): string;
    /**
     * Adds a policy to specify the APIM backend to use for an operation
     * @param backendId The APIM backend id
     */
    setBackendService(backendId: string): ApimPolicyBuilder;
    /**
     * Applies the CORS policy to an APIM API
     * @param corsConfig The APIM CORS configuration
     */
    cors(corsConfig: ApiCorsPolicy): ApimPolicyBuilder;
    /**
     * Applies an IP filter configuration policy to an APIM API
     * @param ipConfig The IP configuration policy
     */
    ipFilter(ipConfig: ApiIpFilterPolicy): ApimPolicyBuilder;
    /**
     * Applies the JWT validation policy to an APIM API
     * @param jwtPolicy The JWT validation configuration
     */
    jwtValidate(jwtPolicy: ApiJwtValidatePolicy): ApimPolicyBuilder;
    checkHeader(checkHeaderPolicy: ApiCheckHeaderPolicy): ApimPolicyBuilder;
    /**
     * Initializes an empty APIM policy
     */
    private init;
    /**
     * Updates the matching policy or appends a new policy
     * @param policyType The policy type (inbound | outbound | backend | on-error)
     * @param policyName The xml element name of the policy
     * @param newPolicy The new policy XML object
     * @param predicate The condition to check for existing policy
     */
    private updatePolicy;
    /**
     * Creates a map of XML attributes for the APIM policy
     * @param attributeMap The attribute mapping from yaml -> xml
     * @param policy The APIM yaml policy
     */
    private static createAttributes;
    /**
     * Cleans an element so that when its converted to XML it doesn't generate empty tags
     * @param element The pseudo XML element to clean
     */
    private static cleanElement;
    /**
     * Create a claim element for a JWT validation policy
     * @param claim The JWT claim
     */
    private static createClaimElement;
}
