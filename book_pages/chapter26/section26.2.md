## Section 26.2: Using formidable module

### Install formidable module

- `npm i formidable@latest`

```js
let formidable = require('formidable');
let http = require('http');
let util = require('util');

http.createServer(function(req, res) {
  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
    // parse a file upload
    let form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
      if (err) res.send(err)// process error

      // Copy file from temporary place
      // let fs = require('fs');
      // fs.rename(file.path, <targetPath>, function (err) { ... });
      // Send result on client
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(util.inspect({fields: fields, files: files}));
    });
    return;
  }
  // show a file upload form
  res.writeHead(200, {'content-type': 'text/html'});
  res.end(
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<input type="text" name="title"><br>'+
    '<input type="file" name="upload" multiple="multiple"><br>'+
    '<input type="submit" value="Upload">'+
    '</form>'
  );
}).listen(3000);
```