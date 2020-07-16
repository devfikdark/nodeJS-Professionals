## Section 28.4: Insert a document

```js
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, function (err, db) {
  if (err) throw new Error(err);
  
  db.collection('myCollection').insertOne({ // Insert method 'insertOne'
    "myFirstDocument": {
      "greetings": "Hellu",
      "farewell": "Bye"
    }
  }, function (err, result) {
    if (err) throw new Error(err);
   
    console.log("Inserted a document into the myCollection collection!");
    db.close(); // Don't forget to close the connection when you are done
  });
});
```

### Collection method insertOne()

```js
db.collection(collection).insertOne(document, options, callback)
```

| Argument | Type | Description |
|:--------:|:----:|:-----------:|
| collection | string | A string specifying the collection |
| document | object | The document to be inserted into the collection |
| options | object | (optional) Optional settings (default: null) |
| callback | Function | Function to be called when the insert operation is done |
 

### The callback function takes two arguments

- `err` : **Error** - If an error occurs the err argument will be defined
- `result` : object - An object containing **details** about the **insert operation**