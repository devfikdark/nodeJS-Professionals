## Section 3.2: Basic routing

```js
// First create an express app:
const express = require('express');
const app = express();

//Then you can define routes like this:
app.get('/someUri', function (req, res, next) {});

/*
That structure works for all HTTP methods, and expects a path as the first argument, 
and a handler for that path, which receives the request and response objects. So, 
for the basic HTTP methods, these are the routes

*/
```

**1st**
```js
// GET www.domain.com/myPath
app.get('/myPath', function (req, res, next) {});

// POST www.domain.com/myPath
app.post('/myPath', function (req, res, next) {});

// PUT www.domain.com/myPath
app.put('/myPath', function (req, res, next) {});

// DELETE www.domain.com/myPath
app.delete('/myPath', function (req, res, next) {});
```

**2nd**
```js
/*
If you want to define the same behavior for a route and all
HTTP methods, you can use:

*/
app.all('/myPath', function (req, res, next) {});

// or
app.use('/myPath', function (req, res, next) {});

// or (* wildcard will route for all paths)
app.use('*', function (req, res, next) {});
```

**3rd**
```js
// You can chain your route definitions for a single path
app.route('/myPath')
.get(function (req, res, next) {})
.post(function (req, res, next) {})
.put(function (req, res, next) {});
```

**4th**
```js
/*
You can also add functions to any HTTP method. They will run before the final 
callback and take the parameters (req, res, next) as arguments.
*/
app.get('/myPath', myFunction, function (req, res, next) {});
```

**5th**
```js
/*
Your final callbacks can be stored in an external file to avoid putting too 
much code in one file:
*/
// (Part-1) other.js
exports.doSomething = function(req, res, next) {/* do some stuff */};

// (Part-2) And then in the file containing your routes:
const other = require('./other.js');
app.get('/someUri', myFunction, other.doSomething);

// This will make your code much cleaner.
```