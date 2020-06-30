Node.js package configurations are contained in a file called package.json that you can find at the root of each project. You can setup a brand new configuration file by calling:

- `npm init`
- `npm init --yes`
- `npm init -y`
- `npm i express` after create config.json then run this command & install dependencies

### Example (package.json)
```
{
  "name": "hello_world",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "start": "nodemon app.js"
  },
  "author": "Morol",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  }
}

```