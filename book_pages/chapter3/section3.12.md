## Section 3.12: Setting cookies with cookie-parser

The following is an example for setting and reading cookies using the cookie-parser 
module:

```js
let express = require('express');
let cookieParser = require('cookie-parser'); // module for parsing cookies
let app = express();

app.use(cookieParser());

// Setting Cookies
app.get('/setcookie', function(req, res){
  res.cookie('username', 'Morol', { age: 24, httpOnly: true });
  return res.send('Cookie has been set');
});

// Getting Cookies
app.get('/getcookie', function(req, res) {
  let username = req.cookies['username'];
  if (username) {
    return res.send(username);
  }
  return res.send('No cookie found');
});

app.listen(3000);
```