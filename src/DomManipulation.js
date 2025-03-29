import { TodoItem, Project } from "./factory.js";
import {
	addProjectToStorage,
	deleteProjectFromStorage,
	allStorage,
	clearStorage,
} from "./storage.js";
const newTodoBtn = document.querySelector(".new-todo-btn");
const todoDialog = document.querySelector(".todo-dialog");
const newProjectBtn = document.querySelector(".new-project-btn");
const projectDialog = document.querySelector(".project-dialog");
const projectSubmit = document.querySelector(".project-submit");
newTodoBtn.addEventListener("click", () => {
	todoDialog.showModal();
});
newProjectBtn.addEventListener("click", () => {
	projectDialog.showModal();
});
projectSubmit.addEventListener("click", (event) => {
	event.preventDefault();
	const projectName = document.querySelector("#project-name").value;
	let project = Project(projectName);
	let alternativeProject = {
		id: project.getID(),
		name: project.getName(),
		todoList: project.getTodoList(),
	};
	addProjectToStorage(project.getID(), JSON.stringify(alternativeProject));
	//Add the project to the page
	const projectsList = document.querySelector(".projects-list");
	const projectButton = document.createElement("button");
	projectButton.textContent = projectName;
	projectButton.id = project.id;
	projectsList.appendChild(projectButton);
});
