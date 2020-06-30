### To generate a list (tree view) of currently installed packages, use
- `npm list`

`ls`, `la` and `ll` are aliases of list command. la and ll commands shows extended information like description and repository.

### Options
The response format can be changed by passing options.
- `npm list --json`
  - `json` - Shows information in json format
  - `long` - Shows extended information
  - `parseable` - Shows parseable list instead of tree
  - `global` - Shows globally installed packages
  - `depth` - Maximum display depth of dependency tree
  - `dev/development` - Shows devDependencies
  - `prod/production` - Shows dependencies

If you want, you can also go to the package's home page.
- `npm home <package name>`