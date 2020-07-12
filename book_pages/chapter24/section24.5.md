# Section 24.5: Useful Mongoose functions

Mongoose contains some built in functions that build on the standard **find()**.
```js
doc.find({'some.value':5},function(err,docs){
  //returns array docs
});

doc.findOne({'some.value':5},function(err,doc){
  //returns document doc
});

doc.findById(obj._id,function(err,doc){
  //returns document doc
});
```