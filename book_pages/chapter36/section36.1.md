## Section 36.1: Logging

### Console Module

Similar to the browser environment of JavaScript node.js provides a console module 
which provides simple logging and debugging possibilities. The most important 
methods provided by the console module are `console.log` , `console.error` and 
`console.time` . But there are several others like console.info .

- **console.log**

The parameters will be printed to the standard output ( stdout ) with a new line.
```js
console.log('Hello World');
// Hello World
```

- **console.error**

The parameters will be printed to the standard error ( stderr ) with a new line.
```js
console.error('Oh, sorry, there is an error.');
// Oh, sorry, there is an error.
```

- **console.time, console.timeEnd**

`console.time` starts a timer with an unique lable that can be used to compute the 
duration of an operation. When you call `console.timeEnd` with the same label, the 
timer stops and it prints the elapsed time in milliseconds to stdout .

```js
console.time('morol');
console.timeEnd('morol');
// morol: 1234ms
```

- **Process Module**

It is possible to use the process module to write directly into the standard output 
of the console. Therefore it exists the method process.stdout.write . Unlike console.
log this method does not add a new line before your output.

```js
process.stdout.write("Jinnat");process.stdout.write("morol");
// Jinnatmorol
```

- **Formatting**

One can use terminal (control) codes to issue specific commands like switching 
colors or positioning the cursor.

```js
console.log('\033[31msHello World');
```

- **General**

| Effect | Code |
|:------:|:----:|
| Reset | \033[0m |
| Hicolor | \033[1m |
| Underline | \033[4m |
| Inverse | \033[7m |

- **Font Colors**

| Effect | Code |
|:------:|:----:|
| Black | \033[30m |
| Red | \033[31m |
| Green | \033[32m |
| Yellow | \033[33m |
| Blue | \033[34m |
| Magenta | \033[35m |
| Cyan | \033[36m |
| White | \033[37m |

- **Background Colors**

| Effect | Code |
|:------:|:----:|
| Black | \033[40m |
| Red | \033[41m |
| Green | \033[42m |
| Yellow | \033[43m |
| Blue | \033[44m |
| Magenta | \033[45m |
| Cyan | \033[46m |
| White | \033[47m |