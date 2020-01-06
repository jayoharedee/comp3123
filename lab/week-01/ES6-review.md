
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
multiply(5, 2); // 10
multiply(5);    // 50

function multiply(a, b = 10) {
  return a * b;
}

multiply(5, 2); // 200
multiply(5);    // 50
multiply(5, undefined); // 5
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

Since JavaScript is lexically scoped, in the above example, `this` would be undefined as with each iteration of the `colours` array, the function changes. When the function changes, so does it's scope because in JavaScript, scope depends on the execution context. The execution context whether global or inside a function, `this` will behave differently.

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
Above is an example of a good use case for an arrow function. ES6 arrow functions can't be bound to the `this` keyword, when `this` is used in an arrow function, it goes searching for it's definition.

An arrow function does not have its own `this`. The `this` value of the enclosing lexical scope is used; arrow functions follow the normal variable lookup rules. So while searching for `this` which is not present in current scope, an arrow function ends up finding the `this` from its enclosing scope.


Scoping
-------
Scope is an area where a variable has access to a value. If we look at the `boundedScope` example used for our ES5 demonstration in the code block above, we needed to use `.bind()` to retrieve the value of `this.id` from the outter scope of the object. This allowed us to console log `this.id`. 

If we didn't bind `this`, our anonymous function in `boundedScope` would return `undefined` as it does not have the ability to know that another property on the object contains a variable called `id`. By binding `this`, we were able to access the id property in the outter object. This is because legacy JS functions don't go searching through the applications scope to find a value.

In JavaScript there are two types of scope, local and global. Global scope is considered to be the outtermost scope. It can be at the top of the application or on the window object. You can think of local scope as anything defined inside of a function or an object. It's locally scoped to the function or it's locally scoped to the object. 

Variables defined inside a function are in local scope while variables defined outside of a function are in the global scope. Each function when invoked creates a new scope.



  <h2>
    Classes
  </h2>

  <h2>
    Modules
  </h2>

