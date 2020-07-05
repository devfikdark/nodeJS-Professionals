# Section 14.2: Manually promisifying a callback

Sometimes it might be necessary to manually promisify a callback function. This could be for a case where 
the callback does not follow the standard `error-first` format or if additional logic is needed to 
promisify:

### Example with fs.exists(path, callback):
```js
let fs = require('fs');

let existsAsync = function(path) {
  return new Promise(function(resolve, reject) {
    fs.exists(path, function(exists) {
      // exists is a boolean
      if (exists) {
        // Resolve successfully
        resolve();
      } else {
        // Reject with error
        reject(new Error('path does not exist'));
      }
    });
  }
);

// Use as a promise now
existsAsync('/path/to/some/file').then(function() {
    console.log('file exists!');
  }).catch(function(err) {
    // file does not exist
    console.error(err);
  }
);
```