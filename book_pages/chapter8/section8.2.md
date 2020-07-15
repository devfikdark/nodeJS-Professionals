## Section 8.2: Cluster Example

A single instance of Node.js runs in a single thread. To take advantage of multi-core 
systems, application can be launched in a `cluster of Node.js processes` to handle the 
load. The `cluster module` allows you to easily `create child processes` that all 
`share server ports`. Following example create the worker child process in main 
process that handles the load across multiple cores.

**Example**

```js
let cluster = require('cluster');
let http = require('http');
let numCPUs = require('os').cpus().length; //number of CPUS

if (cluster.isMaster) {
  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
    //creating child process
  }

  //on exit of cluster
  cluster.on('exit', (worker, code, signal) => {
    if (signal) {
      console.log(`worker was killed by signal: ${signal}`);
    } else if (code !== 0) {
      console.log(`worker exited with error code: ${code}`);
    } else {
      console.log('worker success!');
    }
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(3000);
}
```