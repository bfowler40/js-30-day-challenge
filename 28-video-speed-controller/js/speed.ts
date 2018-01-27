
class Draggable {
	protected _isDown: boolean = false;
	protected _scrollLeft: number;
	protected _slides: HTMLElement;
	protected _slidesActiveClass: string = 'active';
	protected _startX: number;

	constructor(selector: string) {
		this._slides = (document.querySelector(selector) as HTMLElement);
	}

	/**
	 * Init class
	 *
	 * @return {void}
	 */
	public init(): void {
		this._slides.addEventListener('mousedown', (e: MouseEvent) => this._handleMouseDown(e));
		this._slides.addEventListener('mousemove', (e: MouseEvent) => this._handleMouseMove(e));
		this._slides.addEventListener('mouseleave', this._endDrag.bind(this));
		this._slides.addEventListener('mouseup', this._endDrag.bind(this));
	}

	/**
	 * When user stops dragging the mouse
	 *
	 * @return {void}
	 */
	protected _endDrag(): void {
		this._isDown = false;
		this._slides.classList.remove(this._slidesActiveClass);
	}

	/**
	 * Store some information when the user starts to scroll
	 *
	 * @param {MouseEvent} e
	 * @return {void}
	 */
	protected _handleMouseDown(e: MouseEvent): void {
		this._isDown     = true;
		this._startX     = e.pageX - this._slides.offsetLeft;
		this._scrollLeft = this._slides.scrollLeft;

		this._slides.classList.add(this._slidesActiveClass);
	}

	/**
	 * Update the slides container while mouse down and moving
	 *
	 * @param {MouseEvent} e
	 * @return {void}
	 */
	protected _handleMouseMove(e: MouseEvent) {
		if (!this._isDown) {
			return;
		}

		e.preventDefault();
		const x: number    = e.pageX - this._slides.offsetLeft;
		const walk: number = (x - this._startX) * 3;

		this._slides.scrollLeft = this._scrollLeft - walk;
	}

}

const draggable = new Draggable('.slides-container');
draggable.init();

export default draggable;
