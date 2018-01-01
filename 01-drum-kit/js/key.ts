import { IKey } from './interfaces';

class Key {

	protected _el: Element;
	protected _key: IKey;
	protected _root: Element;

	public constructor(key: IKey, root: Element) {
		this._key = key;
		this._root = root;
	}

	get el() {
		return this._el;
	}

	public addKey(): void {
		this._createDomElement()
			.then((response) => this._addClickEvent(response))
			.then((response) => this._addAudioElement());
		// return new Promise<boolean>((resolve, reject) => {
		// 	resolve(true);
		// });
	}

	/**
	 * Create a DOM Element for the key
	 *
	 * @return Promise<Element>
	 */
	protected _createDomElement(): Promise<Element> {
		const el = document.createElement('button');
		el.innerHTML = this._key.key;
		this._root.appendChild(el);
		this._el = el;

		return new Promise<Element>((resolve, reject) => {
			(this._el) ? resolve(el) : reject();
		});
	}

	/**
	 * Add an Click Event Listener to the Element
	 *
	 * @param Element el
	 * @return Promise<boolean>
	 */
	protected _addClickEvent(el: Element): Promise<void> {
		console.log('_addClickEvent ', el);
		el.addEventListener('click', this._onClick);

		return new Promise<void>((resolve, reject) => {
			resolve();
		});
	}

	protected _onClick() {
		console.log('on click');
	}

	/**
	 * Add the audio element to the DOM
	 *
	 */
	protected _addAudioElement() {
		console.log('add Audio element');
	}
}

export default Key;
