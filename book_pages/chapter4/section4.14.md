# Section 4.14: Reading a file into a Buer using streams

While reading content from a file is already `asynchronous` using the `fs.readFile()` 
method, sometimes we want to get the data in a Stream versus in a simple callback. 
This allows us to pipe this data to other locations or to process it as it comes in 
versus all at once at the end.

```js
const fs = require('fs');

// Store file data chunks in this array
let chunks = [];

// We can use this variable to store the final data
let fileBuffer;

// Read file into stream.Readable
let fileStream = fs.createReadStream('text.txt');

// An error occurred with the stream
fileStream.once('error', (err) => {
  // Be sure to handle this properly!
  console.error(err);
});

// File is done being read
fileStream.once('end', () => {
  // create the final data Buffer from data chunks;
  fileBuffer = Buffer.concat(chunks);
  // Of course, you can do anything else you need to here, like emit an event!
  console.log(fileBuffer); // Ex: <Buffer 48 65 6c 6c 6f 20 4d 6f 72 6f 6c 21>
});

// Data is flushed from fileStream in chunks,
// this callback will be executed for each chunk
fileStream.on('data', (chunk) => {
  chunks.push(chunk); // push data chunk to array
  // We can perform actions on the partial data we have so far!
});
```