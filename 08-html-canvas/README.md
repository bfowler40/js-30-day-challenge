# Exercise 08 - HTML Canvas

Fun with the HTML canvas

Tested in Chrome.

## About this exercise ...

Was a pretty fun little exercise

:book: Class Inheritance

#### JS Class Inheritance

Was quite happy that I approached this from the start with inheritance in mind.

In this case, a canvas class where we get context and size the element could be
used in other situations. So I then declare a draw class and extend the canvas to
avoid repetition.

For example:

```
class Drawing extends Canvas implements IDrawSettings { ... }
```

I also was about to declare an init method in both classes and called the parent
init() from the child(), for example:

```
public init() {
	super.init();
	this._ctxStyle();
	this._addEventListeners();
}
```

Rock :guitar: :guitar: :guitar:

## Tooling

Serve:

`npm run exercise-8`

Build:

`npm build exercise-8`
