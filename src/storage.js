function addProjectToStorage(id, project) {
	localStorage.setItem(id, project);
}
function getProjectFromStorage(id) {
	return localStorage.getItem(id);
}
function deleteTodoFromStorage(todo, projectId) {
	let project = JSON.parse(localStorage.getItem(projectId));
	project.todoList = project.todoList.filter((item) => item.id !== todo.id);
	localStorage.setItem(projectId, JSON.stringify(project));
}
function deleteProjectFromStorage(id) {
	localStorage.removeItem(id);
}
function allStorage() {
	const values = [],
		keys = Object.keys(localStorage);
	let i = keys.length;
	while (i--) {
		values.push(localStorage.getItem(keys[i]));
	}

	return values;
}
function clearStorage() {
	localStorage.clear();
}
export {
	addProjectToStorage,
	deleteProjectFromStorage,
	allStorage,
	clearStorage,
	getProjectFromStorage,
	deleteTodoFromStorage,
};
