## Section 10.1: Exploring package.json

A `package.json` file, usually present in the project root, contains metadata about your app or module as 
well as the list of dependencies to install from npm when running npm install . To initialize a package.
json type npm init in your command prompt. To create a package.json with default values use:
```js
npm init --yes

// or
npm init -y

// To install a package and save it to package.json use:
npm install {package name} --save

//You can also use the shorthand notation:
npm i -S {package name}
```
NPM aliases `-S to --save` and `-D to --save-dev` to save in your production or development dependencies
respectively. The package will appear in your dependencies; if you use `--save-dev` instead of `--save`, 
the package will appear in your devDependencies.

### Important properties of package.json :

```json
{
  "name": "NodeJS-Professionals",
  "version": "10.3.1",
  "description": "An example module to illustrate the usage of a package.json",
  "author": "Your Name <your.name@example.org>",
  "contributors": [{
    "name": "Morol",
    "email": "morolswediu@gmail.com"
  }],
  "bin": {
    "module-name": "./bin/module-name"
  },
  "scripts": {
    "test": "vows --spec --isolate",
    "start": "nodemon app.js",
    "predeploy": "echo About to deploy",
    "postdeploy": "echo Deployed",
    "prepublish": "coffee --bare --compile --output lib/foo src/foo/*.coffee"
  },
  "main": "lib/foo.js",
  "repository": {
    "type": "git",
    "url": "https://github.com/pro-js/nodeJS-Professionals"
  },
  "bugs": {
    "url": "https://github.com/pro-js/nodeJS-Professionals/issues"
  },
  "keywords": [
    "nodejs"
  ],
  "dependencies": {
    "express": "4.2.x"
  },
  "devDependencies": {
    "assume": "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0"
  },
  "peerDependencies": {
    "moment": ">2.0.0"
  },
  "preferGlobal": true,
  "private": true,
  "publishConfig": {
    "registry": "https://your-private-hosted-npm.registry.domain.com"
  },
  "subdomain": "foobar",
  "analyze": true,
  "license": "MIT",
  "files": [
    "lib/app.js"
  ]
}
```