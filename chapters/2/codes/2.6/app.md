First, make sure that you have configured your package (as said in Setting up a package configuration​ ). Then, you have to be logged in to npmjs.

- If you already have a npm user
  - `npm login`
- If you don't have a user
  - `npm adduser`
- To check that your user is registered in the current client
  - `npm config ls`
- After that, when your package is ready to be published use
  - `npm publish`

And you are done.
If you need to publish a new version, ensure that you update your package version, as stated in Basic semantic versioning. Otherwise, npm will not let you publish the package. 
(Example here)

```
{
  name: "package-name",
  version: "1.0.4"
}
```