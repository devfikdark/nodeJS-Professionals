## Section 31.1: Nunjucks

**Install** - `npm i nunjucks`

**app.js**

```js
let express = require ('express');
let nunjucks = require('nunjucks');
let app = express();

app.use(express.static('/public'));

// Apply nunjucks and add custom filter and function (for example).
let env = nunjucks.configure(['views/'], { // set folders with templates
  autoescape: true,
  express: app
});

env.addFilter('myFilter', function(obj, arg1, arg2) {
  console.log('myFilter', obj, arg1, arg2);
  // Do smth with obj
  return obj;
});

env.addGlobal('myFunc', function(obj, arg1) {
  console.log('myFunc', obj, arg1);
  // Do smth with obj
  return obj;
});

app.get('/', function(req, res){
  res.render('index.html', {title: 'Main page'});
});

app.get('/foo', function(req, res){
  res.locals.smthlet = 'This is Sparta!';
  res.render('foo.html', {title: 'Foo page'});
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000...');
});
```

**/views/index.html**

```html
<html>
  <head>
    <title>Nunjucks example</title>
  </head>
  <body>
    {% block content %}
    {{title}}
    {% endblock %}
  </body>
</html>
```

**/views/foo.html**

```html
{% extends "index.html" %}

{# This is comment #}
{% block content %}
  <h1>{{title}}</h1>
  {# apply custom function and next build-in and custom filters #}
  {{ myFunc(smthlet) | lower | myFilter(5, 'abc') }}
{% endblock %}
```