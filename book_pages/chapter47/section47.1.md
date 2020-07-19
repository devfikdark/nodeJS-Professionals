## Section 47.1: /w Express, jQuery and Jade


- **client.jade**

```js
//a button is placed down; similar in HTML
button(type='button', id='send_by_button') Modify data

#modify Lorem ipsum Sender
//loading jQuery; it can be done from an online source as well
script(src='./js/jquery-2.2.0.min.js')

//AJAX request using jQuery
script
  $(function () {
    $('#send_by_button').click(function (e) {
      e.preventDefault();

      //test: the text within brackets should appear when clicking on said button
      //window.alert('You clicked on me. - jQuery');
      //a variable and a JSON initialized in the code

      var predeclared = "Katamori";
      var data = {
        Title: "Name_SenderTest",
        Nick: predeclared,
        FirstName: "Morol",
        Surname: "Schmidt"
      };

      //an AJAX request with given parameters
      $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: 'http://localhost:7776/domaintest',

        //on success, received data is used as 'data' function input
        success: function (data) {
          window.alert('Request sent; data received.');

          var jsonstr = JSON.stringify(data);
          var jsonobj = JSON.parse(jsonstr);
       
          if(data.Nick != predeclared){
          document.getElementById("modify").innerHTML = "JSON changed!\n" +
          jsonstr;
          };
        }
      });
    });
  });
```


- **domaintest_route.js**

```js
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
});

//same for POST requests - notice, how the AJAX request above was defined as POST
router.post('/', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  //content generated here
  var some_json = {
    Title: "Test",
    Item: "Crate"
  };

  var result = JSON.stringify(some_json);
  
  //content got 'client.jade'
  var sent_data = req.body;
  sent_data.Nick = "ttony33";
  res.send(sent_data);
});

module.exports = router;
```