import showHomePage from "./TaskListPage.js";
import HeaderComponent from "../components/HeaderComponent.component.js";
import { Task, tasks, saveTasksToLocalStorage } from "../utils/storage.js";

export function createNewTaskPage() {
    window.location.hash = '#createTaskPage';
    
    new HeaderComponent("Criar Tarefas");
    
    const toDoContainer = (document.getElementById("to-do-container") as HTMLElement);
    toDoContainer.scrollTo({top: 0, behavior: 'smooth'});
    toDoContainer.style.overflowY = "hidden";

    const createNewTaskPage = (document.createElement("div") as HTMLElement);
    createNewTaskPage.id = ("createNewTaskPage");

    const formCreateNewTask = document.createElement("form");
    formCreateNewTask.id = ("containerCreateNewTask");
    formCreateNewTask.addEventListener("submit", (event) => {
        event.preventDefault();

        const taskName: string = (document.getElementById("inputNameNewTask") as HTMLInputElement).value;
        const taskDescription: string = (document.getElementById("inputDescriptionNewTask") as HTMLTextAreaElement).value;

        if(taskName.trim() !== "") {
            createNewTask(taskName, taskDescription, new Date(), tasks.length, false);
            showHomePage();
        }
    });

    const labelNameNewTask = document.createElement("label");
    labelNameNewTask.htmlFor = "inputNameNewTask";
    labelNameNewTask.classList.add("labelNewTask")
    labelNameNewTask.innerHTML = "Nome:";

    const inputNameNewTask = document.createElement("input");
    inputNameNewTask.id = "inputNameNewTask";
    inputNameNewTask.classList.add("inputNewTask");
    inputNameNewTask.placeholder = "Nome da Tarefa";
    inputNameNewTask.minLength = 2;
    inputNameNewTask.maxLength = 25;
    inputNameNewTask.required = true;

    const labelDescriptionNewTask = document.createElement("label");
    labelDescriptionNewTask.htmlFor = "inputDescriptionNewTask";
    labelDescriptionNewTask.classList.add("labelNewTask");
    labelDescriptionNewTask.innerHTML = "Descrição:";

    const inputDescriptionNewTask = document.createElement("textArea") as HTMLTextAreaElement;
    inputDescriptionNewTask.placeholder = "Descrição da sua tarefa";
    inputDescriptionNewTask.id = "inputDescriptionNewTask";
    inputDescriptionNewTask.classList.add("inputNewTask");
    inputDescriptionNewTask.maxLength = 360;


    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons-container");

    const buttonCreateNewTask = document.createElement("button");
    buttonCreateNewTask.classList.add("buttonNewTask");
    buttonCreateNewTask.type = "submit";
    buttonCreateNewTask.innerHTML = "Criar Tarefa";

    const buttonCancelNewTask = document.createElement("button");
    buttonCancelNewTask.classList.add("buttonNewTask");
    buttonCancelNewTask.type = "button";
    buttonCancelNewTask.innerHTML = "Cancelar";
    buttonCancelNewTask.addEventListener("click", () => {
        showHomePage();
    })

    buttonsContainer.append(buttonCreateNewTask, buttonCancelNewTask)
    
    formCreateNewTask.append(labelNameNewTask, inputNameNewTask, labelDescriptionNewTask, inputDescriptionNewTask, buttonsContainer);

    createNewTaskPage.append(formCreateNewTask);
    toDoContainer.append(createNewTaskPage);
}
function createNewTask(name:string, description: string, date: Date, id: number, status: boolean){
    const newTask = new Task(name, description, date, id, status);
    tasks.push(newTask);
    saveTasksToLocalStorage();
    console.log('todas as tasks:', tasks);
}