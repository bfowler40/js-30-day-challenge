
class VideoPlayer {
	public videoContainer: HTMLElement;
	public video: HTMLVideoElement;
	public progress: HTMLElement;
	public progressBar: HTMLElement;
	public toggle: HTMLElement;
	public skipButtons: HTMLElement[];
	public ranges: HTMLElement[];

	constructor() {
		this.videoContainer = document.querySelector('.video-container');
		this.video          = this.videoContainer.querySelector('.video-video');
		this.progress       = this.videoContainer.querySelector('.video-progress');
		this.progressBar    = this.videoContainer.querySelector('.video-progress_filled');
		this.toggle         = this.videoContainer.querySelector('.video-toggle');
		this.skipButtons    = [].slice.call(this.videoContainer.querySelectorAll('.video-skip'));
		this.ranges         = [].slice.call(this.videoContainer.querySelectorAll('.video-slider'));
	}

	/**
	 * Init method
	 *
	 * @return {void}
	 */
	public init(): void {

		// Video event listeners
		this.video.addEventListener('click', this._togglePlay.bind(this));
		this.video.addEventListener('play', this._updateButton.bind(this));
		this.video.addEventListener('pause', this._updateButton.bind(this));
		this.video.addEventListener('timeupdate', this._handleProgress.bind(this));

		// Toggle play pause
		this.toggle.addEventListener('click', this._togglePlay.bind(this));

		// Skip forward/backward
		this.skipButtons.forEach((button: HTMLElement) => {
			button.addEventListener('click', this._skip.bind(this));
		});

		// Range inputs: volume, playback speed
		this.ranges.forEach((range: HTMLInputElement) => {
			range.addEventListener('change', this._handleRangeUpdate.bind(this));
			range.addEventListener('mousemove', this._handleRangeUpdate.bind(this));
		});

		// Scrub video
		let mousedown = false;
		this.progress.addEventListener('click', this._scrub.bind(this));
		this.progress.addEventListener('mousemove', (e) => mousedown && this._scrub(e));
		this.progress.addEventListener('mousedown', () => mousedown = true);
		this.progress.addEventListener('mouseup', () => mousedown = false);
	}

	/**
	 * Play/Pause the video
	 *
	 * @return {void}
	 */
	protected _togglePlay(): void {
		const action: string = this.video.paused ? 'play' : 'pause';

		this.video[action]();
	}

	/**
	 * Update the video button
	 *
	 * @return {void}
	 */
	protected _updateButton(): void {
		const icon: string = this.video.paused ? '►' : '❚ ❚';

		this.toggle.textContent = icon;
	}

	/**
	 * Handle progress
	 *
	 * @return {void}
	 */
	protected _handleProgress(): void {
		const percent: number = (this.video.currentTime / this.video.duration) * 100;

		this.progressBar.style.flexBasis = `${percent}%`;
	}

	/**
	 * Skip
	 *
	 * @return {void}
	 */
	protected _skip(e: Event): void {
		const button: HTMLButtonElement = (e.target as HTMLButtonElement);

		this.video.currentTime += parseFloat(button.dataset.skip);
	}

	/**
	 * Hangle range update - volume, speed
	 *
	 * @return {void}
	 */
	protected _handleRangeUpdate(e: Event) {
		const target = (e.target as HTMLInputElement);

		this.video[target.name] = target.value;
	}

	/**
	 * Scrub
	 *
	 * @return {void}
	 */
	protected _scrub(e: MouseEvent) {
		const scrubTime: number = (e.offsetX / this.progress.offsetWidth) * this.video.duration;

		this.video.currentTime = scrubTime;
	}
}

const videoPlayer = new VideoPlayer();
videoPlayer.init();

export default videoPlayer;
