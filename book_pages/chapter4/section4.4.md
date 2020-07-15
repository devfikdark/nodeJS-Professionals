## Section 4.4: Reading from a file synchronously

For any file operations, you will need the filesystem module:
```js
const fs = require('fs');
```

### Reading a String
`fs.readFileSync` behaves similarly to `fs.readFile` , but does not take a callback as 
it completes synchronously and therefore blocks the main thread. Most node.js 
developers prefer the asynchronous variants which will cause virtually no delay in the 
program execution. If an encoding option is specified, a string will be returned, 
otherwise a Buffer will be returned.

```js
// Read a string from another file synchronously
let content;
try {
  content = fs.readFileSync('text.txt', { encoding: 'utf8' });
  console.log(content); // Hi Morol
} catch(err) {
  // An error occurred
  console.error(err);
}
```