
declare global {
	// tslint:disable-next-line
	interface Window {
		SpeechRecognition: any;
		webkitSpeechRecognition: any;
	}
}

class Speech {
	protected _recognition: any;
	protected _list: HTMLElement;
	protected _para: HTMLElement;

	constructor() {
		window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

		this._list                       = (document.querySelector('.list') as HTMLElement);
		this._para                       = document.createElement('p');
		this._recognition                = new window.SpeechRecognition();
		this._recognition.interimResults = true;
		this._recognition.lang           = 'en-US';
	}

	/**
	 * Init the speech reconigiton
	 *
	 * @return {void}
	 */
	public init(): void {
		this._list.appendChild(this._para);
		this._recognition.addEventListener('result', (e) => { this._onResult(e); });
		this._recognition.addEventListener('end', this._recognition.start);
		this._recognition.start();
	}

	/**
	 * On speect recognition
	 *
	 * @param {Event} e
	 * @return {void}
	 */
	protected _onResult(e: any): void {

		const transcript = Array.from(e.results)
			.map((result) => result[0])
			.map((result) => result.transcript)
			.join('');

		this._addResult(transcript, e.results[0].isFinal);
	}

	/**
	 * Add paragraph to DOM
	 *
	 * @param {any} transcript
	 * @param {boolean} isFinal
	 * @return {void}
	 */
	protected _addResult(transcript: any, isFinal: boolean): void {
		this._para.textContent = transcript;

		if (isFinal) {
			this._para = document.createElement('p');
			this._list.appendChild(this._para);
		}
	}

}

const speech = new Speech();
speech.init();

export default speech;
