import { ITodo } from './interfaces';

class TodoList {
	public todoClear: HTMLButtonElement;
	public todoForm: HTMLFormElement;
	public todoItems: ITodo[];
	public todoList: HTMLElement;

	private _todoItemsStorageKey: string = 'myTodoItems';
	private _todoListEmptyString: string = '<li>... add a todo item</li>';

	constructor() {
		this.todoItems = JSON.parse(localStorage.getItem(this._todoItemsStorageKey)) || [];
	}

	/**
	 * Init class
	 *
	 * @return {void}
	 */
	public init(): void {
		this.todoClear = (document.querySelector('.clear') as HTMLButtonElement);
		this.todoForm  = (document.querySelector('.todo') as HTMLFormElement);
		this.todoList  = (document.querySelector('.todo-list') as HTMLElement);

		this.todoClear.addEventListener('click', this._resetTodos.bind(this));
		this.todoForm.addEventListener('submit', this._addTodo.bind(this));
		this.todoList.addEventListener('click', this._handleCheckbox.bind(this));

		this._manageTodoList(this.todoItems, this.todoList);
	}

	/**
	 * Clear the todo list and remove from localstorage
	 *
	 * @return {void}
	 */
	protected _resetTodos() {
		this.todoItems          = [];
		this.todoList.innerHTML = this._todoListEmptyString;

		localStorage.removeItem(this._todoItemsStorageKey);
	}

	/**
	 * On Todo submit
	 *
	 * @param {Event} e
	 * @return {void}
	 */
	protected _addTodo(e: Event): void {
		e.preventDefault();

		const todoText: string = (this.todoForm.querySelector('[name=item]') as HTMLInputElement).value;
		const todoItem: ITodo = {
			done: false,
			todoText,
		};

		this.todoItems.push(todoItem);
		this.todoForm.reset();
		this._manageTodoList(this.todoItems, this.todoList);
		localStorage.setItem(this._todoItemsStorageKey, JSON.stringify(this.todoItems));
	}

	/**
	 * Add the todo to the list
	 *
	 * @param {ITodo[]} todos
	 * @param {HTMLElement} list
	 * @return {void}
	 */
	protected _manageTodoList(todos: ITodo[], list: HTMLElement ): void {
		if (todos.length === 0) {
			list.innerHTML = this._todoListEmptyString;
		} else {
			list.innerHTML = todos.map((todo: ITodo, index: number): string => {
				return `
					<li>
						<input type="checkbox" data-index=${index} id="item${index}" ${ todo.done ? 'checked' : ''} />
		  				<label for="item${index}">${todo.todoText}</label>
					</li>
				`;
			}).join('');
		}
	}

	/**
	 * Handle checkboxe
	 *
	 * @param {Event} e
	 * @return {void}
	 */
	protected _handleCheckbox(e: Event): void {
		if (!(e.target as HTMLElement).matches('input')) {
			return;
		}

		const el: HTMLElement = (e.target as HTMLElement);
		const index: number = parseInt(el.dataset.index, 10);

		this.todoItems[index].done = !this.todoItems[index].done;
		this._manageTodoList(this.todoItems, this.todoList);
		localStorage.setItem(this._todoItemsStorageKey, JSON.stringify(this.todoItems));
	}
}

const todoList = new TodoList();
todoList.init();

export default todoList;
