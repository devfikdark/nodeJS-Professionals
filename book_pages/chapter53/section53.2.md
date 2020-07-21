## Section 53.2: Model

- **(ECMA 6)**

```js
import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  name: String,
  password: String
});
const User = mongoose.model('User', userSchema);
export default User;
```

- **(ECMA 5.1)**

```js
var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  name: String,
  password: String
});
var User = mongoose.model('User', userSchema);
module.exports = User
```