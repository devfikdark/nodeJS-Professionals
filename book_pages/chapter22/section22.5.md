# Section 22.5: Using dierent Properties/Configuration for different environments like dev, qa, staging etc

Large scale applications often need different properties when running on different 
environments. we can achieve this by passing arguments to NodeJs application and using 
same argument in node process to load specific environment property file.
Suppose we have two property files for different environment.

- **dev.json**
```js
{
  "PORT": 3000,
  "DB": {
    "host": "localhost",
    "user": "bob",
    "password": "12345"
  }
}
```
- **qa.json**
```js
{
  "PORT": 3001,
  "DB": {
    "host": "where_db_is_hosted",
    "user": "bob",
    "password": "54321"
  }
}
```
Following code in application will export respective property file which we want to 
use.
```js
process.argv.forEach(function (val) {
  var arg = val.split("=");
  if (arg.length > 0) {
    if (arg[0] === 'env') {
      var env = require('./' + arg[1] + '.json');
      exports.prop = env;
    }
  }
});
```

We give arguments to the application like following
- node app.js **env=dev**

If we are using process manager like forever than 
it as simple as forever start app.js **env=dev**