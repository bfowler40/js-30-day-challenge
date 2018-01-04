import {
	boulevards,
	inventors,
	people,
	things
} from './data';

import {
	IInventor,
	ITransport
} from './interfaces';

{
	const exercise = 'table';

	const logResult = logHelper();

	/**
	 * Task 1
	 * Filter the list of inventors for those who were born in the 1500's
	 *
	 * Array.prototype.filter()
	 * The filter() method creates a new array with all elements that pass the
	 * test implemented by the provided function.
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
	 */

	const inventorsBornFifteenHundred: IInventor[] = inventors.filter(
		(inventor: IInventor): boolean => {
			return (inventor.year >= 1500 && inventor.year < 1600);
		}
	);

	logResult(inventorsBornFifteenHundred);

	/**
	 * Task 2
	 * Give us an array of the inventor first and last names
	 *
	 * Array.prototype.map()
	 * The map() method creates a new array with the results of calling a
	 * provided function on every element in the calling array.
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
	 */

	const fullNames: string[] = inventors.map(
		(inventor: IInventor): string => `${ inventor.first } ${ inventor.last }`
	);

	logResult(fullNames);

	/**
	 * Task 3
	 * Sort the inventors by birthdate, oldest to youngest
	 *
	 * Array.prototype.sort()
	 * The sort() method sorts the elements of an array in place and returns the array.
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
	 */

	const ordered: IInventor[] = inventors.sort(
		(prev: IInventor, next: IInventor): number => prev.year > next.year ? 1 : -1
	);

	logResult(ordered);

	/**
	 * Task 4
	 * How many years did all the inventors live?
	 *
	 * Array.prototype.reduce()
	 * The reduce() method applies a function against an accumulator and each
	 * element in the array (from left to right) to reduce it to a single value.
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
	 */

	const totalYears: number = inventors.reduce((total: number, inventor: IInventor): number => {
		return total + (inventor.passed - inventor.year);
	}, 0);

	logResult(`Total years: ${ totalYears }`);

	/**
	 * Task 5
	 * Sort the inventors by years lived
	 *
	 * Array.prototype.sort()
	 */

	const oldest: IInventor[] = inventors.sort(
		(prev: IInventor, next: IInventor): number => {
			return ((prev.passed - prev.year) > (next.passed - next.year)) ? 1 : -1;
		}
	);

	logResult(oldest);

	/**
	 * Task 6
	 * Create a list of Boulevards in Paris that contain 'de' anywhere in the name
	 *
	 * Array.prototype.filter()
	 */

	const de: string[] = boulevards.filter(
		(name: string): boolean => name.includes('de ')
	);

	logResult(de);

	/**
	 * Task 7
	 * Sort the people alphabetically by last name
	 *
	 * Array.prototype.sort()
	 */

	const alpha: string[] = people.sort(
		(prev: string, next: string): number => {
			const [aLast, aFirst] = prev.split(', ');
			const [bLast, bFirst] = next.split(', ');

			return aLast > bLast ? 1 : -1;
		}
	);

	logResult(alpha);

	/**
	 * Task 8
	 * Sum up the instances of each of thing
	 *
	 * Array.prototype.reduce()
	 */

	const transportation: ITransport = things.reduce(
		(obj: ITransport, item: string) => {
			if (!obj.hasOwnProperty(item)) {
				obj[item] = 0;
			}

			obj[item]++;
			return obj;
		}
	, {});

	logResult(transportation);

}

function logHelper(): (result: any) => void {
	let task  = 1;
	const log = (result: any): void => {
		/* tslint:disable */
		console.log('');
		console.warn(`Task: ${task++}`);
		(typeof result == 'array' || typeof result == 'object') ? console.table(result) : console.log(result);
		/* tslint:enable */
	};

	return log;
}
