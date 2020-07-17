## Section 38.1: GET api using Express

Node.js apis can be easily constructed in Express web framework. Following example 
creates a simple **GET api** for listing all users.

**Example**

```js
let express = require('express');
let app = express();

let users =[{
  id: 1,
  name: "John Doe",
  age : 23,
  email: "john@doe.com"
}];

// GET /api/users
app.get('/api/users', function(req, res){
  return res.json(users);
  //return response as JSON
});

app.listen('3000', function(){
  console.log('Server listening on port 3000');
});
```