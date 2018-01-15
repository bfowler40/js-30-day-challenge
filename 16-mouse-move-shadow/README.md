# Exercise 16 - Mouse Move Shadow

Apply shadow to an element in reference to mouse position

## About this exercise ...

A nice little effect.

:book: Destructuring

#### Object Destructuring and Typescript

When trying to define a type upon destructuring and object I was doing this in correctly
but eventually discovered, I think, the correct way to do this.

Define an interface:

```
export interface IOffsetWidthHeight {
	offsetWidth: number;
	offsetHeight: number;
}
```

and the destructuring:

```
const {
	offsetWidth: width,
	offsetHeight: height,
}: IOffsetWidthHeight = this._container;
```

:cool:

## Tooling

Serve:

`npm run exercise-16`

Build:

`npm build exercise-16`
