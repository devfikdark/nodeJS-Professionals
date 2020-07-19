## Section 49.1: Simple example to Connect mongoDB from Node.JS

```js
MongoClient.connect('mongodb://localhost:27017/myNewDB',function (err,db) {
  if(err)
    console.log("Unable to connect DB. Error: " + err)
  else
    console.log('Connected to DB');
  db.close();
});
```