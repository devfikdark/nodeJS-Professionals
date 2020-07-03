Modules can be split across many .js files in the same folder. An example in a my_module folder:

### function_one.js

```js
module.exports = function() {
  return 1;
}
```

### function_two.js

```js
module.exports = function() {
  return 2;
}
```

### index.js
```js
exports.f_one = require('./function_one.js');
exports.f_two = require('./function_two.js');
```

A module like this one is used by referring to it by the folder name:
```js
var split_module = require('./my_module');
```

Please note that if you required it by omitting ./ or any indication of a path to a 
folder from the require function argument, Node will try to load a module from the 
node_modules folder. Alternatively you can create in the same folder a package.json 
file with these contents:

```js
{
  "name": "my_module",
  "main": "./your_main_entry_point.js"
}
```