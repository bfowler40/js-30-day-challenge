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

	public init() {
		this._addAudioIsPlayingListener();
		this._addTransitionEndListenerToKeys();
		window.addEventListener('keydown', this._playsound.bind(this));
	}

	/**
	 * Play sound when user presses a key
	 * This function is the callback for the keydown event listener
	 *
	 * @param IPlaysoundEvent event
	 * @return void
	 */
	protected _playsound(event: IPlaysoundEvent) {
		const sound: ISoundElement = this._audio.find((audio: Element): boolean => {
			return audio.attributes[this._keyAtrribute].value === String(event.keyCode);
		});

		if (sound) {
			sound.currentTime = 0;
			sound.play();
		}
	}

	/**
	 * Add playing event listener to all audio
	 *
	 * @return void
	 */
	protected _addAudioIsPlayingListener(): void {
		this._audio.forEach((audio: Element) => {
			const key = String(audio.attributes[this._keyAtrribute].value);

			audio.addEventListener('playing', this._keyIsPlaying.bind(this, key));
		});
	}

	/**
	 * Find the key element and add a css class
	 * This function is the callback for the playing event listener
	 *
	 * @param string keyCode
	 * @return void
	 */
	protected _keyIsPlaying(keyCode: string) {
		const keyEl: Element = this._keys.find((key: Element): boolean => {
			return key.attributes[this._keyAtrribute].value === keyCode;
		});

		if (keyEl) {
			keyEl.classList.add(this._playingClass);
		}
	}

	/**
	 * Add event listeners to keys to remove the active class on transtion end
	 *
	 * @return void
	 */

	protected _addTransitionEndListenerToKeys() {
		this._keys.forEach((key: Element) => {
			const keyCode = String(key.attributes[this._keyAtrribute].value);

			key.addEventListener('transitionend', () => key.classList.remove(this._playingClass));
		});
	}
}

export default new Drumkit();
