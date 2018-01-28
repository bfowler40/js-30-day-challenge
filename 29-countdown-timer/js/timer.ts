
class Timer {
	protected _countdown: any;
	protected _customInput: HTMLInputElement;
	protected _intervals: HTMLButtonElement[];
	protected _timeDisplay: HTMLElement;
	protected _timeEnd: HTMLElement;

	constructor() {
		this._customInput = (document.querySelector('.timers-input') as HTMLInputElement);
		this._intervals   = [].slice.call(document.querySelectorAll('.timers-button'));
		this._timeDisplay = (document.querySelector('.time-left') as HTMLElement);
		this._timeEnd     = (document.querySelector('.time-finish') as HTMLElement);
	}

	/**
	 * Init the class
	 *
	 * @return {void}
	 */
	public init(): void {

		this._intervals.forEach((button: HTMLButtonElement) =>
			button.addEventListener('click', (e: Event) => {
				this._timer(parseInt((e.target as HTMLButtonElement).dataset.time, 10));
			})
		);

		this._customInput.addEventListener('keyup', (e: KeyboardEvent): void => {
			if (
				e.keyCode === 13 &&
				this._customInput.value !== ''
			) {
				const seconds = parseInt(this._customInput.value, 10) * 60;

				this._timer(seconds);
			}
		});
	}

	/**
	 * The timer
	 *
	 * @param {number} seconds
	 * @return {void}
	 *
	 */
	protected _timer(seconds: number): void {
		const now: number = Date.now();
		const then: number = now + seconds * 1000;

		clearInterval(this._countdown);
		this._displayTimeLeft(seconds);
		this._displayEndTime(then);
		this._countdown = setInterval(() => this._timerInterval(then), 1000);
	}

	/**
	 * Function to run at setInterval
	 *
	 * @param {number} then
	 * @return {void}
	 */
	protected _timerInterval(then: number): void {
		const secondsLeft: number = Math.round((then - Date.now()) / 1000);

		if (secondsLeft < 0) {
			clearInterval(this._countdown);
			return;
		}

		this._displayTimeLeft(secondsLeft);
	}

	/**
	 * Display the time left
	 *
	 * @param {number} seconds
	 * @return {void}
	 */
	protected _displayTimeLeft(seconds: number): void {
		const minutes: number          = Math.floor(seconds / 60);
		const remainderSeconds: number = seconds % 60;
		const display                  = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;

		document.title                = display;
		this._timeDisplay.textContent = display;
	}

	/**
	 * Display the finish time
	 *
	 * @return {void}
	 */
	protected _displayEndTime(timestamp) {
		const end: Date            = new Date(timestamp);
		const hour: number         = end.getHours();
		const adjustedHour: number = hour > 12 ? hour - 12 : hour;
		const ampm: string         = hour > 12 ? 'pm' : 'am';
		const minutes: number      = end.getMinutes();

		this._timeEnd.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}${ampm}`;
	}

}

const timer = new Timer();
timer.init();

export default timer;
