import { ICanvas } from './interfaces';

export default class Canvas implements ICanvas {
	public canvas: HTMLCanvasElement;
	public ctx: any;

	/**
	 * Init the Canvas
	 *
	 * @return {void}
	 */
	public init() {
		this.canvas = document.querySelector('#canvas');
		this.ctx    = this.canvas.getContext('2d');

		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
	}
}
