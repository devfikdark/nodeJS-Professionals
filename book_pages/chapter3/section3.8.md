## Section 3.8: Error Handling

### Basic Error Handling

By default, Express will look for an 'error' view in the /views directory to render. 
Simply create the 'error' view and place it in the views directory to handle errors. 
Errors are written with the error message, status and stack trace, for

- example: 
```js
html
  body
      h1= message
      h2= error.status
      p= error.stack
```

### Advanced Error Handling
Define your error-handling middleware functions at the very end of the middleware 
function stack. These have four arguments instead of three (err, req, res, next) 
for example:

```js
// app.js
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  //pass error to the next matching route.
  next(err);
});

// handle error, print stacktrace
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});
```

You can define several error-handling middleware functions, just as you would with 
regular middleware functions.
