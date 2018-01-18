
class Webcam {
	protected _canvas: HTMLCanvasElement;
	protected _context: any;
	protected _picture: HTMLButtonElement;
	protected _player: HTMLVideoElement;
	protected _strip: HTMLElement;

	constructor() {
		this._canvas  = (document.querySelector('.canvas') as HTMLCanvasElement);
		this._context = this._canvas.getContext('2d');
		this._picture = (document.querySelector('.picture') as HTMLButtonElement);
		this._player  = (document.querySelector('.player') as HTMLVideoElement);
		this._strip   = (document.querySelector('.strip') as HTMLElement);

		this._player.addEventListener('canplay', () => { this._paintToCanvas(); });
		this._picture.addEventListener('click', this._takePhoto.bind(this));
	}

	/**
	 * Get the webcam stream and play to <video>
	 *
	 * @return {void}
	 */
	public getVideo(): void {
		navigator.mediaDevices.getUserMedia({ video: true, audio: false})
			.then((localMediaStream: any) => {
				this._player.src = window.URL.createObjectURL(localMediaStream);
				this._player.play();
			})
			.catch((err: Error) => { console.log('Error ', err); });
	}

	/**
	 * Paint to canvas
	 *
	 * @return {Interval}
	 */
	protected _paintToCanvas(): number {
		const width: number  = this._player.width;
		const height: number = this._player.height;

		this._canvas.width  = width;
		this._canvas.height = height;

		return setInterval(() => {
			this._context.drawImage(this._player, 0, 0, width, height);
			// Get them pixels
			const pixels = this._context.getImageData(0, 0, width, height);

			this._context.putImageData(pixels, 0, 0);
		}, 16);
	}

	/**
	 * Take a photo!
	 *
	 * @return {void}
	 */
	protected _takePhoto(): void {
		const data: string = this._canvas.toDataURL('image/jpeg');
		const link: HTMLAnchorElement = document.createElement('a');

		link.href = data;
		link.setAttribute('download', 'Webcam duder');
		link.innerHTML = `<img src="${data}" class="thumbnail" alt="Webcam duder!" />`;

		this._strip.insertBefore(link, this._strip.firstChild);
	}
}

const webcam = new Webcam();
webcam.getVideo();

export default webcam;
