export interface IPlaysoundEvent extends Event {
	keyCode: number;
}

export interface ISoundElement extends Element {
	currentTime?: number;
	play?: () => void;
}
