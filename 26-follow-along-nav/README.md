# Exercise 26 - Follow Along Nav

Fancy dropdown nav effect

## About this exercise ...

Nice little effect by Stripe, and a fun shirt exercise.

🍗 Apply multiple style attributes with javascript.

## Apply multiple style attributes

Neat little trick. Instead of:

```
background.style.setProperty('width',`${coords.width}px`);
background.style.setProperty('height',`${coords.height}px`);
```

We can do this:

```
const style: any  = {
	height: `${ content.height }px`,
	transform: `translateX(${ content.left - this._navCoords.left }px)`,
	width: `${ content.width }px`,
};
Object.assign(this._navBackdrop.style, style);
```

:guitar: :guitar: :guitar:

## Tooling

Serve:

`npm run exercise-26`

Build:

`npm build exercise-26`
