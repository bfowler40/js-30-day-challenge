
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
		this.video.addEventListener('click', this._togglePlay.bind(this));
		this.video.addEventListener('play', this._updateButton.bind(this));
		this.video.addEventListener('pause', this._updateButton.bind(this));
		this.video.addEventListener('timeupdate', this._handleProgress.bind(this));

		this.toggle.addEventListener('click', this._togglePlay.bind(this));

		this.skipButtons.forEach((button: HTMLElement) => {
			button.addEventListener('click', this._skip.bind(this));
		});
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
		// progressBar.style.flexBasis = `${percent}%`;
		console.log('video progress: ', percent);
	}

	/**
	 * Skip
	 *
	 * @return {void}
	 */
	protected _skip(e: Event): void {
		const button: HTMLButtonElement = (e.target as HTMLButtonElement);
		console.log('video skip: ', button.dataset.skip);
		this.video.currentTime += parseFloat(button.dataset.skip);
	}

}

const videoPlayer = new VideoPlayer();
videoPlayer.init();

export default videoPlayer;
