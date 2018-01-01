import {
	IPlaysoundEvent,
	ISoundElement
} from './interfaces';

class Drumkit {

	protected _audio: Element[];
	protected _keys: Element[];
	protected _keyAtrribute: string = 'data-key';
	protected _playingClass: string = 'key--playing';

	constructor() {
		this._audio = Array.from(document.querySelectorAll('audio'));
		this._keys = Array.from(document.querySelectorAll('.key'));
	}

	/**
	 * Initialise listeners
	 *
	 * @return void
	 */
	public init(): void {
		this._addAudioIsPlayingListener();
		this._addTransitionEndListenerToKeys();
		window.addEventListener('keydown', this._playsound.bind(this));
	}

	/**
	 * Play sound when user presses a key
	 * This function is the callback for the keydown event listener
	 *
	 * @param {IPlaysoundEvent} event
	 * @return {void}
	 */
	protected _playsound(event: IPlaysoundEvent): void {
		// Find the audio el from the array where the data attr equals the keycode
		this._findEl(String(event.keyCode), this._audio)
			.then((sound: ISoundElement) => {
				// Play the sound if audio el was found
				if (sound) {
					sound.currentTime = 0;
					sound.play();
				}
			}).catch((e) => {
				// tslint:disable-next-line
				console.warn(e);
			});
	}

	/**
	 * Add playing event listener to all audio
	 *
	 * @return {void}
	 */
	protected _addAudioIsPlayingListener(): void {
		// Add event listener to each audio el in the array
		this._audio.forEach((audio: Element) => {
			const key = String(audio.attributes[this._keyAtrribute].value);

			audio.addEventListener('playing', this._keyIsPlaying.bind(this, key));
		});
	}

	/**
	 * Find the key element and add a css class
	 * This function is the callback for the playing event listener
	 *
	 * @param {string} keyCode
	 * @return {void}
	 */
	protected _keyIsPlaying(keyCode: string): void {
		// Find the key el from the array where the data attr equals the keycode
		this._findEl(keyCode, this._keys)
			.then((el: Element) => {
				// Add a playing class if key el found
				if (el) {
					el.classList.add(this._playingClass);
				}
			}).catch((e) => {
				// tslint:disable-next-line
				console.warn(e);
			});
	}

	/**
	 * Add event listeners to keys to remove the active class on transtion end
	 *
	 * @return {void}
	 */
	protected _addTransitionEndListenerToKeys(): void {
		// Add event listener to each key el in the array
		this._keys.forEach((key: Element) => {
			const keyCode = String(key.attributes[this._keyAtrribute].value);

			key.addEventListener('transitionend', () => key.classList.remove(this._playingClass));
		});
	}

	/**
	 * Find an element from the array
	 *
	 * @param {string} code
	 * @param {array} list
	 * @return {Promise<Element|string>}
	 */
	protected _findEl(code: string, list: Element[]): Promise<Element|string> {
		// Find the key el from the array where the data attr equals the keycode
		const el: Element = list.find((item: Element): boolean => {
			return item.attributes[this._keyAtrribute].value === code;
		});
		// return a promise
		return new Promise<Element|string>((resolve, reject) => {
			(el) ? resolve(el) : reject('No element found to match event keycode');
 		});
	}
}

const drumkit = new Drumkit();
drumkit.init();

export default drumkit;
