When you deploy your app to a (Node.js-specific) hosted environment, this environment usually offers a `PORT` - `environment variable` that you can use to run your server on. Changing the port number to `process.env.PORT` allows you to access the application.

- For example
```
http.createServer(function(request, response) {
  // your server code
}).listen(process.env.PORT);
```
- Also, if you would like to access this offline while debugging, you can use this:
```
http.createServer(function(request, response) {
  // your server code
}).listen(process.env.PORT || 3000);
```

- where 3000 is the offline port number.