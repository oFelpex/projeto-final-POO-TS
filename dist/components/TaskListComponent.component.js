import showHomePage from "../pages/TaskListPage.js";
import { saveTasksToLocalStorage, tasks } from "../utils/storage.js";
import TaskDetailsComponent from "./TaskDetailsComponent.component.js";
export default class TaskListComponent {
    constructor(taskId) {
        this.name = tasks[taskId].name;
        this.id = tasks[taskId].id;
        this.status = tasks[taskId].status;
        const toDoContainer = document.getElementById("to-do-container");
        if (toDoContainer)
            toDoContainer.innerHTML += this.render();
        //evento para mudar o status ao clicar no botão de check
        document.querySelectorAll(".check-container").forEach(button => {
            button.addEventListener("click", (event) => {
                const buttonElement = event.target;
                const taskId = Number(buttonElement.id);
                tasks[taskId].status = !tasks[taskId].status;
                saveTasksToLocalStorage();
                console.log(tasks[taskId].status);
                showHomePage();
            });
        });
        //evento para abrir os detalhes ao clicar no nome da task
        document.querySelectorAll(".tasks-name").forEach(paragraph => {
            paragraph.addEventListener("click", (event) => {
                var _a;
                const paragraphElement = event.target;
                const taskId = Number((_a = paragraphElement.previousElementSibling) === null || _a === void 0 ? void 0 : _a.id);
                new TaskDetailsComponent(taskId);
            });
        });
    }
    render() {
        return `
            <div class="tasks-container">
                <button id="${this.id}" type="button" class="check-container ${this.getClassByStatus()}">
                    ${this.status ? "✓" : ""}
                    </button>
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
            button.className = "check-container " + this.getClassByStatus();
            button.innerHTML = `${this.status ? "✓" : ""}<p class="tasks-name">${this.name}</p>`;
        }
    }
}
