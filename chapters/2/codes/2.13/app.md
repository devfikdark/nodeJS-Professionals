You can use npm install -g to install a package "globally." This is typically done to install an executable that you can add to your path to run. For example:
- `npm install -g gulp-cli`

If you update your path, you can call gulp directly.

On many OSes, `npm install -g` will attempt to write to a directory that your user may not be able to write to such as `/usr/bin`. You should not use `sudo npm install` in this case since there is a possible security risk of running arbitrary scripts with sudo and the root user may create directories in your home that you cannot write to which makes future installations more difficult.

You can tell npm where to install global modules to via your configuration file, ~/.npmrc . This is called the prefix which you can view with npm prefix .
- `prefix=~/.npm-global-modules`

This will use the prefix whenever you run `npm install -g`. You can also use `npm install --prefix ~/.npm-global-modules` to set the prefix when you install. If the prefix is the same as your configuration, you don't need to use `-g`.

In order to use the globally installed module, it needs to be on your path:
- `export PATH=$PATH:~/.npm-global-modules/bin`

Now when you run `npm install -g` gulp-cli you will be able to use gulp .

**Note**: When you `npm install` (without `-g` ) the prefix will be the directory with `package.json` or the current directory if none is found in the hierarchy. This also creates a directory `node_modules/.bin` that has the executables. If you want to use an executable that is specific to a project, it's not necessary to use `npm install -g`. You can use the one in `node_modules/.bin`.