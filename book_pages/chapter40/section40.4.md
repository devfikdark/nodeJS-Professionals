## Section 40.4: Using Socket.io with IISNode

```c#
<handlers>
  <add name="iisnode-socketio" path="server.js" verb="*" modules="iisnode" />
</handlers>

<rule name="SocketIO" patternSyntax="ECMAScript">
  <match url="socket.io.+"/>
  <action type="Rewrite" url="server.js"/>
</rule>
```

If you are using IIS 8, you'll need to disable your webSockets setting in your Web.
config in addition to adding the above handler and rewrite rules. This is 
unnecessary in IIS 7 since there is no webSocket support.

```c#
<webSocket enabled="false" />
```