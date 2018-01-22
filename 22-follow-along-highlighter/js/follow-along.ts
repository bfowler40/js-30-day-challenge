
interface ICords {
	height: number;
	left: number;
	top: number;
	width: number;
}

class FollowAlong {
	protected _highlight: HTMLElement;
	protected _links: HTMLAnchorElement[];

	constructor() {
		this._links = [].slice.call(document.querySelectorAll('a'));

		this._addHighlighter();
	}

	/**
	 * Init the class
	 *
	 * @return {void}
	 */
	public init(): void {
		this._links.forEach((link: HTMLAnchorElement) =>
			link.addEventListener('mouseenter', this._handleHover.bind(this)));
	}

	/**
	 * Handle the mouse enter event
	 *
	 * @param {Event} e
	 * @return {void}
	 */
	protected _handleHover(e: Event): void {
		const target: HTMLAnchorElement = (e.target as HTMLAnchorElement);
		const linkCoords: ClientRect    = target.getBoundingClientRect();
		const coords: ICords            = {
			height: linkCoords.height,
			left: linkCoords.left + window.scrollX,
			top: linkCoords.top + window.scrollY,
			width: linkCoords.width,
		};

		this._highlight.style.width = `${coords.width}px`;
		this._highlight.style.height = `${coords.height}px`;
		this._highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
	}

	/**
	 * Add highlighter to the DOM
	 *
	 * @return {void}
	 */
	protected _addHighlighter(): void {
		this._highlight = document.createElement('span');

		this._highlight.classList.add('highlight');
		document.body.appendChild(this._highlight);
	}
}

const followAlong = new FollowAlong();
followAlong.init();

export default followAlong;
