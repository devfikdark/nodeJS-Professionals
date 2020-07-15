## Section 25.4: Waterfall : dependent mono-tasking

async.waterfall(tasks, afterTasksCallback) will execute a set of tasks. Each task are 
executed **after another, and the result of a task is passed to the next task**. As 
`async.series()`, if a task **fails**, async stop the execution and call immediately 
the **main callback**.

When tasks are finished successfully, async call the "master" callback with all errors 
and all results of tasks.

```js
function getUserRequest(callback) {
  // We simulate the request with a timeout
  setTimeout(function() {
    let userResult = {
      name : 'Aamu'
    };
    callback(null, userResult);
  }, 500);
}

function getUserFriendsRequest(user, callback) {
  // Another request simulate with a timeout
  setTimeout(function() {
    let friendsResult = [];
    if (user.name === "Aamu"){
      friendsResult = [
        {
          name : 'Alice'
        }, 
        {
          name: 'Bob'
        }
      ];
    }
    callback(null, friendsResult);
  }, 500);
}

async.waterfall([
    getUserRequest,
    getUserFriendsRequest
  ],
  function(err, results) {
    if (err) {
      return console.error(err);
    }
    console.log(JSON.stringify(results));
  }
);
```

**Result**: results contains the second callback parameter of the last function of the waterfall, which is friendsResult in that case.