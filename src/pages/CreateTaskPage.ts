import showHomePage from "./TaskListPage.js";
import { tasks, saveTasksToLocalStorage } from "../utils/storage.js";
import { Task } from "../models/Task.js";

//TRANSFORMAR EM CLASSE
export function createTaskPage() {
    const buttonCancelNewTask = document.getElementById("button-cancel-newTask");
    buttonCancelNewTask?.addEventListener("click", () => showHomePage());

    const formCreateNewTask = document.getElementById("containerCreateNewTask");
    formCreateNewTask?.addEventListener("submit", (event) => {
        event.preventDefault();

        const taskName: string = (document.getElementById("inputNameNewTask") as HTMLInputElement).value;
        const taskDescription: string = (document.getElementById("inputDescriptionNewTask") as HTMLTextAreaElement).value;

        if(taskName.trim() !== "") {
            createNewTask(taskName, taskDescription, new Date(), tasks.length, false);
            showHomePage();
        }
    });
}

export function createNewTask(name:string, description: string, date: Date, id: number, status: boolean){
    const newTask = new Task(name, description, date, id, status);
    tasks.push(newTask);
    saveTasksToLocalStorage();
    console.log('todas as tasks:', tasks);
}
