## Section 28.5: Read a collection

Get all documents in the collection 'myCollection' and print them to the console.

```js
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, function (err, db) {
  if (err) throw new Error(err);
  let cursor = db.collection('myCollection').find(); // Read method 'find'
  
  cursor.each(function (err, doc) {
    if (err) throw new Error(err);
    if (doc != null) {
      console.log(doc); // Print all documents
    } else {
      db.close(); // Don't forget to close the connection when you are done
    }
  });
});
```

### Collection method find()

```js
db.collection(collection).find();
```

| Argument | Type | Description |
|:--------:|:----:|:-----------:|
| collection | string | A string specifying the collection |