import { tasks } from "../utils/storage.js";
import HeaderComponent from "./HeaderComponent.component.js";
export default class TaskDetailsComponent {
    constructor(taskId) {
        new HeaderComponent("Detalhes da Tarefa");
        this.name = tasks[taskId].name;
        this.description = tasks[taskId].description;
        this.date = tasks[taskId].date;
        this.id = tasks[taskId].id;
        this.status = tasks[taskId].status;
        window.location.hash = `#details+id=${this.id}`;
        const toDoContainer = document.getElementById("to-do-container");
        if (toDoContainer)
            toDoContainer.innerHTML += this.render();
    }
    ;
    render() {
        return `
            <div id="task-details">

            </div>
        `;
    }
}
