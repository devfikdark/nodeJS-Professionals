# Section 9.1: Line-by-line file reading

```js
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('text.txt')
});

// Each new line emits an event - every time the stream receives \r, \n, or \r\n
rl.on('line', (line) => {
  console.log(line);
});

rl.on('close', () => {
  console.log('Done reading file');
});
```