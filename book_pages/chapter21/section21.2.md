## Section 21.2: Piping streams

Readable streams can be "piped," or connected, to writable streams. This makes data 
flow from the source stream to the destination stream without much effort.
```js
let fs = require('fs')
let readable = fs.createReadStream('file1.txt')
let writable = fs.createWriteStream('file2.txt')
readable.pipe(writable) // returns writable
```

When writable streams are also readable streams, i.e. when they're duplex streams, you 
can continue piping it to other writable streams.
```js
let zlib = require('zlib')

fs.createReadStream('style.css')
  .pipe(zlib.createGzip()) // The returned object, zlib.Gzip, is a duplex stream.
  .pipe(fs.createWriteStream('style.css.gz')
```

Readable streams can also be piped into multiple streams.
```js
let readable = fs.createReadStream('source.css')

readable.pipe(zlib.createGzip()).pipe(fs.createWriteStream('output.css.gz'))
readable.pipe(fs.createWriteStream('output.css')
```

Note that you must pipe to the output streams synchronously (at the same time) before 
any data 'flows'. Failure to do so might lead to incomplete data being streamed.
Also note that stream objects can emit error events; be sure to responsibly handle 
these events on every stream, as needed:
```js
let readable = fs.createReadStream('file3.txt');
let writable = fs.createWriteStream('file4.txt');

readable.pipe(writable);
readable.on('error', console.error);
writable.on('error', console.error);
```