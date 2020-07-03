# Section 8.1: Hello World

**cluster.js**

```js
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });

} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  require('./server.js')();
}
```


**server.js**

```js
const http = require('http');

function startServer() {
  const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello Http');
  });
  server.listen(3000);
}

if(!module.parent) {
    // Start server if file is run directly
    startServer();
} else {
  // Export server, if file is referenced via cluster
  module.exports = startServer;
}
```

In this example, we host a basic web server, however, we spin up workers (child 
processes) using the built-in cluster module. The number of processes forker depend on 
the number of CPU cores available. This enables a Node.js application to take 
advantage of multi-core CPUs, since a single instance of Node.js runs in a single 
thread. The application will now share the `port 3000` across all the processes. Loads 
will automatically be distributed between workers using the Round-Robin method by 
default.
