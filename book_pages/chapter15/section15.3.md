## Section 15.3: Spawning a process to run an executable

If you are looking to run a file, such as an executable, use child_process.execFile . 
Instead of spawning a shell like `child_process.exec` would, it will directly create a 
new process, which is slightly more efficient than running a command. The function can 
be used like so:
```js
const execFile = require('child_process').execFile;

const child = execFile('node', ['--version'], (err, stdout, stderr) => {
  if (err) {
    throw err;
  }
  console.log(stdout);
});
```

Unlike child_process.exec , this function will accept up to four parameters, where the 
second parameter is an array of arguments you'd like to supply to the executable:
```js
child_process.execFile(file[, args][, options][, callback]);
```

Otherwise, the options and callback format are otherwise identical to child_process.
exec . The same goes for the 

### synchronous version of the function:
```js
const execFileSync = require('child_process').execFileSync;
const stdout = execFileSync('node', ['--version']);
console.log(stdout);
```