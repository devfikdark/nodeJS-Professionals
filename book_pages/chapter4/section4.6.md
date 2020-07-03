# Section 4.6: Checking if a file or a directory exists

### Asynchronously

```js
const fs = require('fs');

fs.stat('path/to/file', function(err) {
  if (!err) {
    console.log('file or directory exists');
  }
  else if (err.code === 'ENOENT') {
    console.log('file or directory does not exist');
  }
});
```

### Synchronously
here, we must wrap the function call in a `try/catch` block to handle error.

```js
try {
  fs.statSync('path/to/file');
  console.log('file or directory exists');
}
catch (err) {
  if (err.code === 'ENOENT') {
    console.log('file or directory does not exist');
  }
}
```