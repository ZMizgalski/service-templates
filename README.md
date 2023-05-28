# service-templates
> Service templates generator for automation of day-to-day processes.

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
- This programme was created to speed up the daily work of creating files like Docker, CircleCi etc. After creating a configuration file, we are able to generate the entire file without much writing from the config.

## Technologies Used
- nunjucks
- fs-extra
- yargs
- typescript
- node
- yarn
- quicktype
- rxJs

## Features
List the ready features here:
- Generate service templates with custom config

## Setup
1. Create a folder named you like.
2. Inside your folder, open console and paste: `git clone https://github.com/ZMizgalski/service-templates.git`
3. `yarn install`
4. Then you are ready to go just open it in any Editor. (I prefer VSCode) [Download here](https://code.visualstudio.com/)

## Usage
1. Example config
```bash
{
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
}
```
2. Choose supported template and put in `./templates` folder (example docker file)
```js
FROM alpine:latest

ENV PROVIDER_NAME "{{ ProviderName }}"
ENV PROVIDER_TYPE "{{ ProviderType }}"

{% for value in DockerExampleData.Array1 %}
{{ value }}
{% endfor %}

{% for value in DockerExampleData.Array2 %}
{{ value }}
{% endfor %}

RUN {{ DockerExampleData.SetupExample.Line1 }}
RUN {{ DockerExampleData.SetupExample.Line2 }}

RUN "/bin/bash"
```

1. `npm run generate-templates -- --config './config/example-config.json'`

## Project Status
Project is:  _complete_ .

## Room for Improvement
- More generic types
- Disable ability to change configModel not for devops.

## Contact
Created by [@zmizgalski](https://zmizgalski.github.io/) - feel free to contact me!

## License
This project is open source and available under the [... License](https://github.com/ZMizgalski/service-templates/blob/main/LICENSE).
