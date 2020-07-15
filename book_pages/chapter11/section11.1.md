## Section 11.1: Basics

Event Emitters are built into Node, and are for pub-sub, a pattern where a publisher will emit events, 
which subscribers can listen and react to. In Node jargon, publishers are called Event Emitters, and they 
emit events, while subscribers are called listeners, and they react to the events.

```js
// Require events to start using them
let EventEmitter = require('events').EventEmitter;

// Dogs have events to publish, or emit
class Dog extends EventEmitter {};
class Food {};

let myDog = new Dog();

// When myDog is chewing, run the following function
myDog.on('chew', (item) => {
  if (item instanceof Food) {
    console.log('Good dog');
  } else {
    console.log(`Time to buy another ${item}`);
  }
});

myDog.emit('chew', 'shoe'); // Will result in console.log('Time to buy another shoe')

const bacon = new Food();
myDog.emit('chew', bacon); // Will result in console.log('Good dog')
```

In the above example, the dog is the publisher/EventEmitter, while the function that checks the item was 
the subscriber/listener. You can make more listeners too:
```js
myDog.on('bark', () => {
  console.log('WHO\'S AT THE DOOR?');
  // Panic
});
```
There can also be multiple listeners for a single event, and even remove listeners:
```js
myDog.on('chew', takeADeepBreathe);
myDog.on('chew', calmDown);

// Undo the previous line with the next one:
myDog.removeListener('chew', calmDown);
```
If you want to listen to a event only once, you can use:
```js
myDog.once('chew', pet);
```