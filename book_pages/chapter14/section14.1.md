# Section 14.1: Promisifying a callback

### Callback-based:
```js
db.notification.email.find({subject: 'promisify callback'}, (error, result) => {
  if (error) {
    console.log(error);
  }
  // normal code here
});
```

This uses bluebird's promisifyAll method to promisify what is conventionally 
callback-based code like above. `bluebird` will make a promise version of all the 
methods in the object, those promise-based methods names has Async appended to them:
```js
let email = bluebird.promisifyAll(db.notification.email);
email.findAsync({subject: 'promisify callback'}).then(result => {
  // normal code here

}).catch(console.error);
```

If only specific methods need to be promisified, just use its promisify:
```js
let find = bluebird.promisify(db.notification.email.find);
find({locationId: 69}).then(result => {
  // normal code here

}).catch(console.error);
```

There are some libraries (e.g., `MassiveJS`) that can't be promisified if the 
immediate object of the method is not passed on second parameter. In that case, just 
pass the immediate object of the method that need to be promisified on second 
parameter and enclosed it in context property.
```js
let find = bluebird.promisify(db.notification.email.find, { context: db.notification.email });
find({locationId: 168}).then(result => {
// normal code here

}).catch(console.error);
```