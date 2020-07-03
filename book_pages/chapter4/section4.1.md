# Section 4.1: Asynchronously Read from Files

### Use the filesystem module for all file operations:
```js
const fs = require('fs');
```

### With Encoding
In this example, read hello.txt from the directory /tmp . This operation will be 
completed in the background and the callback occurs on completion or failure:

```js
fs.readFile('text.txt', { encoding: 'utf8' }, (err, content) => {
  // If an error occurred, output it and return
  if(err) return console.error(err);
  // No error occurred, content is a string
  console.log(content); // Hi, Morol
});
```

### Without Encoding
Read the binary file binary.txt from the current directory, asynchronously in the  
background. Note that we do not set the `encoding` option - this prevents Node.js from
decoding the contents into a string:

```js
fs.readFile('text.txt', (err, binaryContent) => {
  // If an error occurred, output it and return
  if(err) return console.error(err);
  // No error occurred, content is a Buffer, output it in
  // hexadecimal representation.
  console.log(binaryContent.toString('hex')); 
  /*
    --> text.txt = 101
    --> 313031
  */
});
```

### Relative paths
Keep in mind that, in general case, your script could be run with an arbitrary current
working directory. To address a file relative to the current script, use `__dirname`
or `__filename` :

```js
fs.readFile(path.resolve(__dirname, 'someFile'), (err, binaryContent) => {
  //Rest of Function
}
```