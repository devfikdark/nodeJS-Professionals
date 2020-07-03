# Section 7.2: Loading modules

When we refer the module in the code, node first looks up the node_module folder 
inside the referenced folder in required statement If the module name is not relative 
and is not a core module, Node will try to find it inside the node_modules folder in 
the current directory. For instance, if you do the following, Node will try to look 
for the file
```js
// ./node_modules/myModule.js :
var myModule = require('myModule.js');
```
If Node fails to find the file, it will look inside the parent folder called ../
node_modules/myModule.js . If it fails again, it will try the parent folder and keep 
descending until it reaches the root or finds the required module. You can also omit 
the .js extension if you like to, in which case node will append the .js extension and 
will search for the file.

### Loading a Folder Module

You can use the path for a folder to load a module like this:
```js
var myModule = require('./myModuleDir');
```

If you do so, Node will search inside that folder. Node will presume this folder is a 
package and will try to look for a package definition. That package definition should 
be a file named package.json . If that folder does not contain a package definition 
file named package.json , the package entry point will assume the default value of 
index.js , and Node will look, in this case, for a file under the path ./myModuleDir/
index.js. The last resort if module is not found in any of the folders is the global 
module installation folder.