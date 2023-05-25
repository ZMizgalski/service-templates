// @ts-ignore
import { GeneratedBuildJSON } from './generated-types';

import { outputFileSync, readdir } from "fs-extra";
import { configure, render } from "nunjucks";


const Path = 'templates';
const OutPath = 'generated-templates';

export const NunjucksWorker = {
    generateAllFiles: (config: GeneratedBuildJSON) => {
        configure(Path, { autoescape: true });

        readdir(Path, (err, files) => {
            if (err) return console.log('Unable to scan directory: ' + err);

            files.forEach((fileName) => {
                const file = render(fileName, config);
                outputFileSync(`${OutPath}/${fileName}`, file);
            });
        });
    }
}
