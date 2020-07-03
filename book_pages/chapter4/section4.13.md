# Section 4.13: Deleting a file using unlink or unlinkSync

### Delete a file asynchronously:

```js
var fs = require('fs');

fs.unlink('/path/to/file.txt', function(err) {
  if (err) throw err;
  console.log('file deleted');
});
```


### Delete a file synchronously:

```js
var fs = require('fs');

fs.unlinkSync('/path/to/file.txt');
console.log('file deleted');
```