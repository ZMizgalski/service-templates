import { YargsWorker } from './workers/yargs.worker';


function main() {
    YargsWorker.generateTypeFileFromJSON('buildJSON');
}

main();
