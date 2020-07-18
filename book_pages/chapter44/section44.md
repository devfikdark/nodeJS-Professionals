## Chapter 44: Using WebSocket's with Node.JS

### Section 44.1: Installing WebSocket's

- `npm install --save ws`

**or** 

- Inside your package.json using:
```js
"dependencies": {
  "ws": "*"
},
```

### Section 44.2: Adding WebSocket's to your file's

```js
let ws = require('ws');
```

### Section 44.3: Using WebSocket's and WebSocket Server's

```js
let WebSocket = require("ws");
let ws = new WebSocket("ws://host:8080/OptionalPathName);
```

**Or**

```js
let WebSocketServer = require("ws").Server;
let ws = new WebSocketServer({port: 8080, path: "OptionalPathName"});
```

### Section 44.4: A Simple WebSocket Server Example

```js
let WebSocketServer = require('ws').Server,
let wss = new WebSocketServer({ port: 8080 }); 
// If you want to add a path as well, use path: "PathName"

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
  ws.send('something');
});
```