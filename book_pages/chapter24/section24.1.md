# Section 24.1: Connect to MongoDB Using Mongoose

First, install Mongoose with:
- npm install mongoose

Then, add it to ***server.js*** as dependencies:
```js
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// Next, create the database schema and the name of the collection:
let schemaName = new Schema({
  request: String,
  time: Number
  }, {
  collection: 'collectionName'
});
```
Create a model and connect to the database:
```js
let Model = mongoose.model('Model', schemaName);
mongoose.connect('mongodb://localhost:27017/dbName');
```

Next, start MongoDB and run server.js using **node server.js**

To check if we have successfully connected to the database, we can use the events open , error from the
mongoose.connection object.
```js
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
```