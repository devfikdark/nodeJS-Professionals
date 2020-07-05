# Section 13.2: process.argv command line arguments

`process.argv` is an array containing the command line arguments. The first element will be node , the 
second element will be the name of the JavaScript file. The next elements will be any additional command 
line arguments.

### Code Example:
Output sum of all command line arguments `index.js`
```js
let sum = 0;
for (i = 2; i < process.argv.length; i++) {
  sum += Number(process.argv[i]);
}
console.log(sum);
```

### Usage Exaple:
```js
node index.js 2 5 6 7
```
**Output** will be 20