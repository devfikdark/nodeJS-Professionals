## Section 39.1: Graceful Shutdown - SIGTERM

By using `server.close()` and `process.exit()`, we can catch the server exception 
and do a graceful **shutdown**.

```js
let http = require('http');

let server = http.createServer(function (req, res) {
  setTimeout(function () { //simulate a long request
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
  }, 4000);
}).listen(9090, function (err) {
  console.log('listening http://localhost:9090/');
  console.log('pid is ' + process.pid);
});

process.on('SIGTERM', function () {
  server.close(function () {
    process.exit(0);
  });
});
```