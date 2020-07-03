# Section 4.7: Determining the line count of a text file

```js
let readline = require('readline');
let fs = require('fs');

let file = 'path.to.file';
let linesCount = 0;

let rl = readline.createInterface({
  input: fs.createReadStream(file),
  output: process.stdout,
  terminal: false
});

rl.on('line', function (line) {
  linesCount++; // on each linebreak, add +1 to 'linesCount'
});

rl.on('close', function () {
  console.log(linesCount); // print the result when the 'close' event is called
});
```