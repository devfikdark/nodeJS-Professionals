## Section 13.3: Loading environment properties from a "property file"

**1st way**

```js
npm install dotenv --save
```

### Create a directory env to store your properties files:
- mkdir env

### Create a file with .env extension, Like this config.env
- config.env
```
NODE_ENV=your-env
PORT=your-port
DATABASE=your-db-Str
CLOUD_NAME=your-cloud-name
API_KEY=your-api-key
API_SECRET=your-api-secret
```

### Access env data
- app.js

```js
let dotEnv = require('dotenv');
dotEnv.config({ path: './config.env' });

console.log(process.env.yourVariableName);

// Example
console.log(process.env.PORT);
```

**2nd way**

```js
npm install properties-reader --save
```

### Create a directory env to store your properties files:
- mkdir env

### Create environments.js:
```js
process.argv.forEach(function (val, index, array) {
  let arg = val.split("=");
  if (arg.length > 0) {
    if (arg[0] === 'env') {
      let env = require('./env/' + arg[1] + '.properties');
      module.exports = env;
    }
  }
});
```

### Sample development.properties properties file:
```
# Dev properties
[main]
# Application port to run the node server
app.port=8080
[database]
# Database connection to mysql
mysql.host=localhost
mysql.port=2500
```

### Sample usage of the loaded properties:
```js
let enviorment = require('./environments');
let PropertiesReader = require('properties-reader');
let properties = new PropertiesReader(enviorment);
let someVal = properties.get('main.app.port');
```

### Starting the express server
```js
npm start env=development

// or

npm start env=production
```
