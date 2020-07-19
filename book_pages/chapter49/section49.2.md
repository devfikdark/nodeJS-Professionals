## Section 49.2: Simple way to Connect mongoDB with core Node.JS

```js
let MongoClient = require('mongodb').MongoClient;

//connection with mongoDB
MongoClient.connect("mongodb://localhost:27017/MyDb", function (err, db) {
  //check the connection
  if(err){
    console.log("connection failed.");
  }else{
  console.log("successfully connected to mongoDB.");
  }
});
```