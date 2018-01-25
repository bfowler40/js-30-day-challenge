
class Nav {
	protected _classNavBackdropActive: string = 'nav-backdrop--active';
	protected _classNavItemEnter: string  = 'nav-item--enter';
	protected _classNavItemActive: string = 'nav-item--active';
	protected _nav: Element;
	protected _navCoords: ClientRect;
	protected _navBackdrop: HTMLElement;
	protected _navItems: Element[];

	constructor() {
		this._nav         = document.querySelector('.nav');
		this._navBackdrop = (document.querySelector('.nav-backdrop') as HTMLElement);
		this._navCoords   = this._nav.getBoundingClientRect();
		this._navItems    = [].slice.call(document.querySelectorAll('.nav-item'));
	}

	/**
	 * Init class
	 *
	 * @return {void}
	 */
	public init(): void {
		this._navItems.forEach((item: Element) => {
			item.addEventListener('mouseenter', this._showNavItem.bind(this));
			item.addEventListener('mouseleave', this._hideNavItem.bind(this));
		});
		this._navBackdrop.style.setProperty('top', `${ this._navCoords.top }px`);
	}

	/**
	 * On Mouse Enter
	 *
	 * @param {Event} e
	 * @return {void}
	 */
	protected _showNavItem(e: Event): void {
		const item: Element = (e.target as Element);
		item.classList.add(this._classNavItemEnter);
		setTimeout(() => item.classList.contains(this._classNavItemEnter) &&
			item.classList.add(this._classNavItemActive), 150);

		this._handleBackdrop(item);
	}

	/**
	 * On Mouse Leave
	 *
	 * @param {Event} e
	 * @return {void}
	 */
	protected _hideNavItem(e: Event): void {
		const item: Element = (e.target as Element);
		item.classList.remove(this._classNavItemEnter, this._classNavItemActive);
		this._navBackdrop.classList.remove(this._classNavBackdropActive);
	}

	/**
	 * Handle the backdrop effect
	 *
	 * @param {Element} item
	 * @return {void}
	 */
	protected _handleBackdrop(item: Element): void {
		const content: ClientRect = item.querySelector('.nav-content').getBoundingClientRect();
		const style: any  = {
			height: `${ content.height }px`,
			transform: `translateX(${ content.left - this._navCoords.left }px)`,
			width: `${ content.width }px`,
		};
		Object.assign(this._navBackdrop.style, style);
		this._navBackdrop.classList.add(this._classNavBackdropActive);
	}
}

const nav = new Nav();
nav.init();

export default nav;
