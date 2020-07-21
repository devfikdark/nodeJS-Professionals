## Section 51.1: Send Web notification using GCM ( Google Cloud Messaging System)

```JS
const express = require('express');
const app = express();
const gcm = require('node-gcm');
app.io = require('socket.io')();

// [*] Configuring our GCM Channel.
const sender = new gcm.Sender('Project Secret');
const regTokens = [];

let message = new gcm.Message({
  data: {
    key1: 'msg1'
  }
});

// [*] Configuring our static files.
app.use(express.static('public/'));

// [*] Configuring Routes.
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.io.on('connection', socket => {
  console.log('we have a new connection ...');
  socket.on('new_user', (reg_id) => {
    if (regTokens.indexOf(reg_id) === -1) {
    regTokens.push(reg_id);
    sender.send(message, {
      registrationTokens: regTokens
    }, (err, response) => {
      if (err) console.error('err', err);
      else console.log(response);
    });
    }
  })
});

module.exports = app
```

Now Create a .json file and name it : Manifest.json, open it and past the following :
```JS
{
  "name": "Application Name",
  "gcm_sender_id": "GCM Project ID"
}
```