Before publishing a package you have to version it. npm supports semantic versioning, this means there are patch, minor and major releases.

### For example, if your package is at version 1.2.3 to change version you have to:
  - patch release: `npm version patch => 1.2.4`
  - minor release: `npm version minor => 1.3.0`
  - major release: `npm version major => 2.0.0`

When you set a package version using one of the npm commands above, npm will modify the version field of the `package.json` file, commit it, and also create a new Git tag with the version prefixed with a `"v"`, as if you've issued the
command:
- `git tag v3.1.4`

Unlike other package managers like Bower, the npm registry doesn't rely on Git tags being created for every version. But, if you like using tags, you should remember to push the newly created tag after bumping the package version:

- `git push origin master` (to push the change to package.json)
- `git push origin v3.1.4` (to push the new tag)
- `git push origin master --tags`
