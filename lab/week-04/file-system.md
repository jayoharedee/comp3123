# Week 04 - Accessing the File System

## `fs`
As we know, node offers built-in libraries to help us take care of tasks, like `fs` for deakubg wutg tge file system.

Here is an example of how on would be able to read a file using `fs`


```js
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'start.html');
// console.log(__dirname, 'if you've never used it before')

fs.readFile(filePath, {encoding: 'utf-8'}, function(err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log('received data: ' + data)
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write(data)
        response.end()
    }
});
```

In the above example we accessed the local file system. Now it's your turn. 

### Instructions
1. Find an `fs` method that you want to use, be creative, don't copy my code.
2. Use the method as intended and produce some results of your operation.
3. If you don't have a comp3133 repository for yourself, create one and upload your work under a week-04 folder

## The Process Object In Node
`process` is considered a global object which means it can be accessed anywhere in your application. remember working with `EventEmitter`'s last week? Well, `process` is an instance of `Event Emitter`.

This means that the `.on('param', callback)` should not look to out of the ordinary when dealing with some of the functionaity `process` provides us with.

Along with handling exit codes, the process object also allows us to produce writable streams of data.

Here's an example of what console log looks like under the hood in Node
```js
console.log = function(log) {
  process.stdout.write(d + '\n')
}
```

`process.stderr` and `process.stdout` are unlike other streams in Node in that they cannot be closed (`end()` will throw), they never emit the finish event and that writes are usually blocking.

## process.argv
One usefull object on the Promise chain is the ability to build out arguments for command line tools.

```js
// with functional programming, the convention is
// value, index, array just like we see below in our callback
process.argv.forEach(function(val, index, array) {
  console.log(index + ': ' + val)
})
```

## proces.cwd
This will return the current working directory if you're ever unsure or need to know on the fly.

```js
console.log('Current directory: ' + process.cwd())
```

## process.env
Arguably the most useful object on the chain. This is where we store all of our environment variables and the DevOps as well as all teams apart of the SDLC rely on it when they need to leverage a value saved as an environment variable. Remember environment variables in Bash? Same concept. If you dont remember, let me know.

An example of what a process.env might look like in an application can be found below:
```json
{ TERM: 'xterm-256color',
  SHELL: '/usr/local/bin/bash',
  USER: 'maciej',
  PATH: '~/.bin/:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin',
  PWD: '/Users/maciej',
  EDITOR: 'vim',
  SHLVL: '1',
  HOME: '/Users/maciej',
  LOGNAME: 'maciej',
  _: '/usr/local/bin/node' }
```

Curious to know what versions your working with? process has a property for you.

```js
console.log(process.versions)

// output:
{ http_parser: '1.0',
  node: '0.10.4',
  v8: '3.14.5.8',
  ares: '1.9.0-DEV',
  uv: '0.10.3',
  zlib: '1.2.3',
  modules: '11',
  openssl: '1.0.1e' }
```

Digging in your node app for even more info? There is a config property that will allow to reveal these details. It will produce a JSON of all the configuration options used to compile the current executable.

```js
console.log(process.config)

// OUTPUT:
{ target_defaults:
   { cflags: [],
     default_configuration: 'Release',
     defines: [],
     include_dirs: [],
     libraries: [] },
  variables:
   { host_arch: 'x64',
     node_install_npm: 'true',
     node_prefix: '',
     node_shared_cares: 'false',
     node_shared_http_parser: 'false',
     node_shared_libuv: 'false',
     node_shared_v8: 'false',
     node_shared_zlib: 'false',
     node_use_dtrace: 'false',
     node_use_openssl: 'true',
     node_shared_openssl: 'false',
     strict_aliasing: 'true',
     target_arch: 'x64',
     v8_use_snapshot: 'true' } }
```

## Signal Events

You'll want to reference and read the [docs](https://node.readthedocs.io/en/latest/api/process/) for this one. There are a number of exit codes and other arguments that you'll want on hand.

Remember when I said that process is an `EventEmitter` at the end of the day? Look at the code below;

```js
process.on('eventName', () => {
  //do something

  // uncaughtException
})
```

This event is emitted when an uncaught JavaScript exception bubbles back to the event loop.

By default, if no event listeners are added to the uncaughtException handler, the process will print the stack trace to stderr and exit. If you add an event listener, you change this behavior to the one you implement in your listener:

```js
fs.copy('/tmp/myfile', '/tmp/mynewfile')
  .then(() => console.log('success!'))
  .catch(err => console.error(err))
```

> Note: process does not require a “require”, it’s automatically available.

We can kill processes. Let's dead a webserver once it's done listening

```js
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hi!')
})

const server = app.listen(3000, () => console.log('Server ready'))

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})
```

> What are signals? Signals are a POSIX intercommunication system: a notification sent to a process in order to notify it of an event that occurred.

SIGKILL is the signals that tells a process to immediately terminate, and would ideally act like process.exit().

SIGTERM is the signals that tells a process to gracefully terminate. It is the signal that’s sent from process managers like upstart or supervisord and many others.

You can send this signal from inside the program, in another function:

```js
// this is killing a process by its id
process.kill(process.pid, 'SIGTERM')
```