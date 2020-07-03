Modules can be require d without using relative paths by putting them in a special 
directory called node_modules . For example, to require a module called foo from a 
file index.js , you can use the following directory structure:

```
index.js
  \- node_modules
  \- foo
    |- foo.js
    \- package.json
```

Modules should be placed inside a directory, along with a package.json file. The main 
field of the package.json file should point to the entry point for your module--this 
is the file that is imported when users do require('your-module') . main defaults to 
index.js if not provided. Alternatively, you can refer to files relative to your module
simply by appending the relative path to the require call: require('your-module/path/
to/file') .Modules can also be require d from node_modules directories up the file 
system hierarchy. If we have the following directory structure:

```
my-project
\- node_modules
  |- foo // the foo module
    \- ...
  \- baz // the baz module
    \- node_modules
      \- bar // the bar module
```

we will be able to require the module foo from any file within bar using require
('foo') . Note that node will only match the module that is closest to the file in the 
filesystem hierarchy, starting from (the file's current directory/node_modules). Node 
matches directories this way up to the file system root. You can either install new 
modules from the npm registry or other npm registries, or make your own.