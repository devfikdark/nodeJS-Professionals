# Section 21.1: Read Data from TextFile with Streams

I/O in node is asynchronous, so interacting with the disk and network involves passing 
callbacks to functions. You might be tempted to write code that serves up a file from 
disk like this:
```js
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  fs.readFile(__dirname + '/data.txt', function (err, data) {
    res.end(data);
  });
});

server.listen(3000);
```

```js
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  var stream = fs.createReadStream(__dirname + '/data.txt');
  stream.pipe(res);
});

server.listen(3000);
```