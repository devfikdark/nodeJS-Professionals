## Section 22.4: Deployment using PM2

PM2 is a production process manager for Node.js applications, that allows you to keep 
applications alive forever and reload them without downtime. PM2 also enables you to 
manage application logging, monitoring, and clustering.

- Install pm2 globally.
  - npm install -g pm2
- Then, run the node.js app using PM2.
  - pm2 start server.js --name "my-app"
- List all running processes:
  - pm2 list
- Stop an app:
  - pm2 stop my-app
- Restart an app:
  - pm2 restart my-app
- To view detailed information about an app:
  - pm2 show my-app
- To remove an app from PM2’s registry:
  - pm2 delete my-app