import ITaskModel from "../models/Task.js";
import { locationObj } from "../index.js";

export class Task implements ITaskModel {
    name: string;
    description: string;
    date: Date;
    id: number;
    status: boolean;
    constructor(name:string, description: string, date: Date, id: number, status: boolean) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.id = id;
        this.status = status;
    }
    
}
export function createNewTaskPage() {
    window.location.hash = '#createTaskPage';
    locationObj.location = "createTaskPage";

    const toDoContainer = (document.getElementById("to-do-container") as HTMLElement);

    const createNewTaskPage = (document.createElement("div") as HTMLElement);
    createNewTaskPage.id = ("createNewTaskPage");

    const formCreateNewTask = document.createElement("div");
    formCreateNewTask.id = ("containerCreateNewTask");

    const labelNameNewTask = document.createElement("label");
    labelNameNewTask.htmlFor = "inputNameNewTask";
    labelNameNewTask.classList.add("labelNewTask")
    labelNameNewTask.innerHTML = "Nome:";

    const inputNameNewTask = document.createElement("input");
    inputNameNewTask.id = "inputNameNewTask";
    inputNameNewTask.classList.add("inputNewTask");
    inputNameNewTask.placeholder = "Nome da Tarefa";

    const labelDescriptionNewTask = document.createElement("label");
    labelDescriptionNewTask.htmlFor = "inputDescriptionNewTask";
    labelDescriptionNewTask.classList.add("labelNewTask");
    labelDescriptionNewTask.innerHTML = "Descrição:";

    const inputDescriptionNewTask = document.createElement("textArea");
    inputDescriptionNewTask.id = "inputDescriptionNewTask";
    inputDescriptionNewTask.classList.add("inputNewTask");

    const buttonCreateNewTask = document.createElement("button");
    buttonCreateNewTask.classList.add("buttonCreateNewTask");

    formCreateNewTask.appendChild(labelNameNewTask);
    formCreateNewTask.appendChild(inputNameNewTask);
    formCreateNewTask.appendChild(labelDescriptionNewTask);
    formCreateNewTask.appendChild(inputDescriptionNewTask);
    formCreateNewTask.appendChild(buttonCreateNewTask);

    createNewTaskPage.appendChild(formCreateNewTask);
    createNewTaskPage.appendChild(buttonCreateNewTask);

    toDoContainer.appendChild(createNewTaskPage);
}
function createNewTask(name:string, description: string, date: Date, id: number, status: boolean){
    
}