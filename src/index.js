import "./style.css";
import "./DomManipulation.js";
import { addProject, displayTodoList } from "./DomManipulation.js";
import { addProjectToStorage, allStorage } from "./storage.js";
import { Project } from "./factory.js";
window.onload = () => {
	if (localStorage.getItem("1") === null) {
		let mainProject = Project("Main Project");
		console.log(mainProject);
		mainProject.id = "1";
		addProjectToStorage("1", JSON.stringify(mainProject));
	}
	const projects = allStorage();

	projects.map((item) => addProject(JSON.parse(item)));
	displayTodoList("1");
};
