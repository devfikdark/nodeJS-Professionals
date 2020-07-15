## Section 20.1: http server

A basic example of **HTTP server**.

Write following code in `http_server.js file`:

```js
let http = require('http');
let httpPort = 3000;

http.createServer(handler).listen(httpPort, start_callback);

function handler(req, res) {
  let clientIP = req.connection.remoteAddress;
  let connectUsing = req.connection.encrypted ? 'SSL' : 'HTTP';

  console.log('Request received: '+ connectUsing + ' ' + req.method + ' ' + req.url); 
  console.log('Client IP: ' + clientIP);
  
  res.writeHead(200, "OK", {'Content-Type': 'text/plain'});
  res.write("OK");
  res.end();
  return;
}

function start_callback(){
  console.log('Start HTTP on port ' + httpPort)
}
```
### then from your http_server.js location run this command:
- node http_server.js (**Example Output**)
  - Request received: HTTP GET /favicon.ico
  - Client IP: ::1
