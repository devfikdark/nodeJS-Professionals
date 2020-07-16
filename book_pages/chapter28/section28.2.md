## Section 28.2: Simple connect, using promises

```js
const MongoDB = require('mongodb');
MongoDB.connect('mongodb://localhost:27017/databaseName')
  .then(function(database) {
    const collection = database.collection('collectionName');
    return collection.insert({key: 'value'});
  })
  .then(function(result) {
    console.log(result);
  }
);
```