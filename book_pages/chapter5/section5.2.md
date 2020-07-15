## Section 5.2: Loading and using a module

A module can be "imported", or otherwise "required" by the require() function. For 
example, to load the http module that ships with Node.js, the following can be used:
```js
const http = require('http');
```

Aside from modules that are shipped with the runtime, you can also require modules 
that you have installed from npm, such as express. If you had already installed 
express on your system via npm install express , you could simply write:
```js
const express = require('express');
```

You can also include modules that you have written yourself as part of your 
application. In this case, to include a file named lib.js in the same directory as 
current file:
```js
const mylib = require('./lib');
```

Note that you can omit the extension, and .js will be assumed. Once you load a module, 
the variable is populated with an object that contains the methods and properties 
published from the required file. A full example:

```js
const http = require('http');
// The `http` module has the property `STATUS_CODES`
console.log(http.STATUS_CODES[404]); // outputs 'Not Found'

// Also contains `createServer()`
http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<html><body>Module Test</body></html>');
  res.end();
}).listen(3000);
```