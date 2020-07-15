## Section 16.1: Handling Exception In Node.Js

### Node.js has 3 basic ways to handle exceptions/errors:

- try-catch block
- error as the first argument to a callback
- emit an error event using eventEmitter

**try-catch** is used to catch the exceptions thrown from the synchronous code 
execution. If the caller (or the caller's caller, ...) used try/catch, then they can 
catch the error. If none of the callers had try-catch than the program crashes.

If using try-catch on an async operation and exception was thrown from callback of 
async method than it will not get caught by try-catch. To catch an exception from 
async operation callback, it is preferred to use promises.

### Example to understand it better
```js
// ** Example - 1 **
function doSomeSynchronousOperation(req, res) {
  if(req.body.username === ''){
    throw new Error('User Name cannot be empty');
  }
  return true;
}

// calling the method above
try {
  // synchronous code
  doSomeSynchronousOperation(req, res)
}
catch(e) {
  //exception handled here
  console.log(e.message);
}

// ** Example - 2 **
function doSomeAsynchronousOperation(req, res, cb) {
  // imitating async operation
  return setTimeout(function(){
    cb(null, []);
  },1000);
}

try {
  // asynchronous code
  doSomeAsynchronousOperation(req, res, function(err, rs){
    throw new Error("async operation exception");
  });
} catch(e) {
  // Exception will not get handled here
  console.log(e.message);
// The exception is unhandled and hence will cause application to break
}
```

**callbacks** are mostly used in Node.js as callback delivers an event asynchronously. 
The user passes you a function (the callback), and you invoke it sometime later when 
the asynchronous operation completes. The usual pattern is that the callback is 
invoked as a callback(err, result), where only one of err and result is non-null,
depending on whether the operation succeeded or failed.
```js
function doSomeAsynchronousOperation(req, res, callback) {
  setTimeout(function(){
    return callback(new Error('User Name cannot be empty'));
  }, 1000);
  return true;
}

doSomeAsynchronousOperation(req, res, function(err, result) {
  if (err) {
    //exception handled here
    console.log(err.message);
  }
  //do some stuff with valid data
});
```
**emit** For more complicated cases, instead of using a callback, the function itself 
can return an EventEmitter object, and the caller would be expected to listen for 
error events on the emitter.
```js
const EventEmitter = require('events');

function doSomeAsynchronousOperation(req, res) {
  let myEvent = new EventEmitter();
  
  // runs asynchronously
  setTimeout(function(){
    myEvent.emit('error', new Error('User Name cannot be empty'));
  }, 1000);
  return myEvent;
}

// Invoke the function
let event = doSomeAsynchronousOperation(req, res);

event.on('error', function(err) {
  console.log(err);
});

event.on('done', function(result) {
  console.log(result); // true
});
```