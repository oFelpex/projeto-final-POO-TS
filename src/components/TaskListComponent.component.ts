import { Task } from "../utils/storage";
import TaskDetailsComponent  from "./TaskDetails.component.js";

export default class TaskListComponent {
    name: string;
    id: number;
    constructor(task: Task) {
        this.name = task.name;
        this.id = task.id;

        const toDoContainer = document.getElementById("to-do-container");
        if(toDoContainer) toDoContainer.innerHTML += this.render();
        
        document.querySelectorAll(".tasks-name").forEach(element => {
            element.addEventListener("click", () => {
                new TaskDetailsComponent(Number(element.id));
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
