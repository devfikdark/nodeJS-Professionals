# Section 13.4: Using different Properties/Configuration for different environments like dev, qa, staging etc

Suppose we have two property files for different environment.

### dev.json
```js
{
  PORT : 3000,
  DB : {
    host : "localhost",
    user : "bob",
    password : "12345"
  }
}
```

### qa.json
```js
{
  PORT : 3001,
  DB : {
    host : "where_db_is_hosted",
    user : "bob",
    password : "54321"
  }
}
```
Following code in application will export respective property file which we want to 
use.

### Suppose the code is in environment.js
```js
process.argv.forEach(function (val, index, array) {
  let arg = val.split("=");
  if (arg.length > 0) {
    if (arg[0] === 'env') {
      let env = require('./' + arg[1] + '.json');
      module.exports = env;
    }
  }
});
```

We give arguments to the application like following
```js
node app.js env=dev
```

if we are using process manager like forever than it as simple as
forever `start app.js env=dev` How to use the configuration file
```js
let env= require("environment.js");
```