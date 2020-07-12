# Section 24.2: Find Data in MongoDB Using Mongoose, Express.js Routes and $text Operator

**Setup**
First, install the necessary packages with:
- npm install express cors mongoose

**Code**
Then, add dependencies to server.js , create the database schema and the name of the collection, create an
Express.js server, and connect to MongoDB:
```js
let express = require('express');
let cors = require('cors'); // We will use CORS to enable cross origin domain requests.
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let app = express();

let schemaName = new Schema({
  request: String,
  time: Number
  }, {
  collection: 'collectionName'
});

let Model = mongoose.model('Model', schemaName);
mongoose.connect('mongodb://localhost:27017/dbName');

let port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('Node.js listening on port ' + port);
});

// Now add Express.js routes that we will use to query the data:

app.get('/find/:query', cors(), function(req, res) {
  let query = req.params.query;
  Model.find({
    'request': query
    }, function(err, result) {
      if (err) throw err;
      if (result) {
        res.json(result)
      } else {
        res.send(JSON.stringify({
          error : 'Error'
        }))
      }
    })
})
```

Assume that the following documents are in the collection in the model:
```js
{
  "_id" : ObjectId("578abe97522ad414b8eeb55a"),
  "request" : "JavaScript is Awesome",
  "time" : 1468710551
},
{
  "_id" : ObjectId("578abe9b522ad414b8eeb55b"),
  "request" : "JavaScript is Awesome",
  "time" : 1468710555
},
{
  "_id" : ObjectId("578abea0522ad414b8eeb55c"),
  "request" : "JavaScript is Awesome",
  "time" : 1468710560
}
```