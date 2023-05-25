# service-templates
> Templates devops generator

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)
* [License](#license)

## General Information
- You can generate service-templates with custom config.
- `` {
    "ProviderName": "example-aws",
    "ProviderType": "example-bucket-initializer",
    "DockerExampleData": {
        "Array1": [
            "node echo 'pre'"
        ],
        "Array2": [
            "node echo 'post'"
        ],
        "SetupExample": {
            "Line1": "yarn install",
            "Line2": "yarn add --dev @types/node"
        }
    }
} ``
- `` include Dockerfile ``

## Technologies Used
- Nunjucks
- fs-extra
- yargs
- typescript
- node

## Features
List the ready features here:
- Generate service templates with custom config

## Setup
1. Create a folder named you like.
2. Inside your folder, open console and paste: `git clone https://github.com/ZMizgalski/service-templates.git`
3. `yarn install`
4. Then you are ready to go just open it in any Editor. (I prefer Intellij Idea Community) [Download here](https://www.jetbrains.com/idea/download/#section=windows)

## Usage
1. `npm run generate-templates -- --config './config/example-config.json'`

## Project Status
Project is:  _complete_ .

## Room for Improvement
- More generic types

## Contact
Created by [@zmizgalski](https://zmizgalski.github.io/) - feel free to contact me!

## License
This project is open source and available under the [... License](https://github.com/ZMizgalski/service-templates/blob/main/LICENSE).
