export interface IDrawSettings {
	style: string;
	lineJoin: string;
	lineCap: string;
	width: number;
}

export interface IDraw {
	style: string;
	lineJoin: string;
	lineCap: string;
	width: number;
	_isDrawing: boolean;
	_lastX: number;
	_lastY: number;
	_hue: number;
	_direction: boolean;
}

export interface ICanvas {
	canvas: HTMLCanvasElement;
	ctx: any;
}
