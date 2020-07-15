## Section 21.3: Creating your own readable/writable stream

We will see stream objects being returned by modules like fs etc but what if we want 
to create our own streamable object.
To create Stream object we need to use the stream module provided by NodeJs
```js
let fs = require("fs");
let stream = require("stream").Writable;

/*
* Implementing the write function in writable stream class.
* This is the function which will be used when other stream is piped into this
* writable stream.
*/
stream.prototype._write = function(chunk, data){
  console.log(data);
}

let customStream = new stream();

fs.createReadStream("am1.js").pipe(customStream);

const Writable = require('stream').Writable;

class MyWritable extends Writable {
  constructor(options) {
    super(options);
  }

  _write(chunk, encoding, callback) {
    console.log(chunk);
  }
}
```