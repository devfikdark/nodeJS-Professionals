## Section 37.1: Hello world

For accessing Cassandra **cassandra-driver** module from **DataStax** can be used. 
It supports all the features and can be easily configured.

```js
const cassandra = require("cassandra-driver");
const clientOptions = {
  contactPoints: ["host1", "host2"],
  keyspace: "test"
};

const client = new cassandra.Client(clientOptions);
const query = "SELECT hello FROM world WHERE name = ?";

client.execute(query, ["John"], (err, results) => {
  if (err) {
    return console.error(err);
  }
  console.log(results.rows);
});
```