export interface CliCommand {
    command: string;
    args: string[];
}
export declare class CliCommandFactory {
    private commands;
    constructor();
    registerCommand(key: string, command: CliCommand): void;
    getCommand(key: string): CliCommand;
}
