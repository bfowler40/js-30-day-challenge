{
	const divs: HTMLElement[]  = [].slice.call(document.querySelectorAll('div'));
	const trumpet: HTMLElement = (document.querySelector('.trumpet') as HTMLElement);

	divs.forEach((div: HTMLElement) =>
		(div as any).addEventListener('click', log, {
			capture: false,
			once: true,
		}));

	(trumpet as any).addEventListener('click', () => {
		// tslint:disable-next-line
		console.log('Toot Toot Toot!!');
	}, {
		capture: false,
		once: true,
	});

	function log(e): void {
		e.stopPropagation();
		// tslint:disable-next-line
		console.log(this.classList.value);
	}
}
