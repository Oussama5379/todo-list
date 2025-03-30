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
todoSubmit.addEventListener("click", (event) => {
	event.preventDefault();
	const projectId = document.querySelector("#todo-project").value;
	const todoTitle = document.querySelector("#todo-title").value;
	const todoDescription = document.querySelector("#todo-description").value;
	const dueDate = document.querySelector("#due-date").value;
	const priority = document.querySelector("#priority").value;
	let todo = TodoItem(todoTitle, todoDescription, dueDate, priority);
	//Add todo item to local storage
	let project = JSON.parse(getProjectFromStorage(projectId));
	project.todoList.push(todo);
	addProjectToStorage(projectId, JSON.stringify(project));
	//Add the todo to the DOM
	const todoList = document.querySelector(".todos-list");
	const todoDiv = document.createElement("div");
	const divTitle = document.createElement("h4");
	const divDescription = document.createElement("p");
	const todoProprieties = document.createElement("div");
	const todoInfo = document.createElement("div");
	const todoButtons = document.createElement("div");
	const dueDateTitle = document.createElement("h4");
	const statusTitle = document.createElement("h4");
	const priorityTitle = document.createElement("h4");
	const dueDatePara = document.createElement("p");
	const statusPara = document.createElement("p");
	const priorityPara = document.createElement("p");
	const editButton = document.createElement("button");
	const delButton = document.createElement("button");
	const statusButton = document.createElement("button");
	todoDiv.classList.add("todo");
	todoDiv.classList.add(priority);
	divTitle.textContent = todoTitle;
	divDescription.textContent = todoDescription;
	todoProprieties.classList.add("todo-prop");
	todoInfo.classList.add("todo-info");
	todoButtons.classList.add("todo-buttons");
	dueDateTitle.textContent = "Due Date :";
	dueDatePara.textContent = dueDate;
	statusTitle.textContent = "Status :";
	statusPara.textContent = "Undone";
	priorityTitle.textContent = "Priority :";
	priorityPara.textContent = priority;
	editButton.textContent = "Edit";
	delButton.textContent = "Delete";
	statusButton.textContent = "Set Done";
	editButton.classList.add("edit-btn");
	delButton.classList.add("del-btn");
	statusButton.classList.add("status-btn");
	todoButtons.appendChild(editButton);
	todoButtons.appendChild(delButton);
	todoButtons.appendChild(statusButton);
	todoInfo.appendChild(dueDateTitle);
	todoInfo.appendChild(dueDatePara);
	todoInfo.appendChild(statusTitle);
	todoInfo.appendChild(statusPara);
	todoInfo.appendChild(priorityTitle);
	todoInfo.appendChild(priorityPara);
	todoProprieties.appendChild(todoInfo);
	todoProprieties.appendChild(todoButtons);
	todoDiv.appendChild(divTitle);
	todoDiv.appendChild(divDescription);
	todoDiv.appendChild(todoProprieties);
	todoList.append(todoDiv);
});
