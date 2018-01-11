# Exercise 12 - Key Sequence Detection

Detect user keystrokes and match consecutive against a passcode.

## About this exercise ...

I enjoyed this exercise, mostly as I played around a bit with getters and setters,
but also because I had tried this years ago and this solution is a lot more elegant.

:book: Getters and Setters <br/>

#### Getters and Setters

This is one of those things where i'm not sure if I have executed exactly as intended.
However the typescript linter is satisfied and I am too somewhat.

The concern is that the setter parameter must be the same type as the getter.  
As my class property is an array of strings I pass a spread of the pressed keys and the new key.

Getter and Setter:

```
/**
 * Get the pressed keys
 *
 * @return {array}
 */
private get pressedKeys(): string[] {
	return this.pressed;
}

/**
 * Set the pressed keys
 */
private set pressedKeys(keys: string[]) {
	this.pressed = keys;
}
```

... and then updating

```
/**
 * Handle the key up event
 *
 * @return {void}
 */
protected _onKeyUp(e: KeyboardEvent): void {

	if (e.key !== 'Meta') {
		this.pressedKeys = [...this.pressedKeys, e.key];
	}

	this._testSecret();
}
```

## Tooling

Serve:

`npm run exercise-12`

Build:

`npm build exercise-12`
