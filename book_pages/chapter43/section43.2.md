## Section 43.2: Installing gruntplugins

- **Adding dependcy**

  - `npm install grunt-contrib-jshint --save-dev`

- **Loading the plugin**

```js
grunt.loadNpmTasks('grunt-contrib-jshint');
```

- `Configuring the task`

```js
grunt.initConfig({
  jshint: {
    all: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js']
  }
});

```
- **Running the task**

  - `grunt jshint` (1st way) 
  - `grunt.registerTask('default', ['jshint']);` (2nd way)

The default task runs with the grunt command in the terminal without any options.