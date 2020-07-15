## Section 5.4: Every module injected only once

NodeJS executes the module only the first time you require it. Any further require 
functions will re-use the same Object, thus not executing the code in the module 
another time. Also Node caches the modules first time they are loaded using require. 
This reduces the number of file reads and helps to speed up the application.

### myModule.js

```js
console.log(123);
exports.var1 = 4;
```

### index.js
```js
let a=require('./myModule') ; // Output 123
let b=require('./myModule') ; // No output

console.log(a.var1) ; // Output 4
console.log(b.var1) ; // Output 4

a.var2 = 5 ;
console.log(b.var2) ; // Output 5
```