/*
In Express, you can define unified error handler for handling errors occurred in 
application. Define then handler at the end of all routes and logic code.

*/
// Example
var express = require('express');
var app = express();

// GET /names/Morol
app.get('/names/:name', function(req, res, next){
  if (req.params.name == 'Morol'){
    return res.send('Valid Name');
  } else{
    //pass to error handler
    next(new Error('Not valid name'));
  }
});


//error handler
app.use(function(err, req, res, next){
  console.log(err.stack); // e.g., Not valid name
  return res.status(500).send('Internal Server Occurred');
});

app.listen(3000);

/*
http://localhost:3000/names/Morol 
Output:
Valid Name

// Or

http://localhost:3000/names/Jinnatul 
Output:
Not valid name
Internal Server Occurred (500 status code)
*/