# Section 16.2: Unhanded Exception Management

Because Node.js runs on a single process uncaught exceptions are an issue to be aware 
of when developing applications. Silently Handling Exceptions Most of the people let 
node.js server(s) silently swallow up the errors. Silently handling the exception
```js
process.on('uncaughtException', function (err) {
  console.log(err);
});
```
This is **bad**, it will **work**.

### Returning to Initial state
In case of an "`uncaughtException`" it is good to restart the server and return it to 
its initial state, where we know it will work. Exception is logged, application is 
terminated but since it will be running in a container that will make sure that the 
server is running we will achieve restarting of the server ( returning to the initial 
working state ). Installing the forever ( or other CLI tool to make sure that node 
server runs continuously )
- ***npm install forever -g***

### Starting the server in forever
- ***forever start app.js***

Reason why is it started and why we use forever is after the server is terminated 
forever process will start the server again. Restarting the server
```js
process.on('uncaughtException', function (err) {
  console.log(err);
  // some logging mechanisam
  // ....
  process.exit(1); // terminates process
});
```
On a side note there was a way also to handle exceptions with Clusters and Domains.