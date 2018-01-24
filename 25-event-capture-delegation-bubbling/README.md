# Exercise 25 - Event Capture, Propagation, Bubbling and Once

Explanation of Javascript capture

## About this exercise ...

Today I learned that an options object can be passed as a third parameter on the addEventListener method.

Unfortunately the typescript compiler was expecting the third parameter to be a boolean. I had to cast the HTMLElement
as 'any' as a workaround, but I saw online some folks extended the interface.

## Tooling

Serve:

`npm run exercise-25`

Build:

`npm build exercise-25`
