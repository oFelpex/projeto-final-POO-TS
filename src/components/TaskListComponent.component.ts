import showHomePage from "../pages/TaskListPage.js";
import { saveTasksToLocalStorage, tasks } from "../utils/storage.js";
import TaskDetailsComponent from "./TaskDetailsComponent.component.js";

export default class TaskListComponent {
    name: string;
    id: number;
    status: boolean;

    constructor(taskId: number) {
        this.name = tasks[taskId].name;
        this.id = tasks[taskId].id;
        this.status = tasks[taskId].status;

        const toDoContainer = document.getElementById("to-do-container");
        if (toDoContainer) toDoContainer.innerHTML += this.render();

        //evento para mudar o status ao clicar no botão de check
        document.querySelectorAll(".check-container").forEach(button => {
            button.addEventListener("click", (element) => {
                const buttonElement = element.target as HTMLElement;
                const taskId = Number(buttonElement.id);
                
                tasks[taskId].status = !tasks[taskId].status;
                saveTasksToLocalStorage();
                console.log(tasks[taskId].status);
                showHomePage();
            });
        });
        
        //evento para abrir os detalhes ao clicar no nome da task
        document.querySelectorAll(".tasks-name").forEach(paragraph => {
            paragraph.addEventListener("click", (element) => {
                const paragraphElement = element.target as HTMLElement;
                const taskId = Number(paragraphElement.previousElementSibling?.id);
                new TaskDetailsComponent(taskId);
            });
        });
    }
    render() {
        return `
            <div class="tasks-container">
                <div id="${this.id}" type="button" class="check-container ${this.getClassByStatus()}">
                    ${this.status ? "✓" : ""}
                </div>
                <p class="tasks-name">${this.name}</p>
            </div>
        `;
    }
    getClassByStatus() {
        return this.status ? "checked" : "uncheck";
    }
    updateButtonStatus() {
        const button = document.getElementById(String(this.id));
        if (button) {
            button.className = "check-container "+this.getClassByStatus();
            button.innerHTML = `${this.status ? "✓" : ""}<p class="tasks-name">${this.name}</p>`;
        }
    }
}
