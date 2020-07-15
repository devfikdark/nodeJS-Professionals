## Section 4.3: Copying files by piping streams

This program copies a file using readable and a writable stream with the pipe() function provided by the stream
class

```js
const fs = require('fs');

/*
Create readable stream to file in current directory named 'text.txt'
Use utf8 encoding
Read the data in 16-kilobyte chunks
*/
let readable = fs.createReadStream(
  __dirname + '/text.txt', 
  { 
    encoding: 'utf8', 
    highWaterMark: 16 * 1024 
  }
);
// create writable stream
let writable = fs.createWriteStream(__dirname + '/output.txt');
// use pipe to copy readable to writable
readable.pipe(writable);
```