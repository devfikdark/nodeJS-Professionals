## Section 53.4: Read data

- **ECMA6:**

```js
User.findOne({
  name: 'stack'
}, (err, user) => {
  if (err) throw err;
  if (!user) {
    console.log('No user was found');
  } else {
    console.log('User was found');
  }
});
```

- **ECMA5.1:**

```js
User.findOne({
  name: 'stack'
}, function (err, user) {
  if (err) throw err;
  if (!user) {
    console.log('No user was found');
  } else {
    console.log('User was found');
  }
});
```