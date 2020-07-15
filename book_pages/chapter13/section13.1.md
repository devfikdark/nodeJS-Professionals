## Section 13.1: Accessing environment variables

The process.env property returns an object containing the user environment.
It returns an object like this one :
```js
{
  TERM: 'xterm-256color',
  SHELL: '/usr/local/bin/bash',
  USER: 'maciej',
  PATH: '~/.bin/:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin',
  PWD: '/Users/maciej',
  EDITOR: 'vim',
  SHLVL: '1',
  HOME: '/Users/maciej',
  LOGNAME: 'maciej',
  _: '/usr/local/bin/node'
}
process.env.HOME // '/Users/maciej'
```

If you set environment variable PORT to 3000 , it will be accessible with:
```js
process.env.PORT // 3000
```