# Section 5.1: Creating a hello-world.js module

Node provides the module.exports interface to expose functions and variables to other 
files. The most simple way to do so is to export only one object (function or 
variable), as shown in the first example.

### hello-world.js

```js
module.exports = function(subject) {
  console.log('Hello ' + subject);
};
```

If we don't want the entire export to be a single object, we can export functions and 
variables as properties of the exports object. The three following examples all 
demonstrate this in slightly different ways :

- **hello-venus.js** : the function definition is done separately then added as a property of module.exports
- **hello-jupiter.js** : the functions definitions are directly put as the value of properties of module.exports
- h**ello-mars.js** : the function definition is directly declared as a property of exports which is a short version of module.exports

### hello-venus.js

```js
function hello(subject) {
  console.log('Venus says Hello ' + subject);
}
module.exports = {
  hello: hello
};
```

### hello-jupiter.js

```js
module.exports = {
  hello: function(subject) {
    console.log('Jupiter says hello ' + subject);
  },
  bye: function(subject) {
    console.log('Jupiter says goodbye ' + subject);
  }
};
```

### hello-mars.js

```js
exports.hello = function(subject) {
  console.log('Mars says Hello ' + subject);
};
```

### Loading module with directory name
We have a directory named hello which includes the following files:

**index.js**
```js
// hello/index.js
module.exports = function(){
  console.log('Hej');
};
```

**main.js**
```js
// hello/main.js
// We can include the other files we've defined by using the `require()` method
let hw = require('./hello-world.js');
let hm = require('./hello-mars.js');
let hv = require('./hello-venus.js');
let hj = require('./hello-jupiter.js');
let hu = require('./index.js');

// Because we assigned our function to the entire `module.exports` object, we
// can use it directly
hw('World!'); // outputs "Hello World!"
// In this case, we assigned our function to the `hello` property of exports, so we must
// use that here too
hm.hello('Solar System!'); // outputs "Mars says Hello Solar System!"

// The result of assigning module.exports at once is the same as in hello-world.js

hv.hello('Milky Way!'); // outputs "Venus says Hello Milky Way!"
hj.hello('Universe!'); // outputs "Jupiter says hello Universe!"
hj.bye('Universe!'); // outputs "Jupiter says goodbye Universe!"

hu(); //output 'hej'
```