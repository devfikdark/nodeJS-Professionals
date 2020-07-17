## Section 35.2: Use JS es6 on your NodeJS app

### Prerequisites:
- Check out the new es6 features at http://es6-features.org - it may clarify to you if you really intend to use it on your next NodeJS app
- Check the compatibility level of your node version at http://node.green
- If all is ok - let's code on!

Here is a very short sample of a simple hello world app with JS es6

```js
'use strict'
class Program
{
  constructor()
  {
    this.message = 'hello es6 :)';
  }

  print()
  {
    setTimeout(() =>
    {
      console.log(this.message);
      this.print();
    }, Math.random() * 1000);
  }
}

new Program().print();
```

So.. till now we defined our class.. time to use it:

```js
new Program().print();
```

Which is truly **equals** to:

```js
var prog = new Program(); // define a new object of type 'Program'
prog.print(); // use the program to print itself
```