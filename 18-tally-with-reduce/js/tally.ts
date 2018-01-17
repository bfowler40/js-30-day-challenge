{
	// Get all items with time data
	const timeItems: any[] = [].slice.call(document.querySelectorAll('[data-time]'));

	// Convert data-time on all elements to seconds
	const seconds: number = timeItems
		.reduce((total, item) => {
			const time: number = item.dataset
				.time.split(':')
				.map(parseFloat)
				.reduce((a: number, b: number) => (a * 60) + b);

			return total + time;
		}, 0);

	let secondsLeft: number = seconds;

	const hours: number = Math.floor(secondsLeft / 3600);
	secondsLeft = secondsLeft % 3600;

	const mins: number = Math.floor(secondsLeft / 60);
	secondsLeft = secondsLeft % 60;

	console.log(hours, mins, secondsLeft);
}
