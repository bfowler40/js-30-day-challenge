
class FunnyVoices {
	protected _msg: SpeechSynthesisUtterance;
	protected _options: HTMLInputElement[];
	protected _speakButton: HTMLButtonElement;
	protected _stopButton: HTMLButtonElement;
	protected _voices: any[];
	protected _voicesDropdown: HTMLSelectElement;

	constructor() {
		this._msg            = new SpeechSynthesisUtterance();
		this._voicesDropdown = (document.querySelector('[name="voice"]') as HTMLSelectElement);
		this._options        = [].slice.call(document.querySelectorAll('[type="range"], [name="text"]'));
		this._speakButton    = (document.querySelector('#speak') as HTMLButtonElement);
		this._stopButton     = (document.querySelector('#stop') as HTMLButtonElement);
		this._msg.text       = (document.querySelector('[name="text"]') as HTMLTextAreaElement).value;
	}

	/**
	 * Init the class
	 *
	 * @return {void}
	 */
	public init(): void {
		speechSynthesis.addEventListener('voiceschanged', this._populateVoices.bind(this));
		this._voicesDropdown.addEventListener('change', (e: Event) => this._setVoice(e.target));
		this._speakButton.addEventListener('click', () => this._toggle());
		this._stopButton.addEventListener('click', () => this._toggle(false));

		this._options.forEach((option: HTMLInputElement) =>
			option.addEventListener('change', (e: Event) => this._setOption(e.target as HTMLInputElement)));
	}

	/**
	 * Populate the voices dropdown
	 *
	 * @return {void}
	 */
	protected _populateVoices(): void {
		this._voices = speechSynthesis.getVoices();

		// Filter the voice option by english language
		// and populate the dropdown with the results
		this._voicesDropdown.innerHTML = this._voices
			.filter((voice: SpeechSynthesisVoice): boolean =>
				voice.lang.includes('en'))
			.map((voice: SpeechSynthesisVoice): string =>
				`<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
			.join('');
	}

	/**
	 * Set the voice on user select
	 *
	 * @param {EventTarget} target
	 * @return {void}
	 */
	protected _setVoice(target: EventTarget): void {
		const option: HTMLOptionElement = (target as HTMLSelectElement).selectedOptions[0];

		// set the voice style
		this._msg.voice = this._voices.find((voice: SpeechSynthesisVoice) =>
			voice.name === option.value);

		this._toggle();
	}

	/**
	 * Toggle
	 *
	 * @param {boolean} startOver
	 * @return {void}
	 */
	protected _toggle(startOver: boolean = true): void {
		speechSynthesis.cancel();

		if (startOver) {
			speechSynthesis.speak(this._msg);
		}
	}

	/**
	 * Set the adjustable ranges
	 *
	 * @return {void}
	 */
	protected _setOption(target: HTMLInputElement): void {
		this._msg[target.name] = target.value;
		this._toggle();
	}
}

const funnyVoices = new FunnyVoices();
funnyVoices.init();

export default funnyVoices;
