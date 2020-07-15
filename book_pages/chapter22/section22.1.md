## Section 22.1: Setting NODE_ENV="production"

Production deployments will vary in many ways, but a standard convention when deploying in production is 
to define an environment variable called NODE_ENV and set its value to "**production**". Runtime flags
Any code running in your application (including external modules) can check the value of ***NODE_ENV*** :
```js
if(process.env.NODE_ENV === 'production') {
  // We are running in production mode
} else {
  // We are running in development mode
}
```

### Dependencies

When the NODE_ENV environment variable is set to 'production' all devDependencies in your `package.json` 
file will be completely ignored when running npm install . You can also enforce this with a --production 
flag:

- npm install --production