# Section 16.3: Errors and Promises

Promises handle errors differently to synchronous or callback-driven code.
```js
const p = new Promise(function (resolve, reject) {
  reject(new Error('Oops'));
});

// anything that is `reject`ed inside a promise will be available through catch
// while a promise is rejected, `.then` will not be called
p
.then(() => {
  console.log("won't be called");
})
.catch(e => {
  console.log(e.message); // output: Oops
})
// once the error is caught, execution flow resumes
.then(() => {
  console.log('hello!'); // output: hello!
});
```
currently, errors thrown in a promise that are not caught results in the error being 
swallowed, which can make it difficult to track down the error. This can be solved 
using linting tools like eslint or by ensuring you always have a catch clause.
