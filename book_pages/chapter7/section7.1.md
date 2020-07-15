## Section 7.1: Global Mode

If you installed Node using the default directory, while in the global mode, NPM 
installs packages into `/usr/local/lib/node_modules` . If you type the following in 
the shell, NPM will search for, download, and install the latest version of the 
package named sax inside the directory `/usr/local/lib/node_modules/nodemon` :

```js
$ npm install -g nodemon
```

Make sure that you have sufficient access rights to the folder. These modules will be 
available for all node process which will be running in that machine In local mode 
installation. Npm will down load and install modules in the current working folders by 
creating a new folder called node_modules for example if you are in /home/user/apps/
my_app a new folder will be created called node_modules `/home/user/apps/my_app/node_modules` if its not already exist.