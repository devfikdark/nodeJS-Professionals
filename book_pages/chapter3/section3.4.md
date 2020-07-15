## Section 3.4: Using a Template Engine

The following code will setup Jade as template engine. (Note: Jade has been 
renamed to pug as of December 2015.)

```js
const express = require('express'); //Imports the express module
const app = express(); //Creates an instance of the express module
const PORT = 3000; //Randomly chosen port
app.set('view engine','jade'); //Sets jade as the View Engine / Template Engine
app.set('views','src/views'); //Sets the directory where all the views (.jade files) are stored.

//Creates a Root Route
app.get('/',function(req, res){
  res.render('index'); 
  /*
  renders the index.jade file into html and returns as a response. The
  render function optionally takes the data to pass to the view.
  */
});

//Starts the Express server with a callback
app.listen(PORT, function(err) {
  if (!err) {
    console.log('Server is running at port', PORT);
  } else {
    console.log(JSON.stringify(err));
  }
});
```

Similarly, other Template Engines could be used too such as Handlebars ( hbs ) or 
ejs . Remember to npm install the Template Engine too. For Handlebars we use hbs 
package, for Jade we have a jade package and for EJS, we have an ejs package


### EJS Template Example

With EJS (like other express templates), you can run server code and access your 
server variables from you HTML. In EJS it's done using " <% " as start tag and " %> " 
as end tag, variables passed as the render params can be accessed using <%=var_name%>
For instance, if you have supplies array in your server code you can loop over it using


- Example----> 1
```html
<h1><%= title %></h1>
  <ul>
<% for(let i=0; i<supplies.length; i++) { %>
  <li>
    <a href='supplies/<%= supplies[i] %>'>
      <%= supplies[i] %>
    </a>
  </li>
<% } %>
  </ul>
```

- Example----> 2
```html
<input type="text" value="<%= message %>" name="message" required>
```

Here the message variable passed from your server side will be the default value of 
your input, please be noticed that if you didn't pass message variable from your 
server side, EJS will throw an exception. You can pass parameters using 
res.render('index', {message: message}); (for ejs file called index.ejs).
