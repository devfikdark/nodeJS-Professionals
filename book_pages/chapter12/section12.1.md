# Section 12.1: Autoreload on source code changes using nodemon

The nodemon package makes it possible to automatically reload your program when you 
modify any file in the source code.

### Installing nodemon globally
```js
npm install -g nodemon (or npm i -g nodemon )
```

### Installing nodemon locally
In case you don't want to install it globally
```js
npm install --save-dev nodemon (or npm i -D nodemon )
```

### Using nodemon
Run your program with `nodemon entry.js` (or nodemon entry )
This replaces the usual use of `node entry.js` (or node entry ).

You can also add your nodemon startup as an npm script, which might be useful if you 
want to supply parameters and not type them out every time.

### Add package.json:
```js
"scripts": {
  "start": "nodemon entry.js -devmode -something 1"
}
```
This way you can just use `npm start` from your console.
