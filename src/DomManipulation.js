import { TodoItem, Project } from "./factory.js";
import { addProjectToStorage, deleteTodoFromStorage, getProjectFromStorage } from "./storage.js";

const newProjectBtn = document.querySelector(".new-project-btn");
const projectDialog = document.querySelector(".project-dialog");
const projectSubmit = document.querySelector(".project-submit");
const todoSubmit = document.querySelector(".todo-submit");

newProjectBtn.addEventListener("click", () => {
	projectDialog.showModal();
});
projectSubmit.addEventListener("click", (event) => {
	event.preventDefault();
	const projectName = document.querySelector("#project-name").value;
	let project = Project(projectName);

	addProjectToStorage(project.id, JSON.stringify(project));
	addProject(project);
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
});

export function addProject(project) {
	//Add the project to the page
	const projectsList = document.querySelector(".projects-list");
	const projectButton = document.createElement("button");
	projectButton.textContent = project.name;
	projectButton.id = project.id;
	projectButton.addEventListener("click", (event) => {
		displayTodoList(event.target.id);
	});
	projectsList.appendChild(projectButton);
	//Add the project to the projects list in the todo form
	const projectSelect = document.querySelector("#todo-project");
	const option = document.createElement("option");
	option.value = project.id;
	option.textContent = project.name;
	projectSelect.appendChild(option);
}
export function displayTodoList(id) {
	let project = JSON.parse(getProjectFromStorage(id));
	const todoContainer = document.querySelector(".todo-items");
	todoContainer.innerHTML = "";
	todoContainer.id = id;
	const projectTitle = document.createElement("h2");
	const newTodoButton = document.createElement("button");
	const todoList = document.createElement("div");
	projectTitle.textContent = "Project : " + project.name;
	newTodoButton.textContent = "New Todo";
	newTodoButton.classList.add("new-todo-btn");
	const todoDialog = document.querySelector(".todo-dialog");
	newTodoButton.addEventListener("click", () => {
		todoDialog.showModal();
	});
	todoList.classList.add("todos-list");
	todoContainer.appendChild(projectTitle);
	todoContainer.appendChild(newTodoButton);
	todoContainer.appendChild(todoList);
	for (let i = 0; i < project.todoList.length; i++) {
		displayTodo(project.todoList[i]);
	}
}
function displayTodo(todo) {
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
	todoDiv.classList.add(todo.priority);
	divTitle.textContent = todo.title;
	divDescription.textContent = todo.description;
	todoProprieties.classList.add("todo-prop");
	todoInfo.classList.add("todo-info");
	todoButtons.classList.add("todo-buttons");
	dueDateTitle.textContent = "Due Date :";
	dueDatePara.textContent = todo.dueDate;
	statusTitle.textContent = "Status :";
	statusPara.textContent = "Undone";
	priorityTitle.textContent = "Priority :";
	priorityPara.textContent = todo.priority;
	editButton.textContent = "Edit";

	delButton.textContent = "Delete";
	delButton.addEventListener("click", (event) => {
		let projectId = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
		deleteTodoFromStorage(todo, projectId);
		event.target.parentNode.parentNode.parentNode.remove();
	});
	statusButton.textContent = "Set Done";
	statusButton.addEventListener("click", (event) => {
		todo.isDone = !todo.isDone;
		statusPara.textContent = todo.isDone ? "Done" : "Undone";
		todoDiv.classList.toggle("done");
	});
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
}
