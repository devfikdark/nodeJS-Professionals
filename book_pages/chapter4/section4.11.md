# Section 4.11: Writing to a file using writeFile or writeFileSync

```js
let fs = require('fs');

// Save the string "Hello Morol!" in a file called "text.txt" in
// the directory "/tmp" using the default encoding (utf8).
// This operation will be completed in background and the callback
// will be called when it is either done or failed.
fs.writeFile('text.txt', 'Hello Morol!', function(err) {
  // If an error occurred, show it and return
  if(err) return console.error(err);
  // Successfully wrote to the file!
});

// Save binary data to a file called "binary.txt" in the current
// directory. Again, the operation will be completed in background.
var buffer = new Buffer([ 0x48, 0x65, 0x6c, 0x6c, 0x6f ]);
fs.writeFile('binary.txt', buffer, function(err) {
  // If an error occurred, show it and return
  if(err) return console.error(err);
  // Successfully wrote binary contents to the file!
});
```

`fs.writeFileSync` behaves similarly to fs.writeFile , but does not take a callback as 
it completes synchronously and therefore blocks the main thread. Most node.js 
developers prefer the asynchronous variants which will cause virtually no delay in the 
program execution.

Note: Blocking the main thread is bad practice in node.js. Synchronous function should
only be used when debugging or when no other options are availables.

```js
// Write a string to another file and set the file mode to 0755
try {
  fs.writeFileSync('sync.txt', 'Morol', { mode: 0o755 });
} catch(err) {
  // An error occurred
  console.error(err);
}
```