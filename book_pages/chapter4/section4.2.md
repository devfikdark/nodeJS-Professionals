# Section 4.2: Listing Directory Contents with readdir or readdirSync

```js
const fs = require('fs');

// Read the contents of the directory /usr/local/bin asynchronously.
// The callback will be invoked once the operation has either completed
// or failed.
fs.readdir('/usr/local/bin', (err, files) => {
  // On error, show it and return
  if(err) return console.error(err);
  // files is an array containing the names of all entries
  // in the directory, excluding '.' (the directory itself)
  // and '..' (the parent directory).
  // Display directory entries
  console.log(files.join(' '));
});
```
A synchronous variant is available as readdirSync which blocks the main thread and 
therefore prevents execution of asynchronous code at the same time. Most developers 
avoid synchronous IO functions in order to improve performance.

```js
let files;
try {
  files = fs.readdirSync('/var/tmp');
} catch(err) {
  // An error occurred
  console.error(err);
}
```
### Using a generator
```js
// Iterate through all items obtained via
// 'yield' statements
// A callback is passed to the generator function because it is required by
// the 'readdir' method
function run(gen) {
  var iter = gen((err, data) => {
    if (err) { iter.throw(err); }
    return iter.next(data);
  });
  iter.next();
};

const dirPath = '/usr/local/bin';

// Execute the generator function
run(function* (resume) {
  // Emit the list of files in the directory from the generator
  var contents = yield fs.readdir(dirPath, resume);
  console.log(contents); // [ 'create-react-app', 'nodemon' ]
});
```