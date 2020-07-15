## Section 22.2: Manage app with process manager

It's a good practice to run NodeJS apps controlled by process managers. Process manager helps to keep 
application alive forever, restart on failure, reload without downtime and simplifies administrating. 
Most powerful of them (like PM2) have a built-in load balancer. PM2 also enables you to manage 
application logging, monitoring, and clustering. PM2 process manager

### Installing PM2:
- npm install pm2 -g