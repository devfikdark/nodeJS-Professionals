## Section 40.1: Using an IIS Virtual Directory or Nested Application via `<appSettings>`

Using a Virtual Directory or Nested Application in IIS is a common scenario and most likely one that 
you'll want to take advantage of when using IISNode.

Lets create a Virtual Directory in our `<appSettings>`

```c#
<appSettings>
  <add key="virtualDirPath" value="/foo" />
</appSettings>
```

Within our Node.js App we can access the virtualDirPath setting

```js
console.log(process.env.virtualDirPath); // prints /foo
```

Now that we can use the `<appSettings>` element for configuration, lets take advantage of that and use it 
in our server code.

```js
// Access the virtualDirPath appSettings and give it a default value of '/'
// in the event that it doesn't exist or isn't set
var virtualDirPath = process.env.virtualDirPath || '/';

// We also want to make sure that our virtualDirPath
// always starts with a forward slash
if (!virtualDirPath.startsWith('/', 0))
  virtualDirPath = '/' + virtualDirPath;

// Setup a route at the index of our app
server.get(virtualDirPath, (req, res) => {
  return res.status(200).send('Hello World');
});

// We can use the virtualDirPath with our static resources as well

// Public Directory
server.use(express.static(path.join(virtualDirPath, 'public')));

// Bower
server.use('/bower_components', express.static(
  path.join(virtualDirPath, 'bower_components')
));

// Lets put all of that together
const express = require('express');
const server = express();
const port = process.env.PORT || 3000;

// Access the virtualDirPath appSettings and give it a default value of '/'
// in the event that it doesn't exist or isn't set
var virtualDirPath = process.env.virtualDirPath || '/';

// We also want to make sure that our virtualDirPath
// always starts with a forward slash
if (!virtualDirPath.startsWith('/', 0))
  virtualDirPath = '/' + virtualDirPath;

// Public Directory
server.use(express.static(path.join(virtualDirPath, 'public')));

// Bower
server.use('/bower_components', express.static(
  path.join(virtualDirPath, 'bower_components')
));

// Setup a route at the index of our app
server.get(virtualDirPath, (req, res) => {
  return res.status(200).send('Hello World');
});

server.listen(port, () => {
  console.log(`Listening on ${port}`);
});
```