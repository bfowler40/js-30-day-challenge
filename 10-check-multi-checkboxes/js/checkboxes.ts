
class Checkboxes {
	protected _checkboxes: HTMLInputElement[];
	protected _lastChecked: EventTarget;

	constructor() {
		this._checkboxes = [].slice.call(document.querySelectorAll('input'));
	}

	/**
	 * Init Method
	 * @return {void}
	 */
	public init(): void {
		this._checkboxes.forEach(
			(checkbox: HTMLInputElement) => checkbox.addEventListener('click', this._handleClick.bind(this))
		);
	}

	/**
	 * Method called when user clicks on checkbox
	 *
	 * @param {Event} e
	 * @return {void}
	 */
	protected _handleClick(e: MouseEvent): void {
		const clickedCheckbox: HTMLInputElement = (e.target as HTMLInputElement);

		// test if shift key was held down and checkbox active
		if (e.shiftKey && clickedCheckbox.checked) {
			this._manageCheckboxes(clickedCheckbox);
		}

		this._lastChecked = e.target;
	}

	/**
	 * Test whether to check the checkbox
	 *
	 * @param {HTMLInputElement} clickedCheckbox
	 * @return {void}
	 */
	protected _manageCheckboxes(clickedCheckbox: HTMLInputElement): void {
		let inBetween: boolean = false;

		this._checkboxes.forEach((checkbox: HTMLInputElement): void => {
			if (checkbox === clickedCheckbox || checkbox === this._lastChecked) {
				inBetween = !inBetween;
			}

			if (inBetween) {
				checkbox.checked = true;
			}
		});
	}
}

const checkboxes = new Checkboxes();
checkboxes.init();

export default checkboxes;
