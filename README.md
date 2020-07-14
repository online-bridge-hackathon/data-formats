# [API Documentation Page](https://online-bridge-hackathon.github.io/data-formats/) 


## Overview

This repository is serving the specs for the different projects of [Global Bridge App](https://github.com/online-bridge-hackathon/bridge-hackathon). It uses GitHubPages to directly serve the contents under the /docs folder.

For convenience, there's a CLI to auto-generate these docs, along with embeded code-samples and examples. The following section describes its usage.


# @docs-gen
## Installation and Setup

### - REQUIREMENTS

    NodeJS (v12+)

    Move to the /docs-gen folder (cd docs-gen)

### - PACKAGES

    npm install

### - CLI

Building the binaries for the CLI will export 1 command -> docgen.js that can then be used by the shell

    npm link

It might be needed to add execution permissions to the bin files:

    chmod +x bin/docgen.js

* * *

## Usage

Generate for a single project

    ./docgen.js -p [project name]

Generate for all projects

    ./docgen.js -a

Generate the main entry page

    ./docgen.js -m

For further options and help:

     ./docgen.js -h

* * *

## License

MIT

* * *

