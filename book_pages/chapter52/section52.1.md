## Section 52.1: Use the proxy for debugging via port on Linux

If you start your application on Linux, use the proxy for debugging via port, for example:
```
socat TCP-LISTEN:9958,fork TCP:127.0.0.1:5858 &
```
Use port 9958 for remote debugging then.

## Section 52.2: NodeJS run configuration

```
Debugger listening on port <port>
```