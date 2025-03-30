import "./style.css";
import "./DomManipulation.js";
import { allStorage } from "./storage.js";
window.onload = () => {
	const projects = allStorage();

	projects.map((item) => addProject(JSON.parse(item)));
};
function addProject(project) {
	//Add the project to the page
	const projectsList = document.querySelector(".projects-list");
	const projectButton = document.createElement("button");
	projectButton.textContent = project.name;
	projectButton.id = project.id;
	projectsList.appendChild(projectButton);
	//Add the project to the projects list in the todo form
	const projectSelect = document.querySelector("#todo-project");
	const option = document.createElement("option");
	option.value = project.id;
	option.textContent = project.name;
	projectSelect.appendChild(option);
}
