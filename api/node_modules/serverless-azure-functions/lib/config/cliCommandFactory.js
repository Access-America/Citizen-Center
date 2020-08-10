"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CliCommandFactory = /** @class */ (function () {
    function CliCommandFactory() {
        this.commands = {};
    }
    CliCommandFactory.prototype.registerCommand = function (key, command) {
        this.commands[key] = command;
    };
    CliCommandFactory.prototype.getCommand = function (key) {
        return this.commands[key];
    };
    return CliCommandFactory;
}());
exports.CliCommandFactory = CliCommandFactory;
