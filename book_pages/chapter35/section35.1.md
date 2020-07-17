## Section 35.1: Node ES6 Support and creating a project with Babel

- create a new node project
  - mkdir my-es6-app
    - cd my-es6-app
      - npm init


### Install babel the ES6 preset and stage-0

- `npm install --save-dev babel-preset-es2015 babel-preset-stage-2 babel-cli babel-register`

Create a new file called **server.js** and add a basic HTTP server.

```js
import http from 'http'

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello World\n')
}).listen(3000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:3000/')
```

Note that we use an `import http from 'http'` this is a `stage-0` feature and if it 
works it means we've got the **transpiler** working correctly. 

If you **run** `node server.js` it will fail not knowing how to handle the import.

Creating a **.babelrc **file in the root of your directory and add the following 
settings

```js
{
  "presets": ["es2015", "stage-2"],
  "plugins": []
}
```

you can now **run** the server with `node src/index.js --exec babel-node`

Finishing off it is not a good idea to run a transpiler at runtime on a production 
app. We can however implement some scripts in our package.json to make it easier to work with.

```js
"scripts": {
  "start": "node dist/index.js",
  "dev": "babel-node src/index.js",
  "build": "babel src -d dist",
  "postinstall": "npm run build"
},
```

The above will on `npm install build` the transpiled code to the dist directory 
allow `npm start` to use the transpiled code for our production app.

`npm run dev` will boot the server and babel runtime which is fine and preferred 
when working on a project locally. Going one further you could then install nodemon 
`npm install nodemon --save-dev` to watch for changes and then reboot the node app.

This really speeds up working with babel and NodeJS. In you package.json just update 
the "**dev**" script to use nodemon

```js
"dev": "nodemon src/index.js --exec babel-node",
```