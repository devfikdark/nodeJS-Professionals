## Section 28.1: Simple connect

| Parameter | Details |
|:---------:|:-------:|
| document | A javascript object representing a document |
| documents | An array of documents |
| query | An object defining a search query |
| filter | An object defining a search query |
| callback | Function to be called when the operation is done |
| options | (optional) Optional settings (default: null) |
| w | (optional) The write concern |
| wtimeout | (optional) The write concern timeout. (default: null) |
| j | (optional) Specify a journal write concern (default: false) |
| upsert | (optional) Update operation (default: false) |
| multi | (optional) Update one/all documents (default: false) |
| serializeFunctions | (optional) Serialize functions on any object (default: false) |
| forceServerObjectId | (optional) Force server to assign _id values instead of driver (default: false) |
| bypassDocumentValidation | (optional) Allow driver to bypass schema validation in MongoDB 3.2 or higher (default: false) |

```js
MongoDB.connect('mongodb://localhost:27017/databaseName', 
  function(error, database) { 
    if(error) return;
    console.log(error); 
    const collection = database.collection('collectionName'); 
    collection.insert({key: 'value'}, function(error, result) { 
      console.log(error, result); 
    }); 
  }
);
```