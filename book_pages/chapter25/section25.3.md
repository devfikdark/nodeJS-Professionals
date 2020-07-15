## Section 25.3: Series : independent mono-tasking

async.series(tasks, afterTasksCallback) will execute a set of tasks. Each task are 
executed **after another. If a task fails, async stops immediately the execution and jump into the main callback.**

When tasks are finished successfully, async call the "master" callback with all errors 
and all results of tasks.

```js
function shortTimeFunction(callback) {
  setTimeout(function() {
    callback(null, 'resultOfShortTime');
  }, 200);
}

function mediumTimeFunction(callback) {
  setTimeout(function() {
    callback(null, 'resultOfMediumTime');
  }, 500);
}

function longTimeFunction(callback) {
  setTimeout(function() {
    callback(null, 'resultOfLongTime');
  }, 1000);
}

async.series([
    mediumTimeFunction,
    shortTimeFunction,
    longTimeFunction
  ],
  function(err, results) {
    if (err) {
      return console.error(err);
    }
    console.log(results);
  }
);

Result : ["resultOfMediumTime", "resultOfShortTime", "resultOfLongTime"].
```

### Call async.series() with an object

```js
async.series({
    short: shortTimeFunction,
    medium: mediumTimeFunction,
    long: longTimeFunction
  },
  function(err, results) {
    if (err) {
      return console.error(err);
    }
    console.log(results);
  }
);

Result : {short: "resultOfShortTime", medium: "resultOfMediumTime", long: "resultOfLongTime"} .
```