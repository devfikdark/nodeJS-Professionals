# Section 3.17: Error handling

```js
app.get('/path/:id(\\d+)', function (req, res, next) { // please note: "next" is passed
  if (req.params.id == 0) // validate param
    return next(new Error('Id is 0')); // go to first Error handler, see below
  
  // Catch error on sync operation
  let data;
  try {
    data = JSON.parse('/file.json');
  } catch (err) {
    return next(err);
  }

  // If some critical error then stop application
  if (!data)
    throw new Error('Smth wrong');

  // If you need send extra info to Error handler
  // then send custom error (see Appendix B)
  if (smth)
    next(new MyError('smth wrong', arg1, arg2));

  // Finish request by res.render or res.end
  res.status(200).end('OK');
});



// Be sure: order of app.use have matter
// Error handler
app.use(function(err, req, res, next) {
  if (smth-check, e.g. req.url != 'POST')
    return next(err); // go-to Error handler 2.

  console.log(req.url, err.message);

  if (req.xhr) // if req via ajax then send json else render error-page
    res.json(err);
  else
    res.render('error.html', {error: err.message});
});


// Error handler 2
app.use(function(err, req, res, next) {
  // do smth here e.g. check that error is MyError
  if (err instanceof MyError) {
    console.log(err.message, err.arg1, err.arg2);
  }
  res.end();
});


// Appendix A
// "In Express, 404 responses are not the result of an error,
// so the error-handler middleware will not capture them."
// You can change it.
app.use(function(req, res, next) {
  next(new Error(404));
});


// Appendix B
// How to define custom error
let util = require('util');

function MyError(message, arg1, arg2) {
  this.message = message;
  this.arg1 = arg1;
  this.arg2 = arg2;
  Error.captureStackTrace(this, MyError);
}

util.inherits(MyError, Error);
MyError.prototype.name = 'MyError';
```