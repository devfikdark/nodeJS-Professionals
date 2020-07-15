## Section 4.8: Reading a file line by line

```js
const readline = require('readline');
const fs = require('fs');

let file = 'path.to.file';

let rl = readline.createInterface({
  input: fs.createReadStream(file),
  output: process.stdout,
  terminal: false
});

rl.on('line', function (line) {
  console.log(line) // print the content of the line on each linebreak
});
```