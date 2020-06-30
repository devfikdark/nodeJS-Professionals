const http = require('http');

/**** 1st way ****/
function index (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}

http.createServer(function (req, res) {
  if (req.url === '/') {
    return index(req, res);
  }
    res.writeHead(404);
    res.end(http.STATUS_CODES[404]);

}).listen(3040);

/**
 * http://localhost:3040/
 * Hello, World!
 * 
 * http://localhost:3040/newrouter
 * Not Found
 * 
 */

/**** 2nd way ****/
var routes = {
  '/': function index (request, response) {
    response.writeHead(200);
    response.end('Hello, World!');
  },
  '/foo': function foo (request, response) {
    response.writeHead(200);
    response.end('You are now viewing "foo"');
  }
}

http.createServer(function (request, response) {
  if (request.url in routes) {
    return routes[request.url](request, response);
  }

  response.writeHead(404);
  response.end(http.STATUS_CODES[404]);
}).listen(3050);

/**
 * http://localhost:3050/
 * Hello, World!
 * 
 * http://localhost:3050/foo
 * You are now viewing "foo"
 * 
 * http://localhost:3050/newrouter
 * Not Found
 * 
 */