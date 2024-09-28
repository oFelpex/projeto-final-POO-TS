import { tasks } from "../utils/storage.js";
import TaskDetailsComponent  from "./TaskDetails.component.js";

export default class TaskListComponent {
    name: string;
    id: number;
    constructor(taskId: number) {
        this.name = tasks[taskId].name;
        this.id = tasks[taskId].id;

        const toDoContainer = document.getElementById("to-do-container");
        if(toDoContainer) toDoContainer.innerHTML += this.render();
        
        document.querySelectorAll(".tasks-name").forEach(element => {
            element.addEventListener("click", (event: Event) => {
                const button = (event.target as HTMLElement).closest('button');
                if(button) {
                    new TaskDetailsComponent(Number(button.id));
                }
            })
        })
    }
    render() {
        return `
            <div class="tasks-container">
                <button id="${this.id}" type="button" class="check-container">
                    <p class="tasks-name">${this.name}</p>
                </button>
            </div>
        `
    }
}
