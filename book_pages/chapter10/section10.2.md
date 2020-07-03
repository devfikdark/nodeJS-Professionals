# Section 10.2: Scripts

You can define scripts that can be executed or are triggered before or after another script.
```json
{
  "scripts": {
    "pretest": "scripts/pretest.js",
    "test": "scripts/test.js",
    "posttest": "scripts/posttest.js"
  }
}
```

### In this case, you can execute the script by running either of these commands:

- $ npm run-script test
- $ npm run test
- $ npm test
- $ npm t

### Pre-defined scripts

| Script Name | Description |
|:-----------:|:-----------:|
| prepublish | Run before the package is published. |
| publish | postpublish Run after the package is published. |
| preinstall | Run before the package is installed. |
| install, postinstall | Run after the package is installed. |
| preuninstall, uninstall | Run before the package is uninstalled. |
| postuninstall | Run after the package is uninstalled. |
| preversion, version | Run before bump the package version. |
| postversion | Run after bump the package version. |
| pretest, test, posttest | Run by the npm test command |
| prestop, stop, poststop | Run by the npm stop command |
| prestart, start, poststart | Run by the npm start command |
| prerestart, restart, postrestart | Run by the npm restart command. | 

### User-defined scripts

```json
{
  "scripts": {
    "start": "nodemon app.js",
    "preci": "scripts/preci.js",
    "ci": "scripts/ci.js",
    "postci": "scripts/postci.js"
  }
}
```
In this case, you can execute the script by running either of these commands:

- $ npm start
- $ npm run-script ci
- $ npm run ci