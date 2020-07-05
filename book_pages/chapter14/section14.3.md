# Section 14.3: setTimeout promisified

```js
function wait(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms);
  })
}
```