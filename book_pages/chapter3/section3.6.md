## Section 3.6: Serving static files

When building a webserver with Express it's often required to serve a combination 
of dynamic content and static files.
For example, you may have `index.html` and `script.js` which are static files kept 
in the file system.
It is common to use folder named `public` to have static files. In this case the folder structure may look like:

```js
project root
├── server.js
├── package.json
└── public
    ├── index.html
    └── script.js
```
### This is how to configure Express to serve static files:
```js
const express = require('express');
const app = express();
app.use(express.static('public'));
```
will make the resources available under the /static/ prefix.

### Multiple folders
It is possible to define multiple folders at the same time:
```js
app.use(express.static('public'));
app.use(express.static('images'));
app.use(express.static('files'));
```
When serving the resources Express will examine the folder in definition order. 
In case of files with the same name, the one in the first matching folder will 
be served.
