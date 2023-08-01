export const state = {
	todos: []
};
export const getters = {
	getTodos: (state) => state.todos,
	taskDone: (state) => {
		return state.todos.filter((todo) => todo.status.done).length;
	},
	todosCount: (state) => {
		return state.todos.length;
	}
};

export const actions = {
	initTodos({ commit }) {
		commit('SET_TODOS');
	},

	insertTodo({ commit }, todoName) {
		commit('NEW_TODO', todoName);
	},

	toggleTodo({ commit }, todo) {
		commit('TOGGLE_TODO', todo);
	},

	deleteTodo({ commit }, todo_id) {
		commit('DELETE_TODO', todo_id);
	},

	deleteTaskDone({ commit }) {
		commit('DELETE_TASK_DONE');
	},
	deleteAllTask({ commit }) {
		commit('DELETE_ALL_TASK');
	}
};
export const mutations = {
	SET_TODOS: (state, todos) => {
		let savedtodos = JSON.parse(localStorage.getItem('todos'));
		state.todos = savedtodos != null ? savedtodos : [];
	},

	NEW_TODO: (state, todoName) => {
		state.todos.push( {
			name: todoName,
			status: {
			  done: false,
			}});
		localStorage.setItem('todos', JSON.stringify(state.todos));
	},

	TOGGLE_TODO: (state, todo) => {
		todo.status.done = !todo.status.done;
		localStorage.setItem('todos', JSON.stringify(state.todos));
	},

	DELETE_TODO: (state, todo) => {
		state.todos.splice(state.todos.indexOf(todo), 1);
		localStorage.setItem('todos', JSON.stringify(state.todos));
	},

	DELETE_TASK_DONE: (state) => {
		state.todos = state.todos.filter((todo) => todo.status.done != true);
		localStorage.setItem('todos', JSON.stringify(state.todos));
	},

	DELETE_ALL_TASK: (state) => {
		state.todos = [];
		localStorage.setItem('todos', JSON.stringify(state.todos));
	}
};
