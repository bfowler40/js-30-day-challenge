
class Geolocation {
	protected _direction: HTMLElement;
	protected _speed: HTMLElement;

	constructor() {
		this._direction = (document.querySelector('.direction') as HTMLElement);
		this._speed     = (document.querySelector('.speed') as HTMLElement);
	}

	/**
	 * Init the class
	 *
	 * @return {void}
	 */
	public init(): void {

		navigator.geolocation.watchPosition((data: any): void => {
			this._direction.textContent = data.coords.heading;
			this._speed.textContent = data.coords.speed;
		}, (err: any): void => {
			console.log(err);
		});
	}
}

const geolocation = new Geolocation();
geolocation.init();

export default geolocation;
