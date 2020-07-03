# Section 10.5: Extended project definition

Some of the additional attributes are parsed by the npm website like repository , bugs 
or homepage and shown in the infobox for this packages

```json
{
  "main": "app.js",
  "repository" : {
    "type": "git",
    "url": "git+https://github.com/pro-js/nodeJS-Professionals.git"
  },
  "bugs": {
    "url": "https://github.com/pro-js/nodeJS-Professionals/issues"
  },
  "homepage": "https://github.com/pro-js/nodeJS-Professionals#readme",
  "files": [
    "app.js", // source files
    "README.md", // additional files
    "lib" // folder with all included files
  ]
}
```

| Field | Description |
|:-----:|:-----------:|
| main | Entry script for this package. This script is returned when a user requires the package. |
| repository | Location and type of the public repository |
| bugs | Bugtracker for this package (e.g. github) |
| homepage | Homepage for this package or the general project |
| files | List of files and folders which should be downloaded when a user does a npm install <packagename> |
