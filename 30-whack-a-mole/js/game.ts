
class Game {
	protected _finished: HTMLElement;
	protected _holes: HTMLElement[];
	protected _holeActiveClass: string = 'hole--up';
	protected _lastHole: HTMLElement;
	protected _moles: HTMLElement[];
	protected _score: number = 0;
	protected _scoreBoard: HTMLElement;
	protected _startButton: HTMLButtonElement;
	protected _timeUp: boolean = false;

	constructor() {
		this._finished    = (document.querySelector('.finished') as HTMLElement);
		this._holes       = [].slice.call(document.querySelectorAll('.hole'));
		this._moles       = [].slice.call(document.querySelectorAll('.mole'));
		this._scoreBoard  = (document.querySelector('.score') as HTMLElement);
		this._startButton = (document.querySelector('#newGame') as HTMLButtonElement);
	}

	/**
	 * Init the class
	 *
	 * @return {void}
	 */
	public init(): void {
		this._moles.forEach((mole: HTMLElement) => {
			mole.addEventListener('click', (e: Event) => this._bonk(e));
		});

		this._startButton.addEventListener('click', () => this._startGame());
	}

	/**
	 * Return a random time
	 *
	 * @param {number} max
	 * @param {number} min
	 * @return {number}
	 */
	protected _randomTime(max: number, min: number): number {
		return Math.round(Math.random() * (max - min) + min);
	}

	/**
	 * Return a random hole, not the same as the last
	 *
	 * @param {HTMLElement[]} holes
	 * @return {HTMLElement}
	 */
	protected _randomHole(holes: HTMLElement[]): HTMLElement {
		const index: number = Math.floor(Math.random() * holes.length);

		if (holes[index] === this._lastHole) {
			return this._randomHole(this._holes);
		}

		this._lastHole = holes[index];
		return holes[index];
	}

	/**
	 * Make the mole pop up from a random hole
	 *
	 * @return {void}
	 */
	protected _peep(): void {
		const time: number      = this._randomTime(200, 1000);
		const hole: HTMLElement = this._randomHole(this._holes);

		hole.classList.add(this._holeActiveClass);
		// remove active class and recursively call function to show another mole
		setTimeout(() => {
			hole.classList.remove(this._holeActiveClass);
			if (!this._timeUp) {
				this._peep();
			} else {
				this._gameOver();
			}
		}, time);
	}

	/**
	 * When clicking on a mole
	 *
	 * @param {Event} e
	 * @return {void}
	 */
	protected _bonk(e: Event): void {
		if (!e.isTrusted) {
			return; // They Cheated!!!
		}

		this._score++;
		this._keepScore(this._score);

		const mole: HTMLElement = (e.target as HTMLElement);
		(mole.parentNode as HTMLElement).classList.remove(this._holeActiveClass);
	}

	/**
	 * Start a game
	 *
	 * @return {void}
	 */
	protected _startGame(): void {
		this._finished.textContent = '';
		this._timeUp               = false;

		this._keepScore();
		this._peep();
		// Run the game for 10 seconds
		setTimeout(() => this._timeUp = true, 10000);
	}

	/**
	 * Update Score
	 *
	 * @return {void}
	 */
	protected _keepScore(score: number = 0): void {
		this._score                  = score;
		this._scoreBoard.textContent = `${ score }`;
	}

	/**
	 * Game Over
	 *
	 * @return {void}
	 */
	protected _gameOver(): void {
		this._finished.textContent = `Game Over!! You scored ${this._score}`;
	}
}

const game = new Game();
game.init();

export default game;
