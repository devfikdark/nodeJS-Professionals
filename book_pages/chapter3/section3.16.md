# Section 3.16: Using middleware and the next callback

Express passes a next callback to every route handler and middleware function that 
can be used to break logic for single routes across multiple handlers. Calling 
next() with no arguments tells express to continue to the next matching middleware 
or route handler. Calling next(err) with an error will trigger any error handler 
middleware. Calling next('route') will bypass any subsequent middleware on the 
current route and jump to the next matching route. This allows domain logic to 
be decoupled into reusable components that are self-contained, simpler to test, 
and easier to maintain and change.

**Multiple matching routes** 

Requests to `/api/foo` or to `/api/bar` will run the initial handler to look up the 
member and then pass control to the actual handler for each route.

```js
app.get('/api', function(req, res, next) {
  // Both /api/foo and /api/bar will run this
  lookupMember(function(err, member) {
  if (err) return next(err);
    req.member = member;
    next();
  });
});

app.get('/api/foo', function(req, res, next) {
  // Only /api/foo will run this
  doSomethingWithMember(req.member);
});

app.get('/api/bar', function(req, res, next) {
  // Only /api/bar will run this
  doSomethingDifferentWithMember(req.member);
});
```


**Error handler**

Error handlers are middleware with the signature function(err, req, res, next) . 
They could be set up per route (e.g. app.get('/foo', function(err, req, res, next) ) 
but typically, a single error handler that renders an error page is sufficient

```js
app.get('/foo', function(req, res, next) {
  doSomethingAsync(function(err, data) {
  if (err) return next(err);
    renderPage(data);
  });
});

// In the case that doSomethingAsync return an error, this special
// error handler middleware will be called with the error as the
// first parameter.
app.use(function(err, req, res, next) {
  renderErrorPage(err);
});
```

**Middleware**

Each of the functions above is actually a middleware function that is run whenever 
a request matches the route defined, but any number of middleware functions can be 
defined on a single route. This allows middleware to be defined in separate files 
and common logic to be reused across multiple routes.

```js
app.get('/bananas', function(req, res, next) {
  getMember(function(err, member) {
    if (err) return next(err);
    // If there's no member, don't try to look
    // up data. Just go render the page now.
    if (!member) return next('route');
    // Otherwise, call the next middleware and fetch
    // the member's data.
    req.member = member;
    next();
    });
  }, function(req, res, next) {
    getMemberData(req.member, function(err, data) {
      if (err) return next(err);
      // If this member has no data, don't bother
      // parsing it. Just go render the page now.
      if (!data) return next('route');
      // Otherwise, call the next middleware and parse
      // the member's data. THEN render the page.
      req.member.data = data;
      next();
    });
  }, function(req, res, next) {
      req.member.parsedData = parseMemberData(req.member.data);
      next();
  }
);

app.get('/bananas', function(req, res, next) {
  renderBananas(req.member);
});
```

In this example, each middleware function would be either in it's own file or in a 
variable elsewhere in the file so that it could be reused in other routes.
