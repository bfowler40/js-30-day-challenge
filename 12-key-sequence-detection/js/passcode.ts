import { IPasscode } from './interfaces';

declare const cornify_add: any;

class Passcode implements IPasscode {
	public pressed: string[] = [];
	private passcode: string = 'pretzel';

	/**
	 * Init the class
	 */
	public init() {
		window.addEventListener('keyup', this._onKeyUp.bind(this));
	}

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

	/**
	 * Get the secret code
	 */
	private get secret(): string {
		return this.passcode;
	}

	/**
	 * Handle the key up event
	 *
	 * @return {void}
	 */
	protected _onKeyUp(e: KeyboardEvent): void {
		const pressed = this.pressedKeys;

		if (e.key !== 'Meta') {
			pressed.push(e.key);
			this.pressedKeys = [...pressed];
		}

		this._testSecret();
	}

	/**
	 * Test if the secret code has been keyed
	 *
	 * @return {void}
	 */
	protected _testSecret(): void {
		// remove the number of keys from the end of pressed array
		// equal to the length of the secret passcode
		this.pressedKeys.splice(-this.secret.length - 1, this.pressedKeys.length - this.secret.length);
		// create a string and test if it matches the passcode
		if (this.pressedKeys.join('') === this.secret) {
			console.log('YOU GOT THE PASSCODE!');
			cornify_add();
		}
	}
}

const passcode = new Passcode();
passcode.init();

export default passcode;
