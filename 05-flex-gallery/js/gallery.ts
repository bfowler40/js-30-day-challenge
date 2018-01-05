
class Gallery {
	protected _panels: NodeList;
	protected _panelActiveClass: string = 'gallery-panel--open';

	constructor() {
		this._panels = document.querySelectorAll('.gallery-panel');
	}

	/**
	 * Init the class
	 *
	 * @return {void}
	 */
	public init(): void {
		if ( this._panels ) {
			this._panels.forEach((panel: HTMLElement): void => {
				panel.addEventListener('click', () => this._onClick(panel));
			});
		}
	}

	/**
	 * Toggle active class when panel clicked
	 *
	 * @param {HTMLElement} panel
	 * @return {void}
	 */
	protected _onClick(panel: HTMLElement): void {
		this._disableActiveElement();
		panel.classList.toggle(this._panelActiveClass);
	}

	/**
	 * Remove the active class if current
	 *
	 * @return {void}
	 */
	protected _disableActiveElement(): void {
		const activeElement = document.querySelector(`.${ this._panelActiveClass }`);

		if (activeElement) {
			activeElement.classList.toggle(this._panelActiveClass);
		}
	}

}

const gallery = new Gallery();
gallery.init();

export default gallery;
