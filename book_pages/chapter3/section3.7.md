# Section 3.7: Adding Middleware

Middleware functions are functions that have access to the `request object (req)`, 
the `response object (res)`, and the next middleware function in the application’s 
request-response cycle. Middleware functions can execute any code, make changes 
to res and req objects, end response cycle and call `next middleware`.
Very common example of middleware is cors module. To add CORS support, simply 
install it, require it and put this line:
```js
app.use(cors());

// Or another common middleware
app.use(express.json());

```

before any routers or routing functions.