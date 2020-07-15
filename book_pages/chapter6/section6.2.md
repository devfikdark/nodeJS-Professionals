## Section 6.2: Using a simple module in node.js

A module encapsulates related code into a single unit of code. When creating a module, 
this can be interpreted as moving all related functions into a file. Now lets see an 
example. Imagine all files are in same directory:

**printer.js**

```js
exports.printHelloWorld = function (){
  console.log("Hello World!!!");
}
```

### Another way of using modules:

**animals.js**

```js
module.exports = {
  lion: function() {
    console.log("ROAARR!!!");
  }
};
```

Run this file by going to your directory and typing: node app.js
**app.js**

```js
//require('./path/to/module.js') node which module to load
let printer = require('./printer');
let animals = require('./animals');

printer.printHelloWorld(); //prints "Hello World!!!"
animals.lion(); //prints "ROAARR!!!"
```