function addProjectToStorage(project) {
	localStorage.setItem(project.id, JSON.stringify(project));
}
function deleteProjectFromStorage(project) {
	localStorage.removeItem(project.id);
}
function allStorage() {
	const values = [],
		keys = Object.keys(localStorage),
		i = keys.length;

	while (i--) {
		values.push(localStorage.getItem(keys[i]));
	}

	return values;
}
function clearStorage() {
	localStorage.clear();
}
export { addProjectToStorage, deleteProjectFromStorage, allStorage, clearStorage };
