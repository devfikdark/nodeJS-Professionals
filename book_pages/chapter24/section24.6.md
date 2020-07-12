# Section 24.6: Indexes in models

MongoDB supports secondary indexes. In Mongoose, we define these indexes within our schema. Defining 
indexes at schema level is necessary when we need to create compound indexes.

**Mongoose Connection**
```js
let strConnection = 'mongodb://localhost:27017/dbName';
let db = mongoose.createConnection(strConnection)
```
Creating a basic schema
```js
let Schema = require('mongoose').Schema;
let usersSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

let usersModel = db.model('users', usersSchema);
module.exports = usersModel;
```
By default, mongoose adds two new fields into our model, even when those are not defined in the model. 
Those fields are:
- _id
- __v

If you don't want an _id added to your schema at all, you may disable it using this option.
```js
let usersSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  }, {
    _id: false
  }
);
```

You can easy **disable** this field in the model configuration:
```js
let usersSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  }, {
    versionKey: false
  }
);
```

### Compound indexes

We can create another indexes besides those Mongoose creates.
```js
usersSchema.index({username: 1 });
usersSchema.index({email: 1 });
```
In these case our model have two more indexes, one for the field username and another for email field. 
But we can create compound indexes.
```js
usersSchema.index({username: 1, email: 1 });
```