# COMP 3133 - week 02 
## Asynchronisity

Think of PHP. Does the word 'procedural' ring a bell? Wouldn't it be nice if things could happen independently of the applications main thread powering the application? Making things happen independently of a programs main thread is a term known as 'asynchronisity'. When rendering frontend content, asynchronously written code really helps us prevent a page from freezing up or loading slowly. In 2020 being able to deliver rich web content is more important than ever.

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

Remember - one of the main benefits of JavaScript is it's ability to intiate tasks immediately and finish them later while continuing to execute code. Thus the term 'callback' we write code in a particular fashion and we have the ability to 'callback' to the task once it completes. 

JavaScript should be written in a way where things are kept as asynchronous as possible. There are libraries like [RxJS](https://www.learnrxjs.io) or even [redux](https://redux.js.org) which we'll be exploring later on in the semester (redux). Most libraries you use in Node and even the client side stuff which we'll look at later has asynchronous ways to complete tasks commonly in their library. Look at the previus snippet for fs. With the fs library, you have to explicitly declare that you want to run synchronously.

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
    resolve('youve resolved the promise')
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

Using the keywords `resolve` and `reject` allow us to control the folow of asynchronisity. Let's take a look at the example again and we'll go through it step-by-step.

```javascript
// we create a promise using the JS API and then assign it to a variabel
const promiseDemo = new Promise((resolve, reject) => {

})

// we fill in our promise with some logic
const promiseDemo = new Promise((resolve, reject) => {
  // including logic inside the scope of our Promise callback
  if (Math.random() * 100 < 90) {
    // what we want t happen if our logic is true
  }
})

// now that we have some logic which we'd like to complete, we want to 
// include the ability to exit the function either by rejecting or resolving
// the Promise. Using the `resolve` keyword means that we've completed 
// our task. `reject` is used to handle errors. Let's fill it out below with 
// these keywords and see if it makes sense on how we use them
const promiseDemo = new Promise((resolve, reject) => {
  // our logic
  if (Math.random() * 100 < 90) {
    // if our logic evaluates to true, we are now in the promise block
    console.log('resolving the promise ...')

    // notice the resolve keyword? this allows us to resolve our promise
    // and tell the interpreter that we have something to return asynchronously
    // remember resolve comes from the Promises callback param
    resolve('youve resolved the promise')
  }

  reject(new Error(
    'Some times things go wrong so we have to account for the accidents.'
  ))
})
```

When we resolve or reject a promise, when we use the promise for async power, the outcome of the promise `resolve` or `reject` dictates how are codeis handled. the Promise API has a pattern for us to consume the result of the promise. 'thenables' I call them and in a moment, you'll see why.

To use a Promise the pattern looks as such:
```js

const promiseDemo = new Promise((resolve, reject) => {
    if (Math.random() * 100 < 90) {
        console.log('resolving the promise ...');
        resolve('youve resolved the promise');
    }
    reject(new Error('There might be a chance I can fail given the above condition'));
});

// The promise has two params as we know, `resolve` and `reject`
// below I am creating functions for the callbacks needed to resolve or reject the orinuse
const onResolved = (resolvedValue) => console.log(resolvedValue);
const onRejected = (rejectedValue) => console.log(rejectedValue);

// below i have passed both functions as callbacks to our promise
// notice the `.then` on our promise? This contains the callbacks
// to fire whether our promise resolves or rejects. we have one
// callback for each case scenario
promiseDemo.then(onResolved, onRejected);

// then can be called multiple times depending on how the promise is designed
// we can also write our promise differently using anonymous functions. 
// here is what that would look like some say the below is a more declaritive
// or obvious way to create the promise.
// take note: the first example I used named functions, the one below is used
// with anonymous functions. You decide whats best for you but either way will work
promiseDemo.then((resolvedValue) => {
  console.log(resolvedValue);
}, (rejectedValue) => {
  console.log(rejectedValue);
});

/**
 * the output of our promise should look like below:
 * 
 * Output (in 90% of the cases due to the condition)
 *
 * resolving the promise ...
 * youve resolved the promise
 * youve resolved the promise
 * 
 * We see the above twice due to invoking the promise in two different styles
 * */
```

I'm going to offer one more example of how promises look and work. Hopefully by this point you will be able to understand the code below. Please notice how we can join the `then` method to further mutate our resolved value.

```javascript
const timeout = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello from the promise');
  }, 2000);
});

const request = () => fetch('https://rickandmortyapi.com/api/character')

timeout()
  .then(request)
  .then((response) => response.json())
  .then((data) => console.log(data));
```

## Async/Await

Candidly, Async/Await is just syntactical sugar for promises. They're a bit more declarative and easier to read but at the end of the day, they return a Promise object just the same. Having an understanding of promises, means you already understand Async/Await. Let's go over an example to demonstrate this.

```javascript
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: 'resolved'
}

asyncCall();
```

On our `asyncCall` declaration you'll notice the function is prefixed with the async keyword. having the `async` keyword prior to our function declaration allows us to asynchronusly wait for a value without blocking the single thread JavaScript runs on. 

Async/Await will always return a Promise which will be resolved or rejected just as our work with Promises prviously. There is some exception handling we'll want to include in our asyn/Await patterns to ensure that the function doesn't break on us.

### Description of Async/Await

An async function can contain an await expression that pauses the execution of the async function to wait for the passed Promise's resolution, then resumes the async function's execution and evaluates as the resolved value.

The await keyword is only valid inside async functions. If you use it outside of an async function's body, you will get a SyntaxError.

While the async function is paused, the calling function continues running (having received the implicit Promise returned by the async function).

> The purpose of async/await is to simplify using promises synchronously, and to perform some behavior on a group of Promises. As Promises are similar to structured callbacks, async/await is similar to combining generators and promises. Don't worry about genorators now.

### Examples

```javascript
function resolveAfter2Seconds() {
  console.log('starting slow promise')
  return new Promise(resolve => {
    setTimeout(function() {
      resolve('slow')
      console.log('slow promise is done')
    }, 2000)
  })
}

function resolveAfter1Second() {
  console.log('starting fast promise')
  return new Promise(resolve => {
    setTimeout(function() {
      resolve('fast')
      console.log('fast promise is done')
    }, 1000)
  })
}

async function sequentialStart() {
  console.log('==SEQUENTIAL START==')

  // 1. Execution gets here almost instantly
  const slow = await resolveAfter2Seconds()
  console.log(slow) // 2. this runs 2 seconds after 1.

  const fast = await resolveAfter1Second()
  console.log(fast) // 3. this runs 3 seconds after 1.
}

async function concurrentStart() {
  console.log('==CONCURRENT START with await==');
  const slow = resolveAfter2Seconds() // starts timer immediately
  const fast = resolveAfter1Second() // starts timer immediately

  // 1. Execution gets here almost instantly
  console.log(await slow) // 2. this runs 2 seconds after 1.
  console.log(await fast) // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
}

function concurrentPromise() {
  console.log('==CONCURRENT START with Promise.all==')
  return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
    console.log(messages[0]) // slow
    console.log(messages[1]) // fast
  })
}

async function parallel() {
  console.log('==PARALLEL with await Promise.all==')
  
  // Start 2 'jobs' in parallel and wait for both of them to complete
  await Promise.all([
    (async()=>console.log(await resolveAfter2Seconds()))(),
    (async()=>console.log(await resolveAfter1Second()))()
  ])
}

// This function does not handle errors. See warning below!
function parallelPromise() {
  console.log('==PARALLEL with Promise.then==')
  resolveAfter2Seconds().then((message)=>console.log(message))
  resolveAfter1Second().then((message)=>console.log(message))
}

sequentialStart() // after 2 seconds, logs 'slow', then after 1 more second, 'fast'

// wait above to finish
setTimeout(concurrentStart, 4000) // after 2 seconds, logs 'slow' and then 'fast'

// wait again
setTimeout(concurrentPromise, 7000) // same as concurrentStart

// wait again
setTimeout(parallel, 10000) // truly parallel: after 1 second, logs 'fast', then after 1 more second, 'slow'

// wait again
setTimeout(parallelPromise, 13000) // same as parallel
```

### await and paralleslism
In sequentialStart, execution suspends 2 seconds for the first await, and then another second for the second await. The second timer is not created until the first has already fired, so the code finishes after 3 seconds.

In concurrentStart, both timers are created and then awaited. The timers run concurrently, which means the code finishes in 2 rather than 3 seconds, i.e. the slowest timer.
However, the await calls still run in series, which means the second await will wait for the first one to finish. In this case, the result of the fastest timer is processed after the slowest.

If you wish to fully perform two or more jobs in parallel, you must use await Promise.all([job1(), job2()]), as shown in the parallel example.

# What the heck is the event loop?
[![What the heck is the event loop?](https://img.youtube.com/vi/8aGhZQkoFbQ/0.jpg)](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

# In the Loop with Jake Archibald
[![What the heck is the event loop?](https://img.youtube.com/vi/cCOL7MC4Pl0/0.jpg)](https://www.youtube.com/watch?v=cCOL7MC4Pl0)

