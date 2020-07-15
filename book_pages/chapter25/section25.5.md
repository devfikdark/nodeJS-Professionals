## Section 25.5: async.times(To handle for loop in better way)

```js
function recursiveAction(n, callback)
{
  //do whatever want to do repeatedly
  callback(err, result);
}

async.times(5, function(n, next) {
    recursiveAction(n, function(err, result) {
      next(err, result);
    });
  }, function(err, results) {
  // we should now have 5 result
    }
);
```

This is called in **parallel**. When we want to call it one at a time, use: `async.timesSeries`