Building project dependencies can sometimes be a tedious task. Instead of publishing a package version to NPM and installing the dependency to test the changes, use npm link. npm link creates a symlink so the latest code can be tested in a local environment. This makes testing global tools and project dependencies easier by allowing the latest code run before making a published version.

### Help text
```
NAME
  npm-link - Symlink a package folder
SYNOPSIS
  npm link (in package dir)
  npm link [<@scope>/]<pkg>[@<version>]
  alias: npm ln
```

### Steps for linking project dependencies
When creating the dependency link, note that the package name is what is going to be referenced in the parent project.
- CD into a dependency directory (ex: cd ../my-dep )
- npm link
- CD into the project that is going to use the dependency
- npm link my-dep or if namespaced npm link @namespace/my-dep


### Steps for linking a global tool
- CD into the project directory (ex: cd eslint-watch )
- npm link
- Use the tool
- esw --quiet

### Problems that may arise
Linking projects can sometimes cause issues if the dependency or global tool is already installed. npm uninstall (-g) <pkg> and then running npm link normally resolves any issues that may arise.