# Section 22.3: Deployment using process manager

Process manager is generally used in production to deploy a nodejs app. The main functions of a process 
manager are restarting the server if it crashes, checking resource consumption, improving runtime 
performance, monitoring etc.

Some of the popular process managers made by the node community are forever, pm2, etc.
forever is a command-line interface tool for ensuring that a given script runs continuously. forever ’s 
simple interface makes it ideal for running smaller deployments of Node.js apps and scripts. forever 
monitors your process and restarts it if it crashes.

### Install forever globally.
- $ npm install -g forever

### Run application :
- $ forever start server.js

This starts the server and gives an id for the process(**starts from 0**).
### Restart application :
- $ forever restart 0

Here 0 is the id of the server.
### Stop application :
- $ forever stop 0

Similar to restart, 0 is the id the server.