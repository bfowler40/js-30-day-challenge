# Exercise 02 - Clock

It's a clock! :alarm_clock:

Tested in Chrome.

## About this exercise ..

My code departed quite a bit from the exercise solution.

:book: Typings <br/>
:book: Functions

#### Difference between Element and HTMLElement

HTMLElement extends Element. It includes attributes/methods only a HTML Element would need as opposed to say an XML Element, such as those related to events. See [Explanation on Stack Overflow](https://stackoverflow.com/questions/6581680/whats-the-difference-between-htmlelement-and-element). Good to know. :thumbsup:

#### When to declare Functions

In my code there are two functions I declared where a single function may have sufficed. However, the rationale was as follows:

* It made the code more readable; and
* Each function has a single responsibility;

It would be interesting to hear another opinion on whether the rationale is applied correctly here. :microscope:

## Tooling

Serve:

`npm run exercise-2`

Build:

`npm build exercise-2`
