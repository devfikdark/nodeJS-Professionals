## Section 17.3: Continuous running with nohup

**An alternative to forever on Linux is nohup.**

### To start a nohup instance
- cd to the location of app.js or www folder
- run nohup nodejs app.js &

### To kill the process
- run ps -ef|grep nodejs
- kill -9 <the process number>