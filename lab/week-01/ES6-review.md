<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Week 01</title>
</head>

<body>
  <h1>Week 01 - ES6 Review, "MERN" and "MEAN</h1>

  <h1>Newish ES6 Introcutions</h1>

  <p>
    The headings below each represent a new introduction in ECMAScripts ES6 specification. They're some useful tools for
    us to leverage as developers and make our lives easier and our code more performant.
  </p>

  <p>
    We'll go through each one, reviewing why they were introduced, what unique problems they solve and how we can use
    them for our dev needs.
  </p>

  <h2>
    Default Params
  </h2>

  <p>
    In earlier iterations of JS, we were a little limited with what we could do when passing params to our functions. In
    2019, we can turn the () in our function() {} into a robust, powerful area for us to leverage special features.

    W'll be covering a few other ways in which we can utilize that powers that be in the () of our funcitonal
    declaration.
  </p>

  <pre>
    <code>
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
    </code>
  </pre>

  <h2>
    Template Strings
  </h2>

  <p>
    Template strings are just string concatenation made easy. In previous versions of JavaScript, We had to append using
    the + operator in between our strings.

    With some much needed additional functionality needed to help with craftice strings, template strings were
    introduced.

    Check below for some before and after examples.

    <pre>
      <code>
        // old way
        var fullDetails = name + addresss + 'New Entry' + ' ' + ' Some other type or string'

        // new way 
        let fullDetails = `@{name} @{address} New Entry some other type of string`
      </code>
    </pre>

    <p>Essentially we are using backticks instead of single or double quotes. Just backtick everything and craft your
      strings as needed. Developing will be much easier.</p>
  </p>

  <h2>
    Arrow Functions
  </h2>

  <h2>
    Promises
  </h2>

  <h2>
    Scoping
  </h2>

  <h2>
    Classes
  </h2>

  <h2>
    Modules
  </h2>

  <script src="./es6.js"></script>

</body>

</html>