import { NunjucksWorker } from './nunjucks.worker';
// @ts-ignore
import { GeneratedBuildJSON } from './generated-types';

import { GenericExportGenerator } from './generic-exports.class';
import Yargs, { Arguments } from 'yargs';
import { readFileSync } from 'fs';
import { JSONInput, InputData, jsonInputForTargetLanguage, quicktype } from 'quicktype-core';
import { Observable, from, map, mergeMap } from 'rxjs';
import { outputFileSync, rmSync } from 'fs-extra';


type YargsJSON = { config: string };

const Path = 'workers/generated-types';

const initInputData = (jsonInput: JSONInput<string>): InputData => {
    const inputData = new InputData();
    inputData.addInput(jsonInput);

    return inputData;
};

const writeTypeFile = (fileName: string, fileStringBuffer: string): void  => {
    const indexPath = `${Path}/index.ts`
    const typePath = `${Path}/${fileName}.types.ts`;

    try {
        rmSync(indexPath);
    } catch {}

    outputFileSync(typePath, fileStringBuffer);

    const genericExport = new GenericExportGenerator();
    genericExport.addExport(`./${fileName}.types`)

    outputFileSync(indexPath, genericExport.exports);
};

const generateTypeFromJSON = (jsonString: string): Observable<string> => {
    const jsonInput = jsonInputForTargetLanguage('typescript');

    return from(jsonInput.addSource({ name: 'generatedBuildJSON', samples: [ jsonString ] }))
        .pipe(
            map(() => initInputData(jsonInput)),
            mergeMap((inputData) => from(quicktype({ inputData, lang: 'typescript' }))),
            map((serializedRenderResult) => serializedRenderResult.lines.join('\n'))
        );
};

export const YargsWorker = {
    generateTypeFileFromJSON: (fileName: string): void => {
        const jsonArguments = Yargs(process.argv.slice(2)).options('config', {
            description: 'input path to the build.json file',
            alias: 'c',
            default: './',
            type: 'string'
        }).argv as Arguments<YargsJSON>;

        const fileBuffer = readFileSync(jsonArguments.config, { encoding: 'utf-8' });

        generateTypeFromJSON(fileBuffer)
            .subscribe((fileStringBuffer) => {
                const config = JSON.parse(fileBuffer) as GeneratedBuildJSON;

                writeTypeFile(fileName, fileStringBuffer);
                NunjucksWorker.generateAllFiles(config);
            });
    }
}
