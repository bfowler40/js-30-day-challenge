
class Sticky {
	protected _stickyClass: string = 'sticky_active';
	protected _target: HTMLElement;
	protected _targetTop: number;

	constructor(target: string) {
		this._target = (document.querySelector(target) as HTMLElement);
	}

	/**
	 * Init the class
	 *
	 * @return {void}
	 */
	public init() {
		this._targetTop = this._target.offsetTop;

		window.addEventListener('scroll', this._handleSticky.bind(this));
	}

	/**
	 * Manage the sticky element on scroll
	 *
	 * @return {void}
	 */
	protected _handleSticky() {
		if (window.scrollY >= this._targetTop) {
			document.body.style.paddingTop = `${ this._target.offsetHeight}px`;
			document.body.classList.add(this._stickyClass);
		} else {
			document.body.classList.remove(this._stickyClass);
			document.body.style.paddingTop = `0`;
		}
	}
}

const sticky = new Sticky('.sticky');
sticky.init();

export default sticky;
