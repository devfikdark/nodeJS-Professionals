Since npm itself is a `Node.js module`, it can be updated using itself.
- If OS is Windows must be running command prompt as Admin
  - `npm install -g npm@latest`

- If you want to check for updated versions you can do:
  - `npm outdated`

- In order to update a specific package:
- `npm update <package name>`

This will update the package to the latest version according to the restrictions in package.json
In case you also want to lock the updated version in package.json:
- `npm update <package name> --save`