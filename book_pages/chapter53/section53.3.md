## Section 53.3: Insert data

- **ECMA 6:**

```js
const user = new User({
  name: 'Stack',
  password: 'Overflow',
}) ;

user.save((err) => {
  if (err) throw err;
  console.log('User saved!');
});
```

- **ECMA5.1:**

```js
var user = new User({
  name: 'Stack',
  password: 'Overflow',
}) ;

user.save(function (err) {
  if (err) throw err;
  console.log('User saved!');
});
```