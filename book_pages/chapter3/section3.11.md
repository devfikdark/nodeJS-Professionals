## Section 3.11: Hook: How to execute code before any req and after any res

`app.use()` and middleware can be used for "before" and a combination of the close 
and finish events can be used for "after".

```js
app.use(function (req, res, next) {
  function afterResponse() {
    // actions after response
    res.removeListener('finish', afterResponse);
    res.removeListener('close', afterResponse);
  }
  // action before request
  res.on('finish', afterResponse);
  res.on('close', afterResponse);
  
  // eventually calling `next()`
  next();
});
  
app.use(app.router);
```
An example of this is the logger middleware, which will append to the log after the 
response by default. Just make sure this "middleware" is used before app.router as 
order does matter.
