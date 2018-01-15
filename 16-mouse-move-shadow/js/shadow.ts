
class Shadow {
	protected _container: HTMLElement;
	protected _shadow: string;
	protected _title: HTMLElement;
	protected _walk: number;

	constructor() {
		this._container = (document.querySelector('.container') as HTMLElement);
		this._shadow    = 'rgba(0,0,0,0.1)';
		this._title     = (document.querySelector('.title-text') as HTMLElement);
		this._walk      = 20;
	}

	/**
	 * Init class
	 *
	 * @return {void}
	 */
	public init(): void {
		this._container.addEventListener('mousemove', this._handleShadow.bind(this));
	}

	/**
	 * Handle the text shadow
	 *
	 * @param {Event} e
	 * @return {void}
	 */
	protected _handleShadow(e: MouseEvent) {
		const target: HTMLElement = (e.target as HTMLElement);
		const {
			offsetWidth: width,
			offsetHeight: height,
		} = this._container;
		let {
			offsetX: x,
			offsetY: y,
		} = e;

		if (target !== this._container) {
			x = x + target.offsetLeft;
			y = y + target.offsetTop;
		}

		const xWalk = Math.round((x / width * this._walk) - (this._walk / 2));
		const yWalk = Math.round((y / height * this._walk) - (this._walk / 2));

		this._title.style.textShadow = `${xWalk}px ${yWalk}px 0 ${this._shadow}`;
	}

}

const shadow = new Shadow();
shadow.init();

export default shadow;
