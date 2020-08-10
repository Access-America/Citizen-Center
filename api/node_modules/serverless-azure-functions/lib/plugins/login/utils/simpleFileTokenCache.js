"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var os_1 = __importDefault(require("os"));
var CONFIG_DIRECTORY = path_1.default.join(os_1.default.homedir(), ".azure");
var DEFAULT_SLS_TOKEN_FILE = path_1.default.join(CONFIG_DIRECTORY, "slsTokenCache.json");
var SimpleFileTokenCache = /** @class */ (function () {
    function SimpleFileTokenCache(tokenPath) {
        if (tokenPath === void 0) { tokenPath = DEFAULT_SLS_TOKEN_FILE; }
        this.tokenPath = tokenPath;
        this.entries = [];
        this.subscriptions = [];
        if (tokenPath === DEFAULT_SLS_TOKEN_FILE && !fs_1.default.existsSync(CONFIG_DIRECTORY)) {
            CONFIG_DIRECTORY = path_1.default.join(os_1.default.homedir(), ".azure");
            this.tokenPath = CONFIG_DIRECTORY;
            fs_1.default.mkdirSync(CONFIG_DIRECTORY);
        }
        this.load();
    }
    SimpleFileTokenCache.prototype.add = function (entries, callback) {
        var _a;
        (_a = this.entries).push.apply(_a, __spread(entries));
        this.save();
        if (callback) {
            callback();
        }
    };
    SimpleFileTokenCache.prototype.remove = function (entries, callback) {
        this.entries = (this.entries)
            ?
                this.entries.filter(function (e) {
                    return !Object.keys(entries[0]).every(function (key) { return e[key] === entries[0][key]; });
                })
            :
                [];
        this.save();
        if (callback) {
            callback();
        }
    };
    SimpleFileTokenCache.prototype.find = function (query, callback) {
        var result = (this.entries)
            ?
                this.entries.filter(function (e) {
                    return Object.keys(query).every(function (key) { return e[key] === query[key]; });
                })
            :
                [];
        callback(null, result);
        return result;
    };
    //-------- File toke cache specific methods
    SimpleFileTokenCache.prototype.addSubs = function (subscriptions) {
        var _a;
        (_a = this.subscriptions).push.apply(_a, __spread(subscriptions));
        this.subscriptions = this.subscriptions.reduce(function (accumulator, current) {
            var x = accumulator.find(function (item) { return item.id === current.id; });
            return (!x) ? accumulator.concat([current]) : accumulator;
        }, []);
        this.save();
    };
    SimpleFileTokenCache.prototype.clear = function (callback) {
        this.entries = [];
        this.subscriptions = [];
        this.save();
        callback();
    };
    SimpleFileTokenCache.prototype.isEmpty = function () {
        return !this.entries || this.entries.length === 0;
    };
    SimpleFileTokenCache.prototype.first = function () {
        return (this.entries && this.entries.length) ? this.entries[0] : null;
    };
    SimpleFileTokenCache.prototype.listSubscriptions = function () {
        return this.subscriptions;
    };
    SimpleFileTokenCache.prototype.load = function () {
        if (!fs_1.default.existsSync(this.tokenPath)) {
            this.save();
            return;
        }
        var savedCache = JSON.parse(fs_1.default.readFileSync(this.tokenPath).toString());
        if (!savedCache || !savedCache.entries) {
            this.save();
            return;
        }
        this.entries = savedCache.entries;
        this.entries.map(function (t) { return t.expiresOn = new Date(t.expiresOn); });
        this.subscriptions = savedCache.subscriptions;
    };
    SimpleFileTokenCache.prototype.save = function () {
        fs_1.default.writeFileSync(this.tokenPath, JSON.stringify({ entries: this.entries, subscriptions: this.subscriptions }));
    };
    return SimpleFileTokenCache;
}());
exports.SimpleFileTokenCache = SimpleFileTokenCache;
