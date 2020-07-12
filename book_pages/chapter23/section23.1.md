# Section 23.1: SSL/TLS in Node.js

```js
let https = require('https');
let fs = require('fs');

let options = {
  key: fs.readFileSync('privatekey.pem'),
  cert: fs.readFileSync('certificate.pem'),
  ca: [fs.readFileSync('1_ca.crt'), fs.readFileSync('2_ca.crt')]
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('Hi Morol\n');
}).listen(3000);
```