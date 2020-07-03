# Section 5.7: Invalidating the module cache

In development, you may find that using require() on the same module multiple times 
always returns the same module, even if you have made changes to that file. This is 
because modules are cached the first time they are loaded, and any subsequent module 
loads will load from the cache.

To get around this issue, you will have to delete the entry in the cache. For example, if you loaded a module:

```js
var a = require('./a');
```

You could then delete the cache entry:

```js
var rpath = require.resolve('./a.js');
delete require.cache[rpath];
```

And then require the module again:

```js
var a = require('./a');
```

Do note that this is not recommended in production because the delete will only delete 
the reference to the loaded module, not the loaded data itself. The module is not 
garbage collected, so improper use of this feature could lead to leaking memory.