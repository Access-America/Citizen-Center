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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var arm_storage_1 = require("@azure/arm-storage");
var storage_blob_1 = require("@azure/storage-blob");
var fs_1 = __importDefault(require("fs"));
var guard_1 = require("../shared/guard");
var baseService_1 = require("./baseService");
var loginService_1 = require("./loginService");
/**
 * Type of authentication with Azure Storage
 * @member SharedKey - Retrieve and use a Shared Key for Azure Blob BStorage
 * @member Token - Retrieve and use an Access Token to authenticate with Azure Blob Storage
 */
var AzureStorageAuthType;
(function (AzureStorageAuthType) {
    AzureStorageAuthType[AzureStorageAuthType["SharedKey"] = 0] = "SharedKey";
    AzureStorageAuthType[AzureStorageAuthType["Token"] = 1] = "Token";
})(AzureStorageAuthType = exports.AzureStorageAuthType || (exports.AzureStorageAuthType = {}));
/**
 * Wrapper for operations on Azure Blob Storage account
 */
var AzureBlobStorageService = /** @class */ (function (_super) {
    __extends(AzureBlobStorageService, _super);
    function AzureBlobStorageService(serverless, options, authType) {
        if (authType === void 0) { authType = AzureStorageAuthType.SharedKey; }
        var _this = _super.call(this, serverless, options) || this;
        _this.accountUrl = "https://" + _this.storageAccountName + ".blob.core.windows.net";
        _this.authType = authType;
        return _this;
    }
    /**
     * Initialize Blob Storage service. This creates the credentials required
     * to perform any operation with the service
     */
    AzureBlobStorageService.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        if (this.storageCredential) {
                            return [2 /*return*/];
                        }
                        _a = this;
                        if (!(this.authType === AzureStorageAuthType.SharedKey)) return [3 /*break*/, 2];
                        _c = storage_blob_1.SharedKeyCredential.bind;
                        _d = [void 0, this.storageAccountName];
                        return [4 /*yield*/, this.getKey()];
                    case 1:
                        _b = new (_c.apply(storage_blob_1.SharedKeyCredential, _d.concat([_f.sent()])))();
                        return [3 /*break*/, 4];
                    case 2:
                        _e = storage_blob_1.TokenCredential.bind;
                        return [4 /*yield*/, this.getToken()];
                    case 3:
                        _b = new (_e.apply(storage_blob_1.TokenCredential, [void 0, _f.sent()]))();
                        _f.label = 4;
                    case 4:
                        _a.storageCredential = _b;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Upload a file to Azure Blob Storage
     * @param path Path of file to upload
     * @param containerName Name of container in Azure Blob storage for upload
     * @param blobName Name of blob file created as a result of upload
     */
    AzureBlobStorageService.prototype.uploadFile = function (path, containerName, blobName) {
        return __awaiter(this, void 0, void 0, function () {
            var name;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        guard_1.Guard.empty(path, "path");
                        guard_1.Guard.empty(containerName, "containerName");
                        this.checkInitialization();
                        name = blobName || path.replace(/^.*[\\\/]/, "-");
                        this.log("Uploading file at '" + path + "' to container '" + containerName + "' with name '" + name + "'");
                        return [4 /*yield*/, storage_blob_1.uploadFileToBlockBlob(storage_blob_1.Aborter.none, path, this.getBlockBlobURL(containerName, name))];
                    case 1:
                        _a.sent();
                        this.log("Finished uploading blob");
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    /**
     * Download blob to file
     * https://github.com/Azure/azure-storage-js/blob/master/blob/samples/highlevel.sample.js#L82-L97
     * @param containerName Container containing blob to download
     * @param blobName Blob to download
     * @param targetPath Path to which blob will be downloaded
     */
    AzureBlobStorageService.prototype.downloadBinary = function (containerName, blobName, targetPath) {
        return __awaiter(this, void 0, void 0, function () {
            var blockBlobUrl, props, buffer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        blockBlobUrl = this.getBlockBlobURL(containerName, blobName);
                        return [4 /*yield*/, blockBlobUrl.getProperties(storage_blob_1.Aborter.none)];
                    case 1:
                        props = _a.sent();
                        buffer = Buffer.alloc(props.contentLength);
                        return [4 /*yield*/, storage_blob_1.downloadBlobToBuffer(storage_blob_1.Aborter.timeout(30 * 60 * 1000), buffer, blockBlobUrl, 0, undefined, {
                                blockSize: 4 * 1024 * 1024,
                                parallelism: 20,
                            })];
                    case 2:
                        _a.sent();
                        fs_1.default.writeFileSync(targetPath, buffer, "binary");
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Delete a blob from Azure Blob Storage
     * @param containerName Name of container containing blob
     * @param blobName Blob to delete
     */
    AzureBlobStorageService.prototype.deleteFile = function (containerName, blobName) {
        return __awaiter(this, void 0, void 0, function () {
            var blockBlobUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        guard_1.Guard.empty(containerName, "containerName");
                        guard_1.Guard.empty(blobName, "blobName");
                        this.checkInitialization();
                        return [4 /*yield*/, this.getBlockBlobURL(containerName, blobName)];
                    case 1:
                        blockBlobUrl = _a.sent();
                        return [4 /*yield*/, blockBlobUrl.delete(storage_blob_1.Aborter.none)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Lists files in container
     * @param ext - Extension of files to filter on when retrieving files
     * from container
     */
    AzureBlobStorageService.prototype.listFiles = function (containerName, ext) {
        return __awaiter(this, void 0, void 0, function () {
            var result, marker, containerURL, listBlobsResponse, _a, _b, blob;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        guard_1.Guard.empty(containerName, "containerName");
                        this.checkInitialization();
                        result = [];
                        containerURL = this.getContainerURL(containerName);
                        _d.label = 1;
                    case 1: return [4 /*yield*/, containerURL.listBlobFlatSegment(storage_blob_1.Aborter.none, marker)];
                    case 2:
                        listBlobsResponse = _d.sent();
                        marker = listBlobsResponse.nextMarker;
                        try {
                            for (_a = (e_1 = void 0, __values(listBlobsResponse.segment.blobItems)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                blob = _b.value;
                                if ((ext && blob.name.endsWith(ext)) || !ext) {
                                    result.push(blob.name);
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        _d.label = 3;
                    case 3:
                        if (marker) return [3 /*break*/, 1];
                        _d.label = 4;
                    case 4: return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Lists the containers within the Azure Blob Storage account
     */
    AzureBlobStorageService.prototype.listContainers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, marker, listContainersResponse, _a, _b, container;
            var e_2, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.checkInitialization();
                        result = [];
                        _d.label = 1;
                    case 1: return [4 /*yield*/, this.getServiceURL().listContainersSegment(storage_blob_1.Aborter.none, marker)];
                    case 2:
                        listContainersResponse = _d.sent();
                        marker = listContainersResponse.nextMarker;
                        try {
                            for (_a = (e_2 = void 0, __values(listContainersResponse.containerItems)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                container = _b.value;
                                result.push(container.name);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        _d.label = 3;
                    case 3:
                        if (marker) return [3 /*break*/, 1];
                        _d.label = 4;
                    case 4: return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Creates container specified in Azure Cloud Storage options
     * @param containerName - Name of container to create
     */
    AzureBlobStorageService.prototype.createContainerIfNotExists = function (containerName) {
        return __awaiter(this, void 0, void 0, function () {
            var containers, containerURL;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        guard_1.Guard.empty(containerName, "containerName");
                        this.checkInitialization();
                        return [4 /*yield*/, this.listContainers()];
                    case 1:
                        containers = _a.sent();
                        if (!!containers.find(function (name) { return name === containerName; })) return [3 /*break*/, 3];
                        containerURL = this.getContainerURL(containerName);
                        return [4 /*yield*/, containerURL.create(storage_blob_1.Aborter.none)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Delete a container from Azure Blob Storage Account
     * @param containerName Name of container to delete
     */
    AzureBlobStorageService.prototype.deleteContainer = function (containerName) {
        return __awaiter(this, void 0, void 0, function () {
            var containerUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        guard_1.Guard.empty(containerName, "containerName");
                        this.checkInitialization();
                        return [4 /*yield*/, this.getContainerURL(containerName)];
                    case 1:
                        containerUrl = _a.sent();
                        return [4 /*yield*/, containerUrl.delete(storage_blob_1.Aborter.none)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Generate URL with SAS token for a specific blob
     * @param containerName Name of container containing blob
     * @param blobName Name of blob to generate SAS token for
     * @param days Number of days from current date until expiry of SAS token. Defaults to 1 year
     */
    AzureBlobStorageService.prototype.generateBlobSasTokenUrl = function (containerName, blobName, days) {
        if (days === void 0) { days = 365; }
        return __awaiter(this, void 0, void 0, function () {
            var now, endDate, blobSas, blobUrl;
            return __generator(this, function (_a) {
                this.checkInitialization();
                if (this.authType !== AzureStorageAuthType.SharedKey) {
                    throw new Error("Need to authenticate with shared key in order to generate SAS tokens. " +
                        "Initialize Blob Service with SharedKey auth type");
                }
                now = new Date();
                endDate = new Date(now);
                endDate.setDate(endDate.getDate() + days);
                blobSas = storage_blob_1.generateBlobSASQueryParameters({
                    blobName: blobName,
                    cacheControl: "cache-control-override",
                    containerName: containerName,
                    contentDisposition: "content-disposition-override",
                    contentEncoding: "content-encoding-override",
                    contentLanguage: "content-language-override",
                    contentType: "content-type-override",
                    expiryTime: endDate,
                    ipRange: { start: "0.0.0.0", end: "255.255.255.255" },
                    permissions: storage_blob_1.BlobSASPermissions.parse("racwd").toString(),
                    protocol: storage_blob_1.SASProtocol.HTTPSandHTTP,
                    startTime: now,
                    version: "2016-05-31"
                }, this.storageCredential);
                blobUrl = this.getBlockBlobURL(containerName, blobName);
                return [2 /*return*/, blobUrl.url + "?" + blobSas];
            });
        });
    };
    /**
     * Get ServiceURL object for Azure Blob Storage Account
     */
    AzureBlobStorageService.prototype.getServiceURL = function () {
        this.checkInitialization();
        var pipeline = storage_blob_1.StorageURL.newPipeline(this.storageCredential);
        var accountUrl = this.accountUrl;
        var serviceUrl = new storage_blob_1.ServiceURL(accountUrl, pipeline);
        return serviceUrl;
    };
    /**
     * Get a ContainerURL object to perform operations on Azure Blob Storage container
     * @param containerName Name of container
     * @param serviceURL Previously created ServiceURL object (will create if undefined)
     */
    AzureBlobStorageService.prototype.getContainerURL = function (containerName) {
        guard_1.Guard.empty(containerName, "containerName");
        this.checkInitialization();
        return storage_blob_1.ContainerURL.fromServiceURL(this.getServiceURL(), containerName);
    };
    /**
     * Get a BlockBlobURL object to perform operations on Azure Blob Storage Blob
     * @param containerName Name of container containing blob
     * @param blobName Name of blob
     */
    AzureBlobStorageService.prototype.getBlockBlobURL = function (containerName, blobName) {
        guard_1.Guard.empty(containerName, "containerName");
        guard_1.Guard.empty(blobName, "blobName");
        this.checkInitialization();
        return storage_blob_1.BlockBlobURL.fromContainerURL(this.getContainerURL(containerName), blobName);
    };
    /**
     * Get access token by logging in (again) with a storage-specific context
     */
    AzureBlobStorageService.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loginService, authResponse, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loginService = new loginService_1.AzureLoginService(this.serverless, this.options);
                        return [4 /*yield*/, loginService.login({
                                tokenAudience: "https://storage.azure.com/"
                            })];
                    case 1:
                        authResponse = _a.sent();
                        return [4 /*yield*/, authResponse.credentials.getToken()];
                    case 2:
                        token = _a.sent();
                        return [2 /*return*/, token.accessToken];
                }
            });
        });
    };
    /**
     * Get access key for storage account
     */
    AzureBlobStorageService.prototype.getKey = function () {
        return __awaiter(this, void 0, void 0, function () {
            var context, storageAccounts, keys;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        context = new arm_storage_1.StorageManagementClientContext(this.credentials, this.subscriptionId);
                        storageAccounts = new arm_storage_1.StorageAccounts(context);
                        return [4 /*yield*/, storageAccounts.listKeys(this.resourceGroup, this.storageAccountName)];
                    case 1:
                        keys = _a.sent();
                        return [2 /*return*/, keys.keys[0].value];
                }
            });
        });
    };
    /**
     * Ensure that the blob storage service has been initialized. If not initialized,
     * the credentials will not be available for any operation
     */
    AzureBlobStorageService.prototype.checkInitialization = function () {
        guard_1.Guard.null(this.storageCredential, "storageCredential", "Azure Blob Storage Service has not been initialized. Make sure .initialize() has been called " +
            "before performing any operation");
    };
    return AzureBlobStorageService;
}(baseService_1.BaseService));
exports.AzureBlobStorageService = AzureBlobStorageService;
