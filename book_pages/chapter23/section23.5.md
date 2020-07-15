## Section 23.5: Secure express.js 3 Application

The configuration to make a secure connection using express.js (Since version 3):

```js
let fs = require('fs');
let http = require('http');
let https = require('https');

let privateKey = fs.readFileSync('sslcert/server.key', 'utf8');
let certificate = fs.readFileSync('sslcert/server.crt', 'utf8');

// Define your key and cert
let credentials = {key: privateKey, cert: certificate};
let express = require('express');
let app = express();

// your express configuration here
let httpServer = http.createServer(app);
let httpsServer = https.createServer(credentials, app);

// Using port 3000 for http and 4000 for https
httpServer.listen(3000);
httpsServer.listen(4000);
```
In that way you provide express middleware to the native http/https server