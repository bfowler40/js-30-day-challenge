
class Scroller {
	protected _panels: NodeList;
	protected _panelActiveClass: string = 'panel--in_view';

	/**
	 * Init method
	 *
	 * @return {void}
	 */
	public init(): void {
		this._panels = document.querySelectorAll('.panel');

		window.addEventListener('scroll', this._onScroll.bind(this));
	}

	/**
	 * Handle window scroll
	 *
	 * @return {void}
	 */
	protected _onScroll(): void {
		this._panels.forEach((panel: HTMLElement) => {
			if (
				window.scrollY > panel.offsetTop &&
				window.scrollY < (panel.offsetTop + panel.clientHeight) &&
				!panel.classList.contains(this._panelActiveClass)
			) {
				panel.classList.add(this._panelActiveClass);
			} else if (
				window.scrollY < panel.offsetTop &&
				panel.classList.contains(this._panelActiveClass)
			) {
				panel.classList.remove(this._panelActiveClass);
			} else if (
				window.scrollY > (panel.offsetTop + panel.clientHeight) &&
				panel.classList.contains(this._panelActiveClass)
			) {
				panel.classList.remove(this._panelActiveClass);
			}
		});
	}
}

const scroller = new Scroller();
scroller.init();

export default scroller;
