## Section 42.2: Command Line Interface Frameworks

- **Commander.js**

```js
let program = require('commander');

program
  .version('0.0.1')

program
  .command('hi')
  .description('initialize project configuration')
  .action(function(){
    console.log('Hi my Friend!!!');
  });

program
  .command('bye [name]')
  .description('initialize project configuration')
  .action(function(name){
    console.log('Bye ' + name + '. It was good to see you!');
  });

program
  .command('*')
  .action(function(env){
    console.log('Enter a Valid command');
    terminate(true);
  });

program.parse(process.argv);
```

- **Vorpal.js**

```js
const vorpal = require('vorpal')();

vorpal
  .command('foo', 'Outputs "bar".')
  .action(function(args, callback) {
    this.log('bar');
    callback();
  });

vorpal
  .delimiter('myapp$')
  .show();
```