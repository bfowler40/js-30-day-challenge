{
	const divs: HTMLElement[]  = [].slice.call(document.querySelectorAll('div'));
	const trumpet: HTMLElement = (document.querySelector('.trumpet') as HTMLElement);

	divs.forEach((div: HTMLElement) =>
		div.addEventListener('click', log));

	trumpet.addEventListener('click', () => {
		// tslint:disable-next-line
		console.log('Toot Toot Toot!!');
	});

	function log(e): void {
		e.stopPropagation();
		// tslint:disable-next-line
		console.log(this.classList.value);
	}
}

{
	// Detect event listener option support
	let passiveSupported: boolean = false;

	const options = Object.defineProperty({}, 'passive', {
		get: () => {
			passiveSupported = true;
		},
	});
}
