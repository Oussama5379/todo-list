import { TodoItem, Project } from "./factory.js";
import {
	addProjectToStorage,
	deleteProjectFromStorage,
	allStorage,
	clearStorage,
	getProjectFromStorage,
} from "./storage.js";
const newTodoBtn = document.querySelector(".new-todo-btn");
const todoDialog = document.querySelector(".todo-dialog");
const newProjectBtn = document.querySelector(".new-project-btn");
const projectDialog = document.querySelector(".project-dialog");
const projectSubmit = document.querySelector(".project-submit");
const todoSubmit = document.querySelector(".todo-submit");

newTodoBtn.addEventListener("click", () => {
	todoDialog.showModal();
});
newProjectBtn.addEventListener("click", () => {
	projectDialog.showModal();
});
projectSubmit.addEventListener("click", (event) => {
	event.preventDefault();
	//Add the project to the local storage
	const projectName = document.querySelector("#project-name").value;
	let project = Project(projectName);

	addProjectToStorage(project.id, JSON.stringify(project));
	//Add the project to the page
	const projectsList = document.querySelector(".projects-list");
	const projectButton = document.createElement("button");
	projectButton.textContent = projectName;
	projectButton.id = project.id;
	projectsList.appendChild(projectButton);
	//Add the project to the projects list in the todo form
	const projectSelect = document.querySelector("#todo-project");
	const option = document.createElement("option");
	option.value = project.id;
	option.textContent = projectName;
	projectSelect.appendChild(option);
});
