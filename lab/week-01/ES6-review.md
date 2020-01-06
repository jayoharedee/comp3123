
Week 01 - ES6 Review, "MERN" and "MEAN
======================================

Newish ES6 Introcutions
-----------------------

  
> The headings below each represent a new introduction in ECMAScripts ES6 specification. They're some useful tools for us to leverage as developers and make our lives easier and our code more performant.
  

>We'll go through each one, reviewing why they were introduced, what unique problems they solve and how we can use them for our dev needs.
  

  
Default Params
--------------

  
>In earlier iterations of JS, we were a little limited with what we could do when passing params to our functions. In 2019, we can turn the () in our function() {} into a robust, powerful area for us to leverage special features.

>We'll be covering a few other ways in which we can utilize that powers that be in the () of our funcitonal declaration.

```javascript
// old way to solve this problem
function multiply(a, b) {
  b = (typeof b !== 'undefined') ?  b : 10;
  return a * b;
}

// new way to solve this problem
function multiply(a, b = 10) {
  return a * b;
}

multiply(5, 3); // 15
multiply(5);    // 50
multiply(5, undefined); // 50
```

Template Strings
----------------

Template strings is just string concatenation made easy. In previous versions of JavaScript, We had to append using
the + operator in between our strings or play games with variables containing values.

With some much needed additional functionality to help with crafting strings, template strings were introduced in ES6.

Check below for some before and after examples.

```javascript
// old way
var fullDetails = name + addresss + 'New Entry' + ' ' + ' Some other type or string'

// new way 
var fullDetails = `@{name} @{address} New Entry some other type of string`
```
Essentially we are using backticks instead of single or double quotes. If you think a string may have potential for containing a variable, don't hesittate, just use backticks instead. Even if there is no variable, backticks will still be understood as strings.

Arrow Functions
---------------
```js
// Examples of arrow functions

// No params arrow function
const getUserId = () => ({ id: 18 })
// the above would return an object just as defined above { id: 18 }

// No params? No parenths necessary then
const getUserName = _ => ({ user: 'John' })
// still returns { user: 'John' } implicitly

// please note that to return an object in this notation, it's most wise to wrap in parenths

// Single param?
const adminRole = (role) => role === 'admin'  // || role === 'admin' parenths aren't a requisite
// note: you only want to wrap objects with parenths, above would return true or false

// Double params
const checkCache = (cacheTime, currentTime) => cacheTime > currentTime

// need to return something explicitly?
const valueOfEachParam = (x, y) => {
  if (x === 18) {
    return 'The user id is 18'
  } else (y === 37) {
    return 'The user id is 37'
  }
}

// Not a fan of multiple returns?
const whatIsX = (x) => {
  return x === 18 ? 'x is 18' : 'x is not 18'
}

// Not a fan of brackets and return statements?
const whatIsX = (x) => x === 18 ? 'x is 18' : 'x is not 18'
```
Arrow functions blessed us with the ability to write shorter functions. Although that's not the only reason they were introduced in ES6. `this` in JavaScript was a bit confusing to use especially for developers coming from a traditional Object Oritented Programming (OOP) background. To "properly" use `this` in ES3/5 assignment hacks had to be played in order to use `this` as one would expect.

In legacy JS it's common to see a pattern looking similar to something below:
```javascript
var cars = ['toyota', 'hyundai', 'vw'];
document.getElementById('element').addEventListener('click', function() {
  // this is a reference to the element clicked on
  var that = this;

  cars.forEach(function() {
      // this is undefined
      // that is a reference to the element clicked on
  });
});
```

Since JavaScript is lexically scoped, in the above example, `this` would be undefined as with each iteration of the `cars` array, the function changes. When the function changes, so does it's scope because in JavaScript, scope depends on the execution context. The execution context whether global or local inside a function, `this` will behave differently.

By assigning `var that = this;` in our event listener, we're able to store and access the value of `this` by referrencing the `that` variable which holds the value of `this` from the functions previous iteration. Using `that`, isn't the best variable name to use in order to hack around how `this` works. Especially in larger functions. In the above example, I may have used the variable name `elementClicked` instead of `that`.

Up until ES6 `this` was quite a contentious keyword and had developers up in arms on how it should be properly used. Remember: JavaScript was built in about 2 weeks. So yes, there are some quirks to the language and `this` is considered to be one of them. Understanding the quirks allows us to powerfully leverage them for our own advantage.

While in ES5 `this` referred to the parent of the function, in ES6, arrow functions use lexical scoping — `this` refers to it’s current surrounding scope and no further. Thus the inner function knew to bind to the inner function only, and not to the object’s method or the object itself.

Arrow functions do not have their own value for `this`. They inherit, or reach up to the parent scope for that value. It's how we're able to remove the necessity for using `.bind()`.

A couple things to be noted about arrow functions:

* They're ill advised to be used as methods
* They can't be used as a constructor
* They are considered to be anonymous by nature, which can make debugging a bit harder

So it's not all gain and glory when using arrow functions. There's a time and a place for everything. Before learning about when and where we should be using arrow functions in place of regular JS functions, let's take a look at two demonstrations of the same task, one ES5 style, the other ES6.


```js
// es5 way
var boundedScope = {
  id: 42,
  counter: function counter() {
    setTimeout(function() {
      console.log(this.id)
    }.bind(this), 1000) // the bind method had to be used with `this` passed as an argument in order for the legacy function to have the proper execution context
  }
}

// es6 way
var inheritedScope = {
  id: 42,
  counter: function counter() {
    setTimeout(() => {
      console.log(this.id)
    }, 1000) // no bind needed
  }
}
```
Above in the `inheritedScope` object, there is a good use case for an arrow function. ES6 arrow functions can't be bound to the `this` keyword, when `this` is used in an arrow function, it goes searching for it's definition.

