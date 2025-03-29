function addProjectToStorage(id, project) {
	localStorage.setItem(id, project);
}
function deleteProjectFromStorage(id) {
	localStorage.removeItem(id);
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
