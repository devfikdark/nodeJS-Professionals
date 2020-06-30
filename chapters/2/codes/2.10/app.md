### Set the repository for the scope "myscope"
- `npm config set @myscope:registry http://registry.corporation.com`

### Login at a repository and associate it with the scope "myscope"
- `npm adduser --registry=http://registry.corporation.com --scope=@myscope`

### Install a package "mylib" from the scope "myscope"
- `npm install @myscope/mylib`

If the name of your own package starts with @myscope and the scope "myscope" is associated with a different repository, npm publish will upload your package to that repository instead.