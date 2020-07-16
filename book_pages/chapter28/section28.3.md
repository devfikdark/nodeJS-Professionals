## Section 28.3: Connect to MongoDB

Connect to MongoDB, print '**Connected**!' and close the connection.

```js
const MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, function(err, db) { // MongoClient method 'connect'
  if (err) throw new Error(err);
  console.log("Connected!");
  db.close(); // Don't forget to close the connection when you are done
});
```

### MongoClient method Connect()

```js
MongoClient.connect(url, options, callback);
```

| Argument | Type | Description |
|:--------:|:----:|:-----------:|
| url | string | A string specifying the server ip/hostname, port and database. |
| options | object | (optional) Optional settings (default: null) |
| callback | Function | Function to be called when the connection attempt is done |
  

### The callback function takes two arguments

- `err` : **Error** - If an error occurs the err argument will be defined
- `db` : object - The **MongoDB instance**