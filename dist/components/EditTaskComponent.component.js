import { taksStatus, taskMonth, taskWeekDay } from "../pages/TaskDetailPage.js";
import showHomePage from "../pages/TaskListPage.js";
import { tasks, saveTasksToLocalStorage } from "../utils/storage.js";
import HeaderComponent from "./HeaderComponent.component.js";
export default class EditTaskComponent {
    constructor(taskId) {
        var _a, _b;
        new HeaderComponent("Editar Tarefas");
        this.name = tasks[taskId].name;
        this.description = tasks[taskId].description;
        this.date = new Date(tasks[taskId].date);
        this.id = tasks[taskId].id;
        this.status = tasks[taskId].status;
        (_a = document.getElementById("buttonEditTask")) === null || _a === void 0 ? void 0 : _a.remove();
        (_b = document.getElementById("buttonCancelEditTask")) === null || _b === void 0 ? void 0 : _b.remove();
        const toDoContainer = document.getElementById("to-do-container");
        if (toDoContainer)
            toDoContainer.innerHTML += this.render();
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
    }
    render() {
        return `
            <div id="task-details">
                <p>Nome da Tarefa:</p>
                <input id="inputNameNewTask" class="inputNewTask" value="${this.name}" placeholder="Nome da Tarefa" minlength="2" maxlength="25" required disabled>
                <p>Detalhes da Tarefa:</p>
                <textarea placeholder="Descrição da sua tarefa" id="inputDescription-details" maxlength="360" disabled>${this.description}</textarea>
                <p>Data da criação:<br>${taskWeekDay(this.date.getDay())}, dia ${this.date.getDate()} de ${taskMonth(this.date.getMonth() + 1)} de ${this.date.getFullYear()}.<br>A tarefa foi criada às ${this.date.getHours()} horas, ${this.date.getMinutes()} minutos e ${this.date.getSeconds()} segundos.<br>
                Status da tarefa: ${taksStatus(this.status)}</p>
                
            </div>
            <button type="button" id="buttonSaveChange" class="buttonNewTask">Salvar Alterações</button>
            <button type="button" id="buttonCancelChange" class="buttonNewTask">Discartar Alterações</button>
            <button type="button" id="buttonEraseTask" class="buttonNewTask">Apagar Tarefa</button>
        `;
    }
}
