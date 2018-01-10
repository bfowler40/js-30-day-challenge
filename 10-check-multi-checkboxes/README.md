# Exercise 10 - Hold Shift and Check Checkboxes

Allow users to check multiple at once when holding shift and clicking.

Tested in Chrome.

## About this exercise ...

Interesting exercise. The translation of the solution to Typescript was quite simple
and Wes' solution was quite elegant.

I reviewed the solution before viewing the video so there wasn't an opportunity
to try the exercise beforehand, but my approach would have been the same.

:book: Typings <br/>
:book: More typings...

#### Typings and MouseEvent

I had to define the event specifically as a 'MouseEvent' to access the 'shiftKey'
property which was interesting, but not strange.

I have since seen that it also is acceptable to asset as follows:

```
function handler (event: Event) {
    let mouseEvent = event as MouseEvent;
}
```

#### More typings...

I did catch (for a short moment) me however that I had to asset the event target as a HTMLInputElement, like:

```
const clickedCheckbox: HTMLInputElement = (e.target as HTMLInputElement);
```

Good to know.

Mood after this exercise: :grin: :grin: :grin:

## Tooling

Serve:

`npm run exercise-10`

Build:

`npm build exercise-10`
