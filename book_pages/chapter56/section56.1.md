## Section 56.1: Deliver HTML at specified path

- **Folder structure**
```
project root
|
|____server.js
|____views
    |
    |__index.html
    |
    |__page1.html
```

- **server.js**

```js
var express = require('express');
var path = require('path');
var app = express();

// deliver index.html if no file is requested
app.get("/", function (request, response) {
  response.sendFile(path.join(__dirname, 'views/index.html'));
});

// deliver page1.html if page1 is requested
app.get('/page1', function(request, response) {
  response.sendFile(path.join(__dirname, 'views', 'page1.html', function(error) {
    if (error) {
      console.log(err);
      response.end(JSON.stringify({error:"page not found"}));
    }
  });
});

app.listen(8080);
```