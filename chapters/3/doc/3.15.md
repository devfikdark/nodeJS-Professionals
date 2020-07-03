# Section 3.15: Hello World

Here we create a basic hello world server using Express. Routes:
- '/'
- '/wiki'
- for rest will give "404" , i.e. page not found.

```js
let port = process.env.PORT || 3000;
let app = require('express')();

app.listen(port);

app.get('/',
  (req, res) => 
  res.send('Hello Morol!')
);

app.get('/wiki',
  (req, res) => 
  res.send('This is wiki page.')
);

app.use((req, res) => 
  res.send('404-Page Not Found')
);
```

**Note**: We have put 404 route as the last route as Express stacks routes in order 
and processes them for each request sequentially.
