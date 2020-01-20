# COMP 3133 - week 03
## Node For Networking


### fs
One of the main distinctions between Node and JavaScript, is Node's ability to intereact with the local file system. Quite similarly to how PHP, C# or any other language you've worked with outside of a browser, files can be processed just the same with Node.

Using the `fs` API which comes out of the box with Node, allows you to read, write, modify and delete files. You can traverse directories and create file paths as well. For most of the functionality found in `fs` you'll be dealing with asynchronous patterns by default. When you want to perform a synchronous operation, you actually have to explicitly say so.

Here's an example, notice that the method in use has the word `Sync` in it:

```js
const fs = require('fs')

try {
  fs.unlinkSync('/tmp/foo')
  console.log('successfully deleted /tmp/foo')
} catch (err) {
  // proper error handling here
}
```

Remember, when writing good Node, you want to ensure the code you write is non-blocking. One common gotcha when writing async code is that some operations which are dependent on others may finish before one another. There is no guaranteed ordering so the structure of your code is something you'll want to pay attention to. 

Here are two examples. The first snippet will be prone to errors because `fs.stat()` has the potential to finish it's task before the `fs.rename()` operation.\

```js
fs.rename('/tmp/hello', '/tmp/world', (err) => {
  if (err) throw err
  console.log('renamed complete')
});
fs.stat('/tmp/world', (err, stats) => {
  if (err) throw err
  console.log(`stats: ${JSON.stringify(stats)}`)
})
```

To correctly order the operations, we'd just want to rearrange things so stat is completed in the callback of `fs.rename`.

```js
fs.rename('/tmp/hello', '/tmp/world', (err) => {
  if (err) throw err
  fs.stat('/tmp/world', (err, stats) => {
    if (err) throw err;
    console.log(`stats: ${JSON.stringify(stats)}`)
  })
})
```

When specifying a filepath to an fs method, most of them accept the path in the form of a string, a Buffer or a URL object using the `file:` protocol.

String form paths are interpreted as UTF-8 character sequences identifying the absolute or relative filename. Relative paths will be resolved relative to the current working directory as specified by process.cwd().

Here's an example of `fs` opening and closing a file.

```js
const fs = require('fs');

fs.open('/open/some/file.txt', 'r', (err, fd) => {
  if (err) throw err
  fs.close(fd, (err) => {
    if (err) throw err
  });
})
```

Paths specified using a Buffer are useful primarily on certain POSIX operating systems that treat file paths as opaque byte sequences. On such systems, it is possible for a single file path to contain sub-sequences that use multiple character encodings. As with string paths, Buffer paths may be relative or absolute:

```js
fs.open(Buffer.from('/open/some/file.txt'), 'r', (err, fd) => {
  if (err) throw err
  fs.close(fd, (err) => {
    if (err) throw err
  })
})
```

Wondering what a buffer is? Let's explore this topic a bit more before working with them.

###Buffer
To ELI5, a buffer is just a place in memory, almost like a "waiting area" while data is being processed. How is it used in Node? Well, Node has a built-in buffer class to make it possible for us to manipulate and interact with streams of binary data.

Streams of binary data? You probably already know that computers store and represent data in binaries. Binary is simply a set or a collection of 1s and 0s. For example, the following are five different binaries, five different sets of 1s and 0s:

10, 01, 001, 1110, 00101011

Each number in a binary, each 1 and 0 in a set are called a Bit, which is a short form of Binary digIT.

To store or represent a piece of data, a computer needs to convert that data to its binary representation. For example, to store the number 12, a computer needs to convert 12 to its binary representation which is 1100.

How does a computer know how to do this conversion? Well, it’s pure math. It’s the simple binary numeral system we learned in basic math — expressing a number in the base-2 numeral system. Computers understand that math.

But numbers are not the only data type we work with. We also have strings, images, and even videos. Computers know how to represent all types of data in binaries. Let’s take strings, for example. How will a computer represent the string “L” in binaries? To store any character in binaries, Computers will first convert that character to a number, then convert that number to its binary representation. So for the string “L”, computers will first convert L to a number that represents L. Let’s see how.

### Stream
Whenever you hear the word stream in the context of CS, it's a reference to the movement of data from point a to point b. The concept is, you have a huge amount of data to process like, but you don't need to wait for fall the data to be available before you start processing it.

Basically, this big data is broken down and sent in chunks. So from the original definition of a buffer (“streams of binary data… in the context of… file system”) this simply means binary data being moved in the file system. For example, moving the texts stored in file1.txt to file2.txt.

But how exactly does buffer help us interact with or manipulate binary data while streaming? What exactly is this buffer btw?

### Buffer