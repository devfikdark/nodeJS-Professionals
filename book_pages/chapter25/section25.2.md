## Section 25.2: async.each(To handle array of data effciently)

```js
function createUser(userName, callback)
{
  //create user in db
  callback(null)//or error based on creation
}

let arrayOfData = ['Morol', 'Jinnatul', 'Tom'];

async.each(arrayOfData, function(eachUserName, callback) {
    // Perform operation on each user.
    console.log('Creating user '+eachUserName);

    //Returning callback is must. Else it won't get the final callback, even if we miss to return one callback
    
    reateUser(eachUserName, callback);
  }, function(err) {
      //If any of the user creation failed may throw error.
      if( err ) {
        // One of the iterations produced an error.
        // All processing will now stop.
        console.log('unable to create user');
      } else {
        console.log('All user created successfully');
      }
    }
);
```
To do one at a time can use **async.eachSeries**