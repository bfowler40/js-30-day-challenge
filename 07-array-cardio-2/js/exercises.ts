import {
	comments,
	people
} from './data';

import {
	IComment,
	IPeople
} from './interfaces';

{
	const logResult = logHelper();

	/**
	 * Task 1 and 2
	 * Some and Every Checks — Is at least one person 19?
	 *
	 * Array.prototype.some()
	 * The some() method tests whether at least one element in the array
	 * passes the test implemented by the provided function.
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
	 *
	 * Array.prototype.every()
	 * The every() method tests whether all elements in the array pass
	 * the test implemented by the provided function.
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
	 */

	const isAdult: boolean = people.some(
		(person: IPeople) => ((new Date()).getFullYear()) - person.year >= 19
	);

	logResult({isAdult});

	const allAdults: boolean = people.every(
		(person: IPeople) => ((new Date()).getFullYear()) - person.year >= 19
	);

	logResult({allAdults});

	/**
	 * Task 3
	 * Find the comment with the ID of 823423
	 *
	 * Array.prototype.find()
	 * The find() method returns the value of the first element in the array
	 * that satisfies the provided testing function. Otherwise undefined is returned.
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
	 */

	const commentFound: IComment|undefined = comments.find(
		(comment: IComment) => comment.id === 823423
	);

	logResult(commentFound);

	/**
	 * Task 4 and 5
	 * Find the comment with the ID of 823423
	 * Delete the comment with the ID of 823423
	 *
	 * Array.prototype.findIndex()
	 * The findIndex() method returns the index of the first element in the
	 * array that satisfies the provided testing function. Otherwise -1 is returned.
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
	 */

	const index: number = comments.findIndex(
		(comment: IComment) => comment.id === 823423
	);

	logResult(index);

	const newComments: IComment[] = [
		...comments.slice(0, index),
		...comments.slice(index + 1),
	];

	logResult(newComments);

}

function logHelper(): (result: any) => void {
	let task: number = 1;
	const log: (result: any) => void = (result: any): void => {
		/* tslint:disable */
		console.log('');
		console.warn(`Task: ${task++}`);
		(typeof result == 'array' || typeof result == 'object') ? console.table(result) : console.log(result);
		/* tslint:enable */
	};

	return log;
}
