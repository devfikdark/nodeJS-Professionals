# Section 3.1: Getting Started

You will first need to create a directory, access it in your shell and install 
Express using npm by running npm `install express --save` Create a file and name 
it app.js and add the following code which creates a new Express server and adds 
one endpoint to it ( /ping ) with the app.get method:

```js
const express = require('express');
const app = express();

app.get('/ping', (request, response) => {
  response.send('Hi, Morol');
});

app.listen(3000, 'localhost');
```

To run your script use the following command in your shell:
- > **node app.js**

- http://localhost:3000/ping
  - Hi, Morol