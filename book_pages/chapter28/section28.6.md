## Section 28.6: Update a document

Find a document with the property { greetings: 'Hellu' } and change it to { greetings: 'Whut?' }
```js
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, function (err, db) {
  if (err) throw new Error(err);
  db.collection('myCollection')
    .updateOne(
      { // Update method 'updateOne'
        greetings: "Hellu" 
      },
      { $set: { greetings: "Whut?" }},
      function (err, result) {
        if (err) throw new Error(err);
        db.close(); // Don't forget to close the connection when you are done
      }
    );
});
```

### Collection method updateOne()

```js
db.collection(collection).updateOne(filter, update, options. callback);
```

| Parameter | Type | Description |
|:---------:|:----:|:-----------:|
| filter | object | Specifies the selection critera |
| update | object | Specifies the modifications to apply |
| options | object | (optional) Optional settings (default: null) |
| callback | Function | Function to be called when the operation is done |


### The callback function takes two arguments

- `err` : **Error** - If an error occurs the err argument will be defined
- `db` : object - The **MongoDB instance**