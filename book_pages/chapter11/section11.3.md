## Section 11.3: HTTP Analytics through an Event Emitter

### In the HTTP server code (e.g. server.js ):

```js
let EventEmitter = require('events')
let serverEvents = new EventEmitter();

// Set up an HTTP server
let http = require('http')
let httpServer = http.createServer((request, response) => {
  // Handler the request...
  // Then emit an event about what happened
  serverEvents.emit('request', request.method, request.url)
});

// Expose the event emitter
module.exports = serverEvents
```

### In supervisor code (e.g. supervisor.js ):
```js
let server = require('./server.js');

// Since the server exported an event emitter, we can listen to it for changes:
server.on('request', (method, url) => {
  console.log(`Got a request: ${method} ${url}`)
});
```

Whenever the server gets a request, it will emit an event called request which the supervisor is 
listening for, and then the supervisor can react to the event.
