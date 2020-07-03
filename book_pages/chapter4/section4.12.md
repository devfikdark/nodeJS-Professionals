# Section 4.12: Changing contents of a text file

Example. It will be replacing the word email to a name in a text file text.txt with simple RegExp replace('Hello, 'Hi')

```js
let fs = require('fs');

fs.readFile('text.txt', 'utf-8', function(err, data) {
  if (err) throw err;
  var newValue = data.replace('Hello', 'Hi');
  fs.writeFile('output.txt', newValue, 'utf-8', function(err, data) {
    if (err) throw err;
    console.log('Done!');
  })
});
```