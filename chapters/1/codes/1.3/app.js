// Import the top-level function of express
let express = require('express');

// Creates an Express application using the top-level function
let app = express();

// Define port number as 3000
let port = 5000;

// Routes HTTP GET requests to the specified path "/" with the specified callback function
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: "Welcome to Morol"
  });
});

// Make the app listen on port 3000
app.listen(port, () => {
  console.log(`server run on ${port} number port!!!`);
})

/*
 * http://localhost:5000/
 * 
 * {
 *   "status": "ok",
 *   "message": "Welcome to Morol"
 * }
 * 
 */