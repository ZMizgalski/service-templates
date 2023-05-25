export class GenericExportGenerator {
    private _exports: string[] = [];

    public addExports(paths: string[]): void {
        paths.forEach((line) => this.addExport(line));
    }

    public addExport(path: string): void {
        this._exports.push(`export * from '${path}'`);
    }

    public get exports(): string {
        return this._exports.join('\n');
    }   
}
