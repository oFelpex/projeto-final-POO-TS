import showHomePage from "../pages/TaskListPage.js";
import { tasks, saveTasksToLocalStorage } from "../utils/storage.js";
export default class EditTaskComponent {
    constructor(taskId: number) {
        const toDoContainer = document.getElementById("to-do-container");
        if(toDoContainer) toDoContainer.innerHTML += this.render();
        
        const inputNameNewTask = (document.getElementById("inputNameNewTask") as HTMLInputElement);
        const inputDescriptionDetails = (document.getElementById("inputDescription-details") as HTMLInputElement);

        inputNameNewTask.disabled = false
        inputDescriptionDetails.disabled = false;
        
        const buttonSaveChange = (document.getElementById("buttonSaveChange")as HTMLButtonElement);
        buttonSaveChange.addEventListener("click", () => {
            tasks[taskId].name = inputNameNewTask.value;
            tasks[taskId].description = inputDescriptionDetails.value;
            saveTasksToLocalStorage();
            showHomePage();
        });
        
        const buttonCancelChange = (document.getElementById("buttonCancelChange")as HTMLButtonElement);
        buttonCancelChange.addEventListener("click", () => {
            showHomePage();
        });

        const buttonEraseTask = (document.getElementById("buttonEraseTask") as HTMLButtonElement);
        buttonEraseTask.addEventListener("click", () => {
            tasks.splice(taskId, 1);
            saveTasksToLocalStorage();
            showHomePage();
        });

        document.getElementById("buttonEditTask")?.remove();
        document.getElementById("buttonCancelEditTask")?.remove();
    }
    render() {
        return `
            <button type="button" id="buttonSaveChange" class="buttonNewTask">Salvar Alterações</button>
            <button type="button" id="buttonCancelChange" class="buttonNewTask">Discartar Alterações</button>
            <button type="button" id="buttonEraseTask" class="buttonNewTask">Apagar Tarefa</button>
        `
    }
}