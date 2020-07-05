# Section 15.2: Spawning a shell to execute a command

To run a command in a shell, in which you required buffered output (i.e. it is not a 
stream), use `child_process.exec`. For example, if you wanted to run the command `cat *.js file | wc -l` , with no options, that would look like this:

```js
let exec = require('child_process').exec;

exec('cat *.js file | wc -l', (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
```

The function accepts up to three parameters:
```js
child_process.exec(command[, options][, callback]);
```

```js
const execSync = require('child_process').execSync;
const stdout = execSync('cat *.js file | wc -l');
console.log(`stdout: ${stdout}`);
```