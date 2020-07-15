## Section 25.1: Parallel : multi-tasking

async.parallel(tasks, afterTasksCallback) will execute a set of tasks in parallel and 
**wait the end of all tasks** (reported by the 
call of **callback** function). 

When tasks are finished, async call the main callback with all errors and all results 
of tasks.

**npm package name :** `npm i async`

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

async.parallel([
    shortTimeFunction,
    mediumTimeFunction,
    longTimeFunction
  ],
  function(err, results) {
    if (err) {
      return console.error(err);
    }
    console.log(results);
});

Result : ["resultOfShortTime", "resultOfMediumTime", "resultOfLongTime"] .
```

### Call async.parallel() with an object

```js
async.parallel({
    short: shortTimeFunction,
    medium: mediumTimeFunction,
    long: longTimeFunction
  },
  function(err, results) {
    if (err) {
      return console.error(err);
    }
    console.log(results);
});

Result : {short: "resultOfShortTime", medium: "resultOfMediumTime", long: "resultOfLongTime"}.
```

### Resolving multiple values

```js
async.parallel({
    short: function shortTimeFunction(callback) {
      setTimeout(function() {
        callback(null, 'resultOfShortTime1', 'resultOfShortTime2');
      }, 200);
    },

    medium: function mediumTimeFunction(callback) {
      setTimeout(function() {
        callback(null, 'resultOfMediumTime1', 'resultOfMeiumTime2');
      }, 500);
    }
  },

  function(err, results) {
    if (err) {
      return console.error(err);
    }
    console.log(results);
});
```

Result :
```js
{
  short: ["resultOfShortTime1", "resultOfShortTime2"],
  medium: ["resultOfMediumTime1", "resultOfMediumTime2"]
}
```