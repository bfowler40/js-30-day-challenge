import { ICleanSort } from './interfaces';

class CleanSort {
	public list: string[];

	constructor(list: string[]) {
		this.list = list;
	}

	/**
	 * Sort the array and list alphabetically
	 *
	 * @param {string} selector
	 * @return {void}
	 */
	public listAlpha(selector: string = 'body'): void {
		// sort list without conjunctions
		const sortedList = bands.sort(
			(prev: string, current: string) => this._strip(prev) > this._strip(current) ? 1 : -1
		);
		// append to provided selector
		document.querySelector(selector).innerHTML =
			sortedList.map((item: string): string => `<li class="list-item">${ item }</li>`).join('');
	}

	/**
	 * Remove some words from string
	 *
	 * @param {string} item
	 * @return {string}
	 */
	protected _strip(item: string): string {
		return item.replace(/^(a |the |an )/i, '').trim();
	}
}

const bands: string[] = [
	'The Plot in You',
	'The Devil Wears Prada',
	'Pierce the Veil',
	'Norma Jean',
	'The Bled',
	'Say Anything',
	'The Midway State',
	'We Came as Romans',
	'Counterparts',
	'Oh, Sleeper',
	'A Skylit Drive',
	'Anywhere But Here',
	'An Old Dog',
];

const cleanSort = new CleanSort(bands);
cleanSort.listAlpha('#list');

export default cleanSort;
