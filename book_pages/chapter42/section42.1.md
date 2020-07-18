## Section 42.1: Web Server Frameworks

- **Express**

```js
let express = require('express');
let app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
```

- **Koa**

```js
let koa = require('koa');
let app = koa();

app.use(function *(next){
  let start = new Date;
  yield next;
  let ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(function *(){
  this.body = 'Hello World';
});

app.listen(3000);
```