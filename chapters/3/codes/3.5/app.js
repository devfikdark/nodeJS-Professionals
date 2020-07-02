var express = require('express');
var cors = require('cors'); // Use cors module for enable Cross-origin resource sharing
var app = express();

app.use(cors()); // for all routes
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  /*** 1st Way ****/
  var info = {
    'string_value': 'Morol',
    'number_value': 171
  }
  res.json(info);

  /*** 2nd Way ****/
  /* 
    res.send(JSON.stringify({
      string_value: 'Morol',
      number_value: 171
    })); 
  */

  /*** 3rd Way ****/
  /* 
    res.status(200).json(info) 
  */
});

app.listen(port, function() {
  console.log('Node.js listening on port ' + port)
});

/*
http://localhost:3000/ 

{
  string_value: "Morol",
  number_value: 171
}

*/