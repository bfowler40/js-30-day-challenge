# Exercise 06 - Type Ahead

Fetching data and filtering based on user input

Tested in Chrome.

## About this exercise ...

This was good exercise and I got sucked into a few black holes :space_invader:

:book: Vi <br/>
:book: Fetch <br/>
:book: Types
:book: DOM <br/>
:book: Promise API <br/>
:book: Pure functions <br/>

#### Vi

As I wrote before I'm using git from the Terminal just to experiment as we have a GUI at work. Anyhoo, had to open the vi cheatsheet to correct a commit I made and it made me realise I wish I knew my way around it a bit more. :neckbeard:

#### Fetch

Might be my first time tinkering with the Fetch API. First black hole was the typings for the response blob — bit of a brain melt bit eventually realised Response suits.	:new_moon:

** Still not really concerned about handing errors in a fancy way for the exercises

My fetch code looks like this:

```
// Get locations
fetch(this._locationsResource)
	.then((blob: Response): Promise<any> => blob.json())
	.then((data: ILocation[]): number => this._locations.push(...data))
	.catch((e: string) => console.warn(e));
```
### Types

Which leads into a little gotcha but the number typing on the above snippet is because I forgot Array.push() returns a number being the array length. :bell:

Another little gotcha was that is was getting a message for a DOM query on a HTMLButtonElement type ... which leads into

### DOM

Strangley, and i'll have to look into this, but .getElementByID() did not match type HTMLButtonElement where .querySelector('#[id]') did. I would have believed earlier they returned the same. :confused:

### Promise API

Starting to use the PromiseAPI more and I really like it. :fire:

Not sure if this is best practice, but adds just a small readability boost, and maybe scalability, for example when initialising my class:

```
// Get DOM Elements then add event listeners
this._setDomElements()
	.then(() => this._addEventListeners())
	.catch((e) => console.warn(e));
```

### Pure functions

I have come to realise that I need to be thinking about writing pure functions a bit more. I am noticing my functions have outside dependencies. :bulb:


## Tooling

Serve:

`npm run exercise-6`

Build:

`npm build exercise-6`
