# Section 24.3: Save Data to MongoDB using Mongoose and Express.js Routes

**Setup**

First, install the necessary packages with:
- npm install express cors mongoose

**Code**

Then, add dependencies to your server.js file, create the database schema and the name of the collection, 
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
});

let Model = mongoose.model('Model', schemaName);
mongoose.connect('mongodb://localhost:27017/dbName');

let port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('Node.js listening on port ' + port);
});
```
Now add Express.js routes that we will use to write the data:
```js
app.get('/save/:query', cors(), function(req, res) {
  let query = req.params.query;
  let savedata = new Model({
    'request': query,
    'time': Math.floor(Date.now() / 1000) // Time of save the data in unix timestamp format
  }).save(function(err, result) {
    if (err) throw err;
    if(result) {
      res.json(result)
    }
  })
})
```

Here the query letiable will be the <query> parameter from the incoming HTTP request, which will be saved 
to MongoDB:
```js
let savedata = new Model({
    'request': query,
  /*
  If an error occurs while trying to write to MongoDB, you will receive an error message on the console. If all is successful, you will see the saved data in JSON format on the page.
  */
  }).save(function(err, result) {
      if (err) throw err;
      if(result) {
        res.json(result)
      }
    });
```

Now, you need to start MongoDB and run your server.js file using node server.js Usage To use this to save 
data, go to the following URL in your browser:

- http://localhost:8080/save/<query>

Where <query> is the new request you wish to save.

**Example**:
- http://localhost:8080/save/JavaScript%20is%20Awesome

Output in JSON format:
```js
{
  __v: 0,
  request: "JavaScript is Awesome",
  time: 1469411348,
  _id: "57957014b93bc8640f2c78c4"
}
```