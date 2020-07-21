## Section 53.1: Mongoose connection

Make sure to have mongodb running first! mongod --dbpath data/

- **package.json**
```js
"dependencies": {
  "mongoose": "^4.5.5",
}
```

- **server.js (ECMA 6)**
```js
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/stackoverflow-example');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error!'));
```

- **server.js (ECMA 5.1)**

```js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/stackoverflow-example');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error!'));
```