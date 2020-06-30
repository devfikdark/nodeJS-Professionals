### Installing NPM
Note that in order to install packages, you must have NPM installed.
The recommended way to install NPM is to use one of the installers from the Node.js download page. You can
check to see if you already have node.js installed by running either the `npm -v` or the npm version command.After installing NPM via the Node.js installer, be sure to check for updates. This is because NPM gets updated more frequently than the Node.js installer. To check for updates run the following command:

- `npm install npm@latest -g`

### How to install packages
- `npm install <package-name>`
- `npm i <package-name>`
- `npm install lodash express`

### Example
- `npm install lodash@4.11.1`
- `npm install lodash@">=4.10.1 <4.11.1"`
- `npm install <name>@latest`
- `npm install --registry=http://myreg.mycompany.com <package name>`
- `npm install --save <name>` Install dependencies
- `npm install -S <name> ` shortcut version --save
- `npm install --save-dev <name>`  Install dependencies for development purposes
- `npm install -D <name>`  shortcut version --save-dev


### Installing dependencies
- `npm install --global <name>`
- `npm install -g <name>`
- `npm i -g <name>`
- `npm install -g grunt-cli`

### Show npms
- `npm list`
- `npm list <name>`