## Section 23.4: Using HTTPS

The minimal setup for an HTTPS server in Node.js would be something like this :
```js
let https = require('https');
let fs = require('fs');

let httpsOptions = {
  key: fs.readFileSync('path/to/server-key.pem'),
  cert: fs.readFileSync('path/to/server-crt.pem')
};

let app = function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}

https.createServer(httpsOptions, app).listen(4433);
```

If you also want to support http requests, you need to make just this small 
modification:
```js
let http = require('http');
let https = require('https');
let fs = require('fs');

let httpsOptions = {
  key: fs.readFileSync('path/to/server-key.pem'),
  cert: fs.readFileSync('path/to/server-crt.pem')
};

let app = function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}

http.createServer(app).listen(8888);
https.createServer(httpsOptions, app).listen(4433);
```