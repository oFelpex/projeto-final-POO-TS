import CreateTaskPage from "../components/CreateTaskComponent.component.js";
import HeaderComponent from "../components/HeaderComponent.component.js";
import TaskListComponent from "../components/TaskListComponent.component.js";
import { tasks, loadTasksFromLocalStorage } from "../utils/storage.js";
import filterTasks from "../utils/FilterTasks.js";

export default function showHomePage() {
    // window.location.hash = '#home';
    loadTasksFromLocalStorage();
    // localStorage.clear();
    
    new HeaderComponent("Lista de Tarefas");

    const toDoContainer = (document.getElementById("to-do-container") as HTMLDivElement);
    toDoContainer.style.overflowY = "auto";

    const buttonNewTask = document.createElement("button");
    buttonNewTask.type = "button";
    buttonNewTask.id = "button-newTask";
    buttonNewTask.innerHTML = "+";

    filterTasks().forEach((task, index) => {task.id = index, new TaskListComponent(task.id)});
    console.log(tasks);

    toDoContainer.append(buttonNewTask);
    (document.getElementById("button-newTask") as HTMLElement).addEventListener("click", () => new CreateTaskPage);
}