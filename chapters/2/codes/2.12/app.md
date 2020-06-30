By default, npm installs the latest available version of modules according to each dependencies' semantic version. This can be problematic if a module author doesn't adhere to semver and introduces breaking changes in a module update, for example.

To lock down each dependencies' version (and the versions of their dependencies, etc) to the specific version installed locally in the node_modules folder, use
- `npm shrinkwrap`

This will then create a `npm-shrinkwrap.json` alongside your `package.json` which lists the specific versions of dependancies.