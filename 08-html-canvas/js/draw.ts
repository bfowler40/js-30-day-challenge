import Canvas from './canvas';

import {
	IDraw,
	IDrawSettings
} from './interfaces';

class Drawing extends Canvas implements IDrawSettings {
	public style: string;
	public lineJoin: string;
	public lineCap: string;
	public width: number;

	private _isDrawing: boolean = false;
	private _lastX: number = 0;
	private _lastY: number = 0;
	private _hue: number = 0;
	private _direction: boolean = true;

	constructor(settings) {
		super();
		Object.assign(this, settings);
	}

	/**
	 * Init the drawing class
	 *
	 * @return {void}
	 */
	public init() {
		super.init();
		this._ctxStyle();
		this._addEventListeners();
	}

	/**
	 * Format the context
	 *
	 * @return {void}
	 */
	private _ctxStyle() {
		this.ctx.strokeStyle = this.style;
		this.ctx.lineJoin = this.lineJoin;
		this.ctx.lineCap = this.lineCap;
		this.ctx.lineWidth = this.width;
	}

	/**
	 * Add event listeners
	 *
	 * @return {void}
	 */
	private _addEventListeners() {
		this.canvas.addEventListener('mousedown', (e) => {
			this._isDrawing = true;
			[this._lastX, this._lastY] = [e.offsetX, e.offsetY];
		});
		this.canvas.addEventListener('mousemove', (e: MouseEvent) => this._draw(e));
		this.canvas.addEventListener('mouseup', () => this._isDrawing = false);
		this.canvas.addEventListener('mouseout', () => this._isDrawing = false);
	}

	/**
	 * Draw
	 *
	 * @return {void}
	 */
	private _draw(e: MouseEvent) {
		if (!this._isDrawing) {
			return;
		}
		this._manageLine(e.offsetX, e.offsetY);
		this._manageHue();
	}

	/**
	 * Manage Line
	 *
	 * @param {number} x - offset x
	 * @param {number} y - offset y
	 * @return {void}
	 */
	private _manageLine(x: number, y: number) {
		this.ctx.beginPath();
		// start from
		this.ctx.moveTo(this._lastX, this._lastY);
		// go to
		this.ctx.lineTo(x, y);
		this.ctx.stroke();
		[this._lastX, this._lastY] = [x, y];
	}

	/**
	 * Manage Hue
	 *
	 * @return {void}
	 */
	private _manageHue() {
		this._hue++;
		if (this._hue >= 360) {
			this._hue = 0;
		}
		this.ctx.strokeStyle = `hsl(${ this._hue }, 100%, 50%)`;
	}

}

const drawSettings: IDrawSettings = {
	lineCap: 'round',
	lineJoin: 'round',
	style: '#BADA55',
	width: 50,
};
const drawing = new Drawing(drawSettings);

drawing.init();

export default drawing;
