# Section 3.9: Getting info from the request

To get info from the requesting url (notice that req is the request object in the 
handler function of routes). Consider this 
route definition `/settings/:user_id` and this particular 
example `/settings/32135?field=name`

```js
// get the full path
req.originalUrl // => /settings/32135?field=name

// get the user_id param
req.params.user_id // => 32135

// get the query value of the field
req.query.field // => 'name'

// You can also get headers of the request, like this
req.get('Content-Type') // "text/plain"
```

To simplify getting other info you can use middlewares. For example, to get the body 
info of the request, you can use the body-parser middleware, which will transform 
raw request body into usable format.


**1st way**
```js
var app = require('express')();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
```

**2nd way**
```js
let express = require('express');
let app = express();
app.use(express.json()); // for parsing application/json
```
Now suppose a request like this

- PUT /settings/32135
```json
{
  "name": "Morol"
}
```


You can access the posted name like this
```js
req.body.name // "Morol"
```

In a similar way, you can access cookies from the request, you also need a middleware 
like cookie-parser
```js
req.cookies.name // "Morol"
```
