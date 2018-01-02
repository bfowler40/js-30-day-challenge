import { INow } from './interfaces';

class Clock {

	protected _handHour: HTMLElement;
	protected _handMinute: HTMLElement;
	protected _handSecond: HTMLElement;
	protected _rotateOffset: number = 90;

	constructor() {
		const hands: HTMLElement[] = Array.from(document.querySelectorAll('.clock-hand'));

		if (
			!hands ||
			hands.length !== 3
		) {
			// tslint:disable-next-line
			console.warn('Incorrect clock markup');
			return;
		} else {
			[
				this._handHour,
				this._handMinute,
				this._handSecond,
			] = hands;
		}
	}

	/**
	 * Initialise the clock
	 *
	 * @return {void}
	 */
	public init(): void {
		this._updateClock();
		setInterval(this._updateClock.bind(this), 1000);
	}

	/**
	 * Update the clock
	 *
	 * @return {void}
	 */
	private _updateClock() {
		const now: INow = this._dateData();

		this._rotateHand(this._handSecond, 'second', now);
		this._rotateHand(this._handMinute, 'minute', now);
		this._rotateHand(this._handHour, 'hour', now);
	}

	/**
	 * Return an object with the date data that we need
	 *
	 * @return {INow}
	 */
	private _dateData(): INow {
		const date = new Date();

		return {
			hour   : date.getHours(),
			minute : date.getMinutes(),
			second : date.getSeconds(),
		};
	}

	/**
	 * Determine the rotation degree of the hand
	 *
	 * @param {INow} now
	 * @param {string} hand
	 * @return {number} rotation
	 */
	private _determineRotation(now: INow, hand: string) {
		let rotation: number = 0;

		switch (hand) {
			case 'second' :
				rotation = ((now.second / 60) * 360) - this._rotateOffset;
				break;
			case 'minute' :
				rotation = ((now.minute / 60) * 360) + ((now.second / 60) * 6 ) - this._rotateOffset;
				break;
			case 'hour' :
				rotation = ((now.hour / 12) * 360) + ((now.minute / 60) * 30 ) - this._rotateOffset;
				break;
		}

		return rotation;
	}

	/**
	 * Set rotate value to element
	 *
	 * @param {HTMLElement} el
	 * @param {string} hand
	 * @param {INow} now
	 * @return {void}
	 */
	private _rotateHand(el: HTMLElement, hand: string, now: INow): void {
		const degree = this._determineRotation(now, hand);

		el.style.transform = `rotate(${ degree }deg)`;
	}

}

const clock = new Clock();
clock.init();

export default clock;
