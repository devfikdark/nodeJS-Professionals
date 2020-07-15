## Section 1.2: Hello World command line

```js
let username = process.argv[2];

if (!username) {
  // Extract the filename
  let appName = process.argv[1].split(require('path').sep).pop();
  console.error('Missing argument! Example: %s YOUR_NAME', appName);

  // An error will stop the
  process.exit(1);


}
// Print the message to the console.
console.log('Hello %s!', username);
```