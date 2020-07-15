## Section 24.7: find data in mongodb using promises

**Setup**

First, install the necessary packages with:
- npm install express cors mongoose

**Code**

Then, add dependencies to ***server.js*** , create the database schema and the name of the collection, 
create an Express.js server, and connect to MongoDB:
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
  }
);

let Model = mongoose.model('Model', schemaName);
mongoose.connect('mongodb://localhost:27017/dbName');

let port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('Node.js listening on port ' + port);
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

// Now add Express.js routes that we will use to query the data:
app.get('/find/:query', cors(), function(req, res, next) {
  let query = req.params.query;
  Model.find({
    'request': query
  })
  .exec() //remember to add exec, queries have a .then attribute but aren't promises
  .then(function(result) {
    if (result) {
      res.json(result)
    } else {
      next() //pass to 404 handler
    }
  })
  .catch(next) //pass to error handler
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

And the goal is to find and display all the documents containing "JavaScript is Awesome" under the 
"request" key. For this, start MongoDB and run server.js with **node server.js** :

**Usage**
To use this to find data, go to the following URL in a browser:
- http://localhost:8080/find/<query>

Where <query> is the search query.
**Example**:
- http://localhost:8080/find/JavaScript%20is%20Awesome

**Output**:
```js
[
  {
    _id: "578abe97522ad414b8eeb55a",
    request: "JavaScript is Awesome",
    time: 1468710551,
    __v: 0
  },
  {
    _id: "578abe9b522ad414b8eeb55b",
    request: "JavaScript is Awesome",
    time: 1468710555,
    __v: 0
  },
  {
    _id: "578abea0522ad414b8eeb55c",
    request: "JavaScript is Awesome",
    time: 1468710560,
    __v: 0
  }
]
```