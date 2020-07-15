## Section 3.3: Modular express application

To make express web application modular use router factories:

**Example-1**
```js
// Module: (greet.js)
let express = require('express');

module.exports = function(options = {}) { // Router factory
  let router = express.Router();
  router.get('/greet', (req, res, next) => {
    res.end(options.greeting);
  });
  return router;
};

// Application: (app.js)
let express = require('express');
let greetMiddleware = require('./greet.js');

express()
  .use('/api/v1/', greetMiddleware({ greeting:'Hi Morol' }))
  .listen(3000);

//  This will make your application modular, customisable and your code reusable.
```

- http://localhost:3000/api/v1/greet
  - Hi, Morol



**Example-2**
```js
// Module: (greet.js)
const express = require('express');

module.exports = function(options = {}) { // Router factory
  const router = express.Router();
  // Get controller
  const {service} = options;
  router.get('/greet', (req, res, next) => {
    res.end(
      service.createGreeting(req.query.name || 'Stranger')
    );
  });
  return router;
};

// Application: (app.js)
const express = require('express');
const greetMiddleware = require('./greet.js');

class GreetingService {
  constructor(greeting = 'Hello') {
    this.greeting = greeting;
  }
  createGreeting(name) {
    return `${this.greeting}, ${name}!`;
  }
}

express()
  .use('/api/v1/service1', greetMiddleware({
    service: new GreetingService('Hello'),
  }))
  .use('/api/v1/service2', greetMiddleware({
    service: new GreetingService('Hi'),
  }))
  .listen(8080);
```


- http://localhost:3000/api/v1/service1/greet?name=World
  - Hello, World
- http://localhost:3000/api/v1/service2/greet?name=Morol
  - Hi, Morol
 