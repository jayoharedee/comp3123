# COMP 3133 - week 02

Think of PHP. Does the word "procedural" ring a bell? Wouldn't it be nice if things could happen independently of the applications main thread powering the application? Making things happen independently of a programs main thread is a term known as "asynchronisity". When rendering frontend content, asynchronously written code really helps us prevent a page from freezing up or loading slowly. In 2020 being able to deliver rich web content is more important than ever.

JavaScript is a single threaded language which means that it cannot run multiple parallel threads like a .NET application would afford you. With JavaScript, instead of relying on threads, we rely on the ability to perform actions and continuing moving along with the execution of our code. 

When writing JavaScript, the idea is to write code that would not block other code from running. It is possible to write “procedural” style code like you’d find in PHP and this is known as a synchronous operation.

Different libraries offer different tools, different design patterns make certain tasks asynchronous. They allow for JavaScript to continue executing without the blocking the single thread that JS run on. When this thread is blocked, you’ll often times find web pages “locking” up or not rendering content.

Anyways, let's look at some of these patterns.

## Callbacks

Think about reading a file, this is a process where we would have to go from beginning to end to complete the task. It seems like it should be a major blocker but we can write the operation in a way where we aren't blocking the next chunk of code we need to execute.

```javascript
const fs = require('fs') // Importing Nodejs library

// Declaring file path
const filePath = './users.json'

// Asynchronous operation to read the file
fs.readFile(filePath, function onReadFile(err, result) {
    // In case of error print it in the console
  if (err) {
    console.log('There was an error: ' + err)
    return // Get out of the function
  }
  // Print on the console the file and the content of it.
  console.log('The file was successfully read it: ' + result)
})

consologe.log('Hello')

// Output
// Hello
// 'The file was successfully read it: ' + theBook

```

It's these expensive tasks that we want to avoid running like reading a file and instead, leverage the asyncrhonous patterns JavaScript allows for. Like, callbacks.

Remember - one of the main benefits of JavaScript is it's ability to intiate tasks immediately and finish them later while continuing to execute code. Thus the term "callback" we write code in a particular fashion and we have the ability to "callback" to the task once it completes. 

JavaScript should be written in a way where things are kept as asynchronous as possible. There are libraries like [RxJS](https://rxjs.com) or even [redux](https://redux.com) which we'll be exploring later on in the semester (redux). Most libraries you use in Node and even the client side stuff which we'll look at later has asynchronous ways to complete tasks commonly in their library. Look at the previus snippet for fs. With the fs library, you have to explicitly declare that you want to run synchronously.

## Promises

ECMAScript, JavaScript, ES6 whatever you want to call it; introduced some great features to help us leverage the asynchronisty of JavaScript in a much easier manner. Enter Promises, a newer addition to the Javascript API. They amongst other new additions, allow us to perform asynchronous operations much easier.

You'll notice my previous mention which takes it's name from the ECMA comittee responsible forgoverning the JavaScript language. ES describes a promise as a -- 

> A Promise is an object that is used as a placeholder for the eventual results of a deferred (and possibly asynchronous) computation.

Promises are used when a certain tasks time for completion is uncertain or possibly too long. Think of a network request, those can take up to 10ms to 200ms (or more) depending on the connection speed. It would be considered poor user experience to have to wait for this network fetch to take place. With promises we can introduce things like UI loaders or some type of animation to trick the user in to feeling like it's not as long of a wait. 

Below is a promise where I am just performing a meaningless control statement to illustrate how promises are written.

```javascript
const promiseDemo = new Promise((resolve, reject) => {
  if (Math.random() * 100 < 90) {
    console.log('resolving the promise ...')
    resolve('Hello, Promises!')
  }

  reject(new Error(
    'Some times things go wrong so we have to account for the accidents.'
  ))
})
```

There are a couple things to note about the above example.

1. We are instantiating something from the Promise API, Promise just like Math, Date or Proxy, are par tofot the javaScript languages. After the instantiation, we are assigning the class to a variable. 
2. Our new Promise instantiation has a callback with two parameters, `resolve` and `reject`. These parameters will be fundamental to help us control the asynchronicity of a promise.
3. We are passing a function as a parameter to the Promise instance. It's in this function where both the `resolve` and `reject` parameters live.

