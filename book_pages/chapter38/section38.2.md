## Section 38.2: POST api using Express

Following example create POST api using Express . This example is similar to GET 
example except the use of **body-parser** that parses the post data and add it to 
req.body, but if you use `express.json()`, it's work similer to body-parser.

**Example**
```js
var express = require('express');
var app = express();
// for parsing the body in POST request
var bodyParser = require('body-parser');
var users =[
  {
    id: 1,
    name: "Jinnat Morol",
    age : 24,
    email: "morolswediu@gmail.com"
  }
];

// 1st way
app.use(express.json());

// 2nd way
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// GET /api/users
app.get('/api/users', function(req, res){
return res.json(users);
});
/* POST /api/users
{
  "user": {
    "id": 3,
    "name": "Test User",
    "age" : 20,
    "email": "test@test.com"
  }
}
*/

app.post('/api/users', function (req, res) {
  var user = req.body.user;
  users.push(user);
  return res.send('User has been added successfully');
});

app.listen('3000', function(){
  console.log('Server listening on port 3000');
});
```