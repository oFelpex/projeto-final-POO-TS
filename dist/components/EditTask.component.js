import showHomePage from "../pages/TaskListPage.js";
import { tasks, saveTasksToLocalStorage } from "../utils/storage.js";
export default class EditTaskComponent {
    constructor(taskId) {
        var _a, _b;
        const toDoContainer = document.getElementById("to-do-container");
        if (toDoContainer)
            toDoContainer.innerHTML += this.render();
        const navBarTitle = document.getElementById("navBar_title");
        navBarTitle.innerHTML = "Editar Tarefa";
        const inputNameNewTask = document.getElementById("inputNameNewTask");
        const inputDescriptionDetails = document.getElementById("inputDescription-details");
        inputNameNewTask.disabled = false;
        inputDescriptionDetails.disabled = false;
        const buttonSaveChange = document.getElementById("buttonSaveChange");
        buttonSaveChange.addEventListener("click", () => {
            tasks[taskId].name = inputNameNewTask.value;
            tasks[taskId].description = inputDescriptionDetails.value;
            saveTasksToLocalStorage();
            showHomePage();
        });
        const buttonCancelChange = document.getElementById("buttonCancelChange");
        buttonCancelChange.addEventListener("click", () => {
            showHomePage();
        });
        const buttonEraseTask = document.getElementById("buttonEraseTask");
        buttonEraseTask.addEventListener("click", () => {
            tasks.splice(taskId, 1);
            saveTasksToLocalStorage();
            showHomePage();
        });
        (_a = document.getElementById("buttonEditTask")) === null || _a === void 0 ? void 0 : _a.remove();
        (_b = document.getElementById("buttonCancelEditTask")) === null || _b === void 0 ? void 0 : _b.remove();
    }
    render() {
        return `
            <button type="button" id="buttonSaveChange" class="buttonNewTask">Salvar Alterações</button>
            <button type="button" id="buttonCancelChange" class="buttonNewTask">Discartar Alterações</button>
            <button type="button" id="buttonEraseTask" class="buttonNewTask">Apagar Tarefa</button>
        `;
    }
}
