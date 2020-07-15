## Section 26.1: Single File Upload using multer

**server.js** 

```js
let express = require("express");
let multer = require('multer');
let app = express();
let fs = require('fs');

app.get('/',function(req,res){
  res.sendFile(__dirname + "/index.html");
});

let storage = multer.diskStorage({
  destination: function (req, file, callback) {
    fs.mkdir('./uploads', function(err) {
      if(err) {
        console.log(err.stack)
      } else {
        callback(null, './uploads');
      }
    })
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
  }
});

app.post('/api/file',function(req,res){
  let upload = multer({ storage : storage}).single('userFile');
  
  upload(req,res,function(err) {
    if(err) {
      return res.end("Error uploading file.");
    }
    res.end("File is uploaded");
  });
});

app.listen(3000,function(){
  console.log("Working on port 3000");
});
```

**index.html**

```html
<form 
  id = "uploadForm" 
  enctype = "multipart/form-data" 
  action = "/api/file" 
  method = "post"
  >
    <input type="file" name="userFile" />
    <input type="submit" value="Upload File" name="submit">
</form>
```

### Note:

To upload file with **extension** you can use Node.js **path** built-in library

For that just require path to **server.js** file:

```js
let path = require('path');

// change:
callback(null, file.fieldname + '-' + Date.now());

// adding a file extension in the following way:
callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
```

### How to filter upload by extension:

In this example, view how to upload files to allow only certain extensions.
For example only images extensions. Just add to 

```js
let upload = multer({ storage : storage}).single('userFile'); 

// fileFilter condition
let upload = multer({
  storage: storage,

  fileFilter: function (req, file, callback) {
    let ext = path.extname(file.originalname);
    
    if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
      return callback(new Error('Only images are allowed'))
    }
    callback(null, true)
  }
}).single('userFile');
```

Now you can `upload only image` files with **png**, **jpg**, **gif** or **jpeg** extensions