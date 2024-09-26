import { createNewTaskPage } from "./CreateTaskPage.js";
import createNavBar from "../components/NavBar.js";
import showTasksList from "../components/TaskList.js";
import { tasks, loadTasksFromLocalStorage } from "../utils/storage.js";

export default function showHomePage() {
    window.location.hash = '#home';
    loadTasksFromLocalStorage();
    // localStorage.clear();

    const toDoContainer = (document.getElementById("to-do-container") as HTMLDivElement);
    toDoContainer.style.overflowY = "auto";

    toDoContainer.innerHTML = '';

    const buttonNewTask = document.createElement("button");
    buttonNewTask.type = "button";
    buttonNewTask.id = "button-newTask";
    buttonNewTask.innerHTML = "+";

    toDoContainer.append(createNavBar());
    
    tasks.forEach((task) => {
        toDoContainer.append(showTasksList(task));  // Passa a tarefa para o componente
    });
    
    toDoContainer.append(buttonNewTask);
    (document.getElementById("button-newTask") as HTMLElement).addEventListener("click", () => {
        createNewTaskPage();
    });
}