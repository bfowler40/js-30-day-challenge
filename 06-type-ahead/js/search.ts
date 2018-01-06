import { ILocation } from './interfaces';

class Search {
	// tslint:disable-next-line
	protected _locationsResource: string = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
	protected _locations: ILocation[] = [];
	protected _searchClear: HTMLButtonElement;
	protected _searchInput: HTMLInputElement;
	protected _searchResults: HTMLElement;

	/**
	 * Init the class
	 * Add event listeners to form inputs
	 *
	 * @return {void}
	 */
	public init(): void {
		// Get locations
		fetch(this._locationsResource)
			.then((blob: Response): Promise<any> => blob.json())
			.then((data: ILocation[]): number => this._locations.push(...data))
			.catch((e: string) => console.warn(e));

		// Get DOM Elements then add event listeners
		this._setDomElements()
			.then(() => this._addEventListeners())
			.catch((e) => console.warn(e));
	}

	/**
	 * Get DOM Elements
	 *
	 * @return {Promise<boolean|string>}
	 */
	private _setDomElements(): Promise<boolean|string> {
		this._searchClear = document.querySelector('#searchClear');
		this._searchInput = document.querySelector('#searchInput');
		this._searchResults  = document.querySelector('#searchResults');

		return new Promise<boolean|string>((resolve, reject) => {
			if (
				this._searchClear &&
				this._searchInput &&
				this._searchResults
			) {
				resolve(true);
			} else {
				reject('Failed to find all DOM Elements');
			}
		});
	}

	/**
	 * Bind listeners to DOM Elements
	 *
	 * @return {void}
	 */
	private _addEventListeners(): void {
		this._searchInput.addEventListener('keyup',
			(e: Event) => this._handleQuery((event.target as HTMLInputElement).value)
		);
		this._searchInput.addEventListener('change',
			(e: Event) => this._handleQuery((event.target as HTMLInputElement).value)
		);
		this._searchClear.addEventListener('click', () => this._clear());
	}

	/**
	 * Handle the user query
	 * If empty clear the list - happens if user enters something then backspaces
	 *
	 * @param {string} query
	 * @return {void}
	 */
	 private _handleQuery(query: string): void {
		if (query !== '') {
			this._findMatches(query)
	 			.then((results: ILocation[]) => this._listResults(query, results))
	 			.catch((noResults: string) => this._searchResults.innerHTML = `<li class="search-no-match">${ noResults }</li>`);
		} else {
			this._clear();
		}
 	}

	/**
	 * Display the results in the list
	 *
	 * @param {string} query
	 * @param {array} results
	 * @return {void}
	 */
	private _listResults(query: string, results: ILocation[]): void {
		const htmlList: string[] = results.map(
			(location: ILocation) => {
				const city  = this._highlightQuery(query, location.city);
				const state = this._highlightQuery(query, location.state);
				return `
					<li class="search-result">${ city }, ${ state }</li>
				`;
			}
		);
		this._searchResults.innerHTML = htmlList.join('');
	}

	/**
	 * Highlight query
	 *
	 * @param {string} query
	 * @param {string} place
	 * @return {string}
	 */
	private _highlightQuery(query: string, place: string): string {
		const regex = new RegExp(query, 'gi');
		return place.replace(regex, `<span class="search-highlight">${ query }</span>`);
	}

	/**
	 * Find the matches
	 *
	 * @param {string} query
	 * @return {Promise<array|string>}
	 */
	private _findMatches(query: string): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			const results: ILocation[] = this._locations.filter(
				(location: ILocation) => {
					const regex = new RegExp(query, 'gi');
					return location.city.match(regex) || location.state.match(regex);
				}
			);

			if (
				Array.isArray(results) &&
				results.length > 0
			) {
				resolve(results);
			} else {
				reject('No Matches');
			}
		});
	}

	/**
	 * Clear the list and input
	 *
	 * @return {void}
	 */
	private _clear(): void {
		this._searchInput.value = '';
		this._searchResults.innerHTML = '';
	}
}

const search = new Search();
search.init();

export default search;
