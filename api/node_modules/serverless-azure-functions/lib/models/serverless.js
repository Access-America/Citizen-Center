"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Commands that can be issued in CLI
 */
var ServerlessCliCommand;
(function (ServerlessCliCommand) {
    /** Package service */
    ServerlessCliCommand["PACKAGE"] = "package";
    /** Deploy service */
    ServerlessCliCommand["DEPLOY"] = "deploy";
    /** Invoke HTTP endpoint */
    ServerlessCliCommand["INVOKE"] = "invoke";
    /** Roll back service */
    ServerlessCliCommand["ROLLBACK"] = "rollback";
    /** Run service offline */
    ServerlessCliCommand["OFFLINE"] = "offline";
    /** Start pre-built offline service - subcommand for offline*/
    ServerlessCliCommand["START"] = "start";
    /** Build an offline service - subcommand for offline */
    ServerlessCliCommand["BUILD"] = "build";
    /** Cleanup files from offline build - subcommand for offline */
    ServerlessCliCommand["CLEANUP"] = "cleanup";
    /** List deployments - subcommand for deploy */
    ServerlessCliCommand["LIST"] = "list";
    /** Command to add or remove functions */
    ServerlessCliCommand["FUNC"] = "func";
    /** Add a function - subcommand for func */
    ServerlessCliCommand["ADD"] = "add";
    /** Remove a function - subcommand for func */
    ServerlessCliCommand["REMOVE"] = "remove";
})(ServerlessCliCommand = exports.ServerlessCliCommand || (exports.ServerlessCliCommand = {}));
