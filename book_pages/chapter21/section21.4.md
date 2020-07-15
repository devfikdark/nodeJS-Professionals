## Section 21.4: Why Streams?

Lets examine the following two examples for reading a file's contents: The first one, 
which uses an async method for reading a file, and providing a callback function which 
is called once the file is fully read into the memory:
```js
fs.readFile(`${__dirname}/utils.js`, (err, data) => {
  if (err) {
    handleError(err);
  } else {
    console.log(data.toString());
  }
})
```

And the second, which uses streams in order to read the file's content, piece by piece:
```js
let fileStream = fs.createReadStream(`${__dirname}/file`);
let fileContent = '';

fileStream.on('data', data => {
  fileContent += data.toString();
})

fileStream.on('end', () => {
  console.log(fileContent);
})

fileStream.on('error', err => {
  handleError(err)
})
```

It's worth mentioning that both examples do the exact same thing. What's the 
difference then? The first one is shorter and looks more elegant The second lets you 
do some processing on the file while it is being read (!) When the files you deal with 
are **small** then there is no real effect when using streams , but what happens when 
the file is **big**? (so big that it takes 10 seconds to read it into memory) Without 
streams you'll be waiting, doing absolutely nothing (unless your process does other 
stuff), until the `10 seconds pass` and the file is fully read, and only then you can 
start processing the file. With streams , you get the file's contents piece by piece, 
right when they're available - and that lets you process the file while it is being 
read. The above example does not illustrate how streams can be utilized for work that 
cannot be done when going the callback fashion, so lets look at another example:
I would like to download a gzip file, unzip it and save its content to the disk. Given 
the file's url this is what's need to be done:

- Download the file
- Unzip the file
- Save it to disk

Here's a [small file][1], which is stored in my S3 storage. The following code does 
the above in the callback fashion.

- **1339 milliseconds**
```js
let startTime = Date.now()

s3.getObject({Bucket: 'some-bucket', Key: 'tweets.gz'}, (err, data) => {

  // here, the whole file was downloaded
  zlib.gunzip(data.Body, (err, data) => {

    // here, the whole file was unzipped
    fs.writeFile(`${__dirname}/tweets.json`, data, err => {
      if (err) console.error(err)

      // here, the whole file was written to disk
      let endTime = Date.now()
      console.log(`${endTime - startTime} milliseconds`) // 1339 milliseconds
    })
  })
})
```

This is how it looks using streams :
- **1204 milliseconds**
```js
s3
  .getObject({Bucket: 'some-bucket', Key: 'tweets.gz'})
  .createReadStream()
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream(`${__dirname}/tweets.json`));
```