# Section 23.2: Preventing Cross Site Request Forgery (CSRF)

**CSRF** is an attack which forces end user to execute unwanted actions on a web 
application in which he/she is currently authenticated.

It can happen because cookies are sent with every request to a website - even when 
those requests come from a different site. We can use csurf module for creating csrf 
token and validating it.

### Example
```js
let express = require('express')
let cookieParser = require('cookie-parser')

//for cookie parsing
let csrf = require('csurf')

//csrf module
let bodyParser = require('body-parser')

//for body parsing
// setup route middlewares
let csrfProtection = csrf({ cookie: true })
let parseForm = bodyParser.urlencoded({ extended: false })

// create express app
let app = express()

// parse cookies
app.use(cookieParser())

app.get('/form', csrfProtection, function(req, res) {
  // generate and pass the csrfToken to the view
  res.render('send', { csrfToken: req.csrfToken() })
})

app.post('/process', parseForm, csrfProtection, function(req, res) {
  res.send('data is being processed')
})
```
So, when we access GET /form , it will pass the csrf token csrfToken to the view.

### Handlebar templates
```html
<form action="/process" method="POST">
  <input type="hidden" name="_csrf" value="{{csrfToken}}">
  Name: <input type="text" name="name">
  <button type="submit">Submit</button>
</form>
```

### Jade (pug) templates
```js
form(action="/process" method="post")
  input(type="hidden", name="_csrf", value=csrfToken)
  span Name:
  input(type="text", name="name", required=true)
  br
  input(type="submit")
```

### Ejs templates
```html
<form action="/process" method="POST">
  <input type="hidden" name="_csrf" value="<%= csrfToken %>">
  Name: <input type="text" name="name">
  <button type="submit">Submit</button>
</form>
```