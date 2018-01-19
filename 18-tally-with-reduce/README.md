# Exercise 18 - Tally with reduce

Tally a set of times represented as "h: m :s";

## About this exercise ...

Some parts of this exercise were quite interesting

:book: Readability <br/>
:book: Map

#### Readability

Wes make a comment about how the solution could be broken down to a single reduce method.
However this would affect readability of the code. I had a go at breaking this down, and I agree,
it would be hard to understand this looking back 6 months later :laughing:

The result is:

```
// Convert data-time on all elements to seconds
const seconds: number = timeItems
	.reduce((total: number, item: HTMLElement) => {
		const time: number = item.dataset
			.time.split(':')
			.map(parseFloat)
			.reduce((a: number, b: number) => (a * 60) + b);

		return total + time;
	}, 0);
```

#### Map

It was interesting to learn how map in fact works - and I admit that in my mind
I considered it like a syntactic super for looping an array.

This article explained it well: [Captain Obvious on Javascript](http://raganwald.com/2014/05/30/repost-captain-obvious.html)

So now this make better sense:

```
.map(parseFloat)
```

:thumbsup: :thumbsup: :thumbsup:

## Tooling

Serve:

`npm run exercise-18`

Build:

`npm build exercise-18`
