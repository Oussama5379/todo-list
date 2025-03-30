function TodoItem(todoTitle, todoDescription, todoDueDate, todoPriority) {
	let id = crypto.randomUUID();
	let title = todoTitle,
		description = todoDescription,
		dueDate = todoDueDate,
		priority = todoPriority,
		isDone = false;

	return {
		id,
		description,
		dueDate,
		priority,
		title,
		isDone,
	};
}

function Project(projectName) {
	let todoList = [],
		id = crypto.randomUUID(),
		name = projectName;

	return { id, name, todoList };
}

export { TodoItem, Project };
