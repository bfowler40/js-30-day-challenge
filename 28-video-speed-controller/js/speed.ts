
class Speed {
	protected _max: number = 4;
	protected _min: number = 0.4;
	protected _speed: HTMLElement;
	protected _speedBar: HTMLElement;

	constructor() {
		this._speed    = (document.querySelector('.speed') as HTMLElement);
		this._speedBar = (document.querySelector('.speed-bar') as HTMLElement);
	}

	/**
	 * Init the class
	 *
	 * @return {void}
	 */
	public init(): void {
		this._speed.addEventListener('mousemove', (e: MouseEvent) => this._handleMove(e));
	}

	/**
	 * Handle mouse move
	 *
	 * @param {MouseEvent}
	 * @return {void}
	 */
	protected _handleMove(e: MouseEvent): void {
		const y: number            = e.pageY - this._speed.offsetTop;
		const percent: number      = y / this._speed.offsetHeight;
		const playbackRate: number = percent * (this._max - this._min) + this._min;

		this._speedBar.style.height = `${ Math.round(percent * 100) }%`;
		this._speedBar.textContent  = `${ playbackRate.toFixed(2) }×`;
	}
}

const speed = new Speed();
speed.init();

export default speed;
