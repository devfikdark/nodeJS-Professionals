## Section 45.1: Build a simple blog

- `npm install --save-dev metalsmith metalsmith-in-place handlebars`

Create a file called **build.js** at the root of your project folder, containing the 
following:

```js
let metalsmith = require('metalsmith');
let handlebars = require('handlebars');
let inPlace = require('metalsmith-in-place');

Metalsmith(__dirname)
  .use(inPlace('handlebars'))
  .build(function(err) {
    if (err) throw err;
    console.log('Build finished!');
  });
```

Create a folder called src at the root of your project folder. Create **index.html** 
in src, containing the following:

```js
---
title: My awesome blog
---
{{ title }}
```

Running node build.js will now build all files in src. After running this command, 
you'll have index.html in your build folder, with the following contents:

```html
<h1>My awesome blog</h1>
```