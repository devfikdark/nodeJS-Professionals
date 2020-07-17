## Section 33.1: Core node.js debugger and node inspector

### Using core debugger

Node.js provides a build in non graphical debugging utility. To start the build in the debugger, start 
the application with this command:

- `node debug filename.js`


### Command reference

- Stepping
  - cont, c - Continue execution
  - next, n - Step next
  - step, s - Step in
  - out, o - Step out

- Breakpoints

  - setBreakpoint(), sb() - Set breakpoint on current line
  - setBreakpoint(line), sb(line) - Set breakpoint on specific line