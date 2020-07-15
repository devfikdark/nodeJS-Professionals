## Section 3.5: JSON API with ExpressJS

```js
let express = require('express');
let cors = require('cors'); // Use cors module for enable Cross-origin resource sharing
let app = express();

app.use(cors()); // for all routes
let port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  /*** 1st Way ****/
  let info = {
    'string_value': 'Morol',
    'number_value': 171
  }
  res.json(info);

  /*** 2nd Way ****/
  res.send(JSON.stringify({
    string_value: 'Morol',
    number_value: 171
  })); 

  /*** 3rd Way ****/
  res.status(200).json(info); 
});

app.listen(port, function() {
  console.log('Node.js listening on port ' + port)
});
```


- http://localhost:3000/ 
```js
{
  string_value: "Morol",
  number_value: 171
}
```