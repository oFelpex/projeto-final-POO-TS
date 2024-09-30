import editTaskPage from "../pages/EditTaskPage.js";
import { taksStatus, taskMonth, taskWeekDay } from "../pages/TaskDetailPage.js";
import showHomePage from "../pages/TaskListPage.js";
import { tasks, saveTasksToLocalStorage } from "../utils/storage.js";
import HeaderComponent from "./HeaderComponent.component.js";
export default class EditTaskComponent {
    name: string;
    description: string;
    date: Date;
    id: number;
    status: boolean;

    constructor(taskId: number) {
        new HeaderComponent("Editar Tarefas");

        this.name = tasks[taskId].name;
        this.description = tasks[taskId].description;
        this.date = new Date(tasks[taskId].date);
        this.id = tasks[taskId].id;
        this.status = tasks[taskId].status;

        const toDoContainer = document.getElementById("to-do-container");
        if(toDoContainer) toDoContainer.innerHTML += this.render();
        
        editTaskPage(taskId);
    }
    render() {
        return `
            <div id="task-details">
                <p>Nome da Tarefa:</p>
                <input id="inputNameNewTask" class="inputNewTask" value="${this.name}" placeholder="Nome da Tarefa" minlength="2" maxlength="25" required disabled>
                <p>Detalhes da Tarefa:</p>
                <textarea placeholder="Descrição da sua tarefa" id="inputDescription-details" maxlength="360" disabled>${this.description}</textarea>
                <p>Data da criação:<br>${taskWeekDay(this.date.getDay())}, dia ${this.date.getDate()} de ${taskMonth(this.date.getMonth()+1)} de ${this.date.getFullYear()}.<br>A tarefa foi criada às ${this.date.getHours()} horas, ${this.date.getMinutes()} minutos e ${this.date.getSeconds()} segundos.<br>
                Status da tarefa: ${taksStatus(this.status)}</p>
                
            </div>
            <button type="button" id="buttonSaveChange" class="buttonNewTask">Salvar Alterações</button>
            <button type="button" id="buttonCancelChange" class="buttonNewTask">Retornar ao Início</button>
            <button type="button" id="buttonEraseTask" class="buttonNewTask">Apagar Tarefa</button>
        `
    }
}