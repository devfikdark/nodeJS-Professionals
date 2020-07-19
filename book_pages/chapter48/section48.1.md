## Section 48.1: The Node.js philosophy

- a - "Small is beautiful"
- b - "Make each program do one thing well."

```js
let events = require('events');
let eventEmitter = new events.EventEmitter();

let ringBell = function ringBell()
{
  console.log('tring tring tring');
}

eventEmitter.on('doorOpen', ringBell);
eventEmitter.emit('doorOpen');
```