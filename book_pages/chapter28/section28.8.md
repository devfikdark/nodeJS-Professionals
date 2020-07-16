## Section 28.8: Delete multiple documents

Delete ALL documents with a 'farewell' property set to 'okay'.

```js
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, function (err, db) {
  if (err) throw new Error(err);
  db.collection('myCollection').deleteMany(// MongoDB delete method 'deleteMany'
    { farewell: "okay" }, // Delete ALL documents with the property 'farewell: okay'
    function (err, result) {
      if (err) throw new Error(err);
      db.close(); // Don't forget to close the connection when you are done
    }
  );
});
```

### Collection method deleteMany()

```js
db.collection(collection).deleteMany(filter, options, callback);
```

| Parameter | Type | Description |
|:---------:|:----:|:-----------:|
| filter | object | A document specifying the selection critera |
| options | object | (optional) Optional settings (default: null) |
| callback | Function | Function to be called when the operation is done |


### The callback function takes two arguments

- `err` : **Error** - If an error occurs the err argument will be defined
- `db` : object - The **MongoDB instance**