# Section 15.1: Spawning a new process to execute a command

To spawn a new process in which you need unbuffered output (e.g. long-running 
processes which might print output over a period of time rather than printing and 
exiting immediately), use `child_process.spawn()` .

This method spawns a new process using a given command and an array of arguments. The 
return value is an instance of `ChildProcess` , which in turn provides the `stdout` 
and `stderr` properties. Both of those streams are instances of stream.Readable .

The following code is equivalent to using running the `command ls -lh /usr`.
```js
let spawn = require('child_process').spawn;
let ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
```
Another example command:
```js
zip -0vr "archive" ./image.png

// Might be written as:
spawn('zip', ['-0vr', '"archive"', './image.png']);
```