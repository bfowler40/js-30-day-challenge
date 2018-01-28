# Exercise 29 - Countdown Timer

Display a countdown timer and finish time with user input.

## About this exercise ...

This was a fun little exercise and pretty straight-forward.

My only comment is about readability, for example:

```
this._intervals.forEach((button: HTMLButtonElement) =>
	button.addEventListener('click', (e: Event) => {
		this._timer(parseInt((e.target as HTMLButtonElement).dataset.time, 10));
	})
);
```

Would the function call be any clearer if the parameter was first stored in a well
named variable?

## Tooling

Serve:

`npm run exercise-29`

Build:

`npm build exercise-29`
