
class Colors {

	protected _colorInputs: HTMLInputElement[];

	constructor() {
		this._colorInputs = Array.from(document.querySelectorAll('.color-input'));
	}

	/**
	 * Initialise
	 *
	 * @return {void}
	 */
	public init(): void {
		if (
			this._colorInputs &&
			this._colorInputs.length > 0
		) {
			this._colorInputs.forEach((input: HTMLInputElement) => {
				input.addEventListener('change', this._updateColorVariable);
			});
		}
	}

	/**
	 * Update the color variables on change
	 *
	 * @return {void}
	 */
	protected _updateColorVariable(this: HTMLInputElement): void {
		document.documentElement.style.setProperty(`--${this.name}`, this.value);
	}
}

const colors = new Colors();
colors.init();

export default colors;