An arrow function does not have its own `this`. The `this` value of the enclosing lexical scope is used; arrow functions follow the normal variable lookup rules. So while searching for `this` which is not present in current scope, an arrow function ends up finding the `this` from its enclosing scope.


Scoping
-------
Scope is an area where a variable has access to a value. If we look at the `boundedScope` example used for our ES5 demonstration in the code block above, we needed to use `.bind()` to retrieve the value of `this.id` from the outter scope of the object. This allowed us to console log `this.id`. 

If we didn't bind `this`, our anonymous function in `boundedScope` would return `undefined` as it does not have the ability to know that another property on the object contains a variable called `id`. By binding `this`, we were able to access the id property in the outter object. This is because legacy JS functions don't go searching through the applications scope to find a value.

In JavaScript there are two types of scope, local and global. Global scope is considered to be the outtermost scope. It can be at the top of the application or on the window object. You can think of local scope as anything defined inside of a function or an object. It's locally scoped to the function or it's locally scoped to the object. 

Variables defined inside a function are in local scope while variables defined outside of a function are in the global scope. Each function when invoked creates a new scope.


### Global Scope
When you start writing JavaScript in a document, you are already in the Global scope. There is only one Global scope throughout a JavaScript document. A variable is in the Global scope if it's defined outside of a function.

```javascript
// the scope is by defeault global
// nothing else here, so name would be on the global scope
var name = 'Douglas Crockford'
```
Variables inside the Global scope can be accessed and altered in any other scope.

```javascript
var name = 'Douglas Crockford'
console.log(name) // logs 'Douglas Crockford'

function logName() {
   console.log(name) // 'name' is accessible here and everywhere else
}

logName() // logs 'Douglas Crockford'
```

### Local Scope
Variables defined inside a function are in the local scope. And they have a different scope for every call of that function. This means that variables having the same name can be used in different functions. This is because those variables are bound to their respective functions, each having different scopes, and are not accessible in other functions.

```javascript
// Global Scope
function someFunction() {
  // Local Scope #1
  function someOtherFunction() {
    // Local Scope #2
  }
}

// Global Scope
function anotherFunction() {
  // Local Scope #3
}
// Global Scope
```

### Block Statements
Block statements like `if` and `switch` conditions or `for` and `while` loops, unlike functions, don't create a new scope. Variables defined inside of a block statement will remain in the scope they were already in.

```javascript
if (true) {
  // this 'if' conditional block doesn't create a new scope
  var name = ''Douglas Crockford''; // name is still in the global scope cause var doesn't block scope
}

console.log(name); // logs ''Douglas Crockford''
```

ECMAScript 6 introduced the let and const keywords. These keywords can be used in place of the var keyword.

```javascript
var name = 'Douglas Crockford';

let likes = 'Coding';
const skills = 'Javascript and Complaining';
```

Contrary to the `var` keyword, the `let` and `const` keywords support the declaration of local scope inside block statements.

```javascript
if (true) {
  // this 'if' conditional block doesn't create a scope

  // name is in the global scope because of the 'var' keyword
  var name = 'Douglas Crockford';
  // likes is in the local scope because of the 'let' keyword
  let likes = 'Coding';
  // skills is in the local scope because of the 'const' keyword
  const skills = 'JavaScript and Complaining';
}

console.log(name); // logs 'Douglas Crockford'
console.log(likes); // Uncaught ReferenceError: likes is not defined
console.log(skills); // Uncaught ReferenceError: skills is not defined
```

>Global scope lives as long as your application lives. Local Scope lives as long as your functions are called and executed.

### Context
Many developers often confuse scope and context as if they equally refer to the same concepts. But this is not the case. Scope is what we discussed above and Context is used to refer to the value of this in some particular part of your code. Scope refers to the visibility of variables and context refers to the value of this in the same scope. We can also change the context using function methods, which we will discuss later. In the global scope context is always the Window object.

```javascript
// logs: Window {speechSynthesis: SpeechSynthesis, caches: CacheStorage, localStorage: Storage…}
console.log(this);

function logFunction() {
  console.log(this);
}
// logs: Window {speechSynthesis: SpeechSynthesis, caches: CacheStorage, localStorage: Storage…}
// because logFunction() is not a property of an object
logFunction(); 
```

If scope is in the method of an object, context will be the object the method is part of.

### Execution Context
To remove all confusions and from what we studied above, the word context in Execution Context refers to scope and not context. This is a weird naming convention but because of the JavaScipt specification, we are tied to it.

JavaScript is a single-threaded language so it can only execute a single task at a time. The rest of the tasks are queued in the Execution Context. As I told you earlier that when the JavaScript interpreter starts to execute your code, the context (scope) is by default set to be global. This global context is appended to your execution context which is actually the first context that starts the execution context.

After that, each function call (invocation) would append its context to the execution context. The same thing happens when an another function is called inside that function or somewhere else.

> Each function creates its own execution context

Once the browser is done with the code in that context, that context will then be popped off from the execution context and the state of the current context in the execution context will be transferred to the parent context. The browser always executes the execution context that is at the top of the execution stack (which is actually the innermost level of scope in your code).

> There can only be one global context but any number of function contexts.

<!-- 
  <h2>
    Classes
  </h2>

  <h2>
    Modules
  </h2> -->

