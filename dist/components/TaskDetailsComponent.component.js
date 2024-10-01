import { tasks } from "../utils/storage.js";
import HeaderComponent from "./HeaderComponent.component.js";
import EditTaskComponent from "./EditTaskComponent.component.js";
import showHomePage from "../pages/TaskListPage.js";
import { taskWeekDay, taskMonth, taksStatus } from "../pages/TaskDetailPage.js";
export default class TaskDetailsComponent {
    constructor(taskId) {
        var _a;
        new HeaderComponent("Detalhes da Tarefa");
        this.name = tasks[taskId].name;
        this.description = tasks[taskId].description;
        this.date = new Date(tasks[taskId].date);
        this.id = tasks[taskId].id;
        this.status = tasks[taskId].status;
        //ENCONTRAR UMA FORMA MELHOR DE FAZER ISSO:
        window.location.hash = `#details+id=${this.id}`;
        const toDoContainer = document.getElementById("to-do-container");
        if (toDoContainer)
            toDoContainer.innerHTML += this.render();
        const buttonEditTask = document.getElementById("buttonEditTask");
        buttonEditTask.addEventListener("click", () => new EditTaskComponent(this.id));
        buttonEditTask.style.margin = "20px 50px 0px 60px";
        (_a = document.getElementById("buttonCancelEditTask")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => showHomePage());
    }
    ;
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
            <button type="button" id="buttonEditTask" class="buttonNewTask">Editar Tarefa</button>
            <button type="button" id="buttonCancelEditTask" class="buttonNewTask">Voltar</button>
        `;
    }
}
