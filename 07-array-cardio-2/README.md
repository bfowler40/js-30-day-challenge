# Exercise 07 - Array Cardio Part 2

The second part of the common array methods.

Tested in Chrome.

## About this exercise ...

Another useful albeit brief exercise

:book: Array.prototype.some + Array.prototype.every <br/>
:book: Destructuring

#### Array methods

Some more useful array methods. Again, the 'some' and 'every' methods aren't always at the front of mind but are really useful and can be applied in a lot of common situations.

:thumbsup:

#### Destructing

A handy little use case for destructuring was the simple example provided to create a new array from an existing array less an item (by index):

```
const newComments: IComment[] = [
	...comments.slice(0, index),
	...comments.slice(index + 1),
];
```

I like clever little tricks like this. :squirrel:

## Tooling

Serve:

`npm run exercise-7`

Build:

`npm build exercise-7`
