## Section 22.6: Taking advantage of clusters

A single instance of Node.js runs in a single thread. To take advantage of multi-core 
systems the user will sometimes want to launch a cluster of Node.js processes to 
handle the load.
```js
let cluster = require('cluster');
let numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  // In real life, you'd probably use more than just 2 workers,
  // and perhaps not put the master and worker in the same file.
  //
  // You can also of course get a bit fancier about logging, and
  // implement whatever custom logic you need to prevent DoS
  // attacks and other bad behavior.
  //
  // See the options in the cluster documentation.
  //
  // The important thing is that the master does very little,
  // increasing our resilience to unexpected errors.
  console.log('your server is working on ' + numCPUs + ' cores');
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('disconnect', function(worker) {
    console.error('disconnect!');
    //clearTimeout(timeout);
    cluster.fork();
  });
} else {
  require('./app.js');
}
```