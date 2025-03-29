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
newTodoBtn.addEventListener("click", () => {
	todoDialog.showModal();
});
newProjectBtn.addEventListener("click", () => {
	projectDialog.showModal();
});
