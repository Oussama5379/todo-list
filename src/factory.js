function TodoItem(projectTitle, projectDescription, projectDueDate, projectPriority) {
	let title = projectTitle,
		description = projectDescription,
		dueDate = projectDueDate,
		priority = projectPriority,
		idDone = false;
	const setTitle = (newTitle) => {
		title = newTitle;
	};
	const setDescription = (newDescription) => {
		description = newDescription;
	};
	const setDueDate = (newDueDate) => {
		dueDate = newDueDate;
	};
	const setPriority = (newPriority) => {
		priority = newPriority;
	};
	const changeStatus = () => {
		isDone = !idDone;
	};

	const getTitle = () => title;
	const getDescription = () => description;
	const getDueDate = () => dueDate;
	const getPriority = () => priority;
	const getStatus = () => isDone;

	return {
		setDescription,
		setDueDate,
		setPriority,
		setTitle,
		changeStatus,
		getDescription,
		getDueDate,
		getPriority,
		getStatus,
		getTitle,
	};
}
function Project(projectName) {
	let todoList = [],
		id = crypto.randomUUID(),
		name = projectName;
	const getName = () => name;
	const getTodoList = () => todoList;
	const getID = () => id;
	const setName = (newName) => {
		name = newName;
	};
	const addTodoItem = (item) => {
		todoList.push(item);
	};
	const deleteTodoItem = (item) => {
		todoList.filter((element) => element.getID() != item.getId());
	};
	return { getName, getTodoList, setName, getID, addTodoItem, deleteTodoItem };
}
