import showHomePage from "./TaskListPage.js";
import { tasks, saveTasksToLocalStorage } from "../utils/storage.js";
import { Task } from "../models/Task.js";
//TRANSFORMAR EM CLASSE
export function createTaskPage() {
    const buttonCancelNewTask = document.getElementById("button-cancel-newTask");
    buttonCancelNewTask === null || buttonCancelNewTask === void 0 ? void 0 : buttonCancelNewTask.addEventListener("click", () => {
        showHomePage();
    });
    const formCreateNewTask = document.getElementById("containerCreateNewTask");
    formCreateNewTask === null || formCreateNewTask === void 0 ? void 0 : formCreateNewTask.addEventListener("submit", (event) => {
        event.preventDefault();
        const taskName = document.getElementById("inputNameNewTask").value;
        const taskDescription = document.getElementById("inputDescriptionNewTask").value;
        if (taskName.trim() !== "") {
            createNewTask(taskName, taskDescription, new Date(), tasks.length, false);
            showHomePage();
        }
    });
}
export function createNewTask(name, description, date, id, status) {
    const newTask = new Task(name, description, date, id, status);
    tasks.push(newTask);
    saveTasksToLocalStorage();
    console.log('todas as tasks:', tasks);
}
