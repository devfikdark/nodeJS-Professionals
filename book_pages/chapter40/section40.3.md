## Section 40.3: Basic Hello World Example using Express

- **Project Strucure**

```
- /app_root
  - package.json
  - server.js
  - Web.config
```

- **server.js - Express Application**

```js
const express = require('express');
const server = express();

// We need to get the port that IISNode passes into us
// using the PORT environment variable, if it isn't set use a default value
const port = process.env.PORT || 3000;

// Setup a route at the index of our app
server.get('/', (req, res) => {
  return res.status(200).send('Hello World');
});

server.listen(port, () => {
  console.log(`Listening on ${port}`);
});   
```

- **IISNode Handler**

```c#
<handlers>
  <add name="iisnode" path="server.js" verb="*" modules="iisnode"/>
</handlers>
```

- **URL-Rewrite Rules**

```c#
<rewrite>
  <rules>
  // First we consider whether the incoming URL matches a physical file in the /public folder

    <rule name="StaticContent" patternSyntax="Wildcard">
      <action type="Rewrite" url="public/{R:0}" logRewrittenUrl="true"/>
      <conditions>
        <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true"/>
      </conditions>
      <match url="*.*"/>
    </rule>

    // All other URLs are mapped to the Node.js application entry point
    <rule name="DynamicContent">
      <conditions>
        <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="True"/>
      </conditions>
      <action type="Rewrite" url="server.js"/>
    </rule>
  </rules>
</rewrite>
```