## Section 9.2: Prompting user input via CLI

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name?', (name) => {
  console.log(`Hello ${name}!`);
  rl.close();
});
```