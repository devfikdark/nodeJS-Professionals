## Section 25.6: async.series(To handle events one by one)

In async.series, all the functions are executed in **series** and the consolidated outputs of each function is passed to the **final callback**.

```js
let async = require('async');

async.series([
    function (callback) {
      console.log('First Execute..');
      callback(null, 'userPersonalData');
    },
    function (callback) {
      console.log('Second Execute.. ');
      callback(null, 'userDependentData');
    }
  ],
  function (err, result) {
    console.log(result);
  }
);
```

**Output**: First Execute.. Second Execute.. ['userPersonalData','userDependentData']