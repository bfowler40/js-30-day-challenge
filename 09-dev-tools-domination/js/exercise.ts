{
	// Log to console
	console.log('I will be cleared');

	// Clear the console
	console.clear();

	// Console styled
	console.log('%c I am some great text', 'font-size:18px; background:#232323; color:#ffffff; font-weight:bold;');

	// Console warning
	console.warn('This is a warning!!!');

	// Console error
	console.error('This is an error!!!');

	// Console info
	console.info('This is console info');

	// Testing
	const h2: HTMLElement = document.querySelector('h2');
	console.assert(!h2, 'h2 Located');

	const result: () => {} = (): boolean => false;
	console.assert(result, 'h2 Located');

	// View DOM Elements
	console.log(h2);
	console.dir(h2);

	// Grouping together
	const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];

	dogs.forEach((dog: any): void => {
		console.groupCollapsed(`${dog.name}`);
		console.log(`This is ${dog.name}`);
		console.log(`${dog.name} is ${dog.age} years old`);
		console.log(`${dog.name} is ${dog.age * 7} dog years old`);
		console.groupEnd(`${dog.name}`);
	});

	// Counting
	console.count('Wes');
	console.count('Wes');
	console.count('Steve');
	console.count('Steve');
	console.count('Wes');
	console.count('Steve');
	console.count('Wes');
	console.count('Steve');
	console.count('Steve');
	console.count('Steve');
	console.count('Steve');
	console.count('Steve');

	//  Timing
	console.time('fetching data');
	fetch('https://api.github.com/users/wesbos')
		.then((data) => data.json())
		.then((data) => {
			console.timeEnd('fetching data');
			console.log(data);
		});

	// Console Table
	console.table(dogs);

}
