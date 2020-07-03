# Section 3.0: Basic

### Web Apps With Express

| Parameter | Details |
|:---------:|:-------:|
| path | Specifies the path portion or the URL that the given callback will handle. |
| middleware | One or more functions which will be called before the callback. Essentially a chaining of multiple callback functions. Useful for more specific handling for example authorization or error handling. |
| callback | A function that will be used to handle requests to the specified path . It will be called like callback(request, response, next) , where request , response , and next are described below. |
| callback request | An object encapsulating details about the HTTP request that the callback is being called to handle. |
| response | An object that is used to specify how the server should respond to the request. |
| next | A callback that passes control on to the next matching route. It accepts an optional error object. |