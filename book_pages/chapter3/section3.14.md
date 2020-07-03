# Section 3.14: Named routes in Django-style

One big problem is that valuable named routes is not supported by Express out of the 
box. Solution is to install supported third-party package, for 
example express-reverse:

**npm install express-reverse**


### Plug it in your project:
```js
var app = require('express')();
require('express-reverse')(app);

// Then use it like:
app.get('test', '/hello', function(req, res) {
  res.end('Hello Morol');
});
```

The downside of this approach is that you cant use route Express module as shown in 
Advanced router usage. The workaround is to pass your app as a parameter to you 
router factory:

```js
require('./middlewares/routing')(app);

// And use it like:
module.exports = (app) => {
  app.get('test', '/hello', function(req, res) {
    res.end('Hello Morol');
  });
};
```