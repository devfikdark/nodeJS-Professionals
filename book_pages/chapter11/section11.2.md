## Section 11.2: Get the names of the events that are subscribed to

The function `EventEmitter.eventNames()` will return an array containing the names of the events currently
subscribed to.

```js
let EventEmitter = require("events");
class MyEmitter extends EventEmitter{};

let emitter = new MyEmitter();
emitter
  .on("message", () => { //listen for message event
    console.log("a message was emitted!");
  })
  .on("message", () => { //listen for message event
    console.log("this is not the right message");
  })
  .on("data", function(){ //listen for data event
    console.log("a data just occurred!!");
  }
);

console.log(emitter.eventNames()); //=> ["message","data"]
emitter.removeAllListeners("data");//=> removeAllListeners to data event
console.log(emitter.eventNames()); //=> ["message"]
```