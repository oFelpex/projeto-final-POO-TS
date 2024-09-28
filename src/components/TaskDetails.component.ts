import { tasks } from "../utils/storage.js"
import HeaderComponent from "./HeaderComponent.component.js";
import EditTaskComponent from "./EditTask.component.js";
import showHomePage from "../pages/TaskListPage.js";

export default class TaskDetailsComponent {
    name: string;
    description: string;
    date: Date;
    id: number;
    status: boolean;
    
    constructor(taskId: number) {
        new HeaderComponent("Detalhes da Tarefa");

        this.name = tasks[taskId].name;
        this.description = tasks[taskId].description;
        this.date = new Date(tasks[taskId].date);
        this.id = tasks[taskId].id;
        this.status = tasks[taskId].status;

        window.location.hash = `#details+id=${this.id}`

        const toDoContainer = document.getElementById("to-do-container");
        if(toDoContainer) toDoContainer.innerHTML += this.render();

        const buttonEditTask = (document.getElementById("buttonEditTask") as HTMLButtonElement);
        buttonEditTask.addEventListener("click", () => {
            new EditTaskComponent(this.id);
        });
        buttonEditTask.style.margin = "20px 50px 0px 60px";
        document.getElementById("buttonCancelEditTask")?.addEventListener("click", () => {
            showHomePage();
        })
    };

    render() {
        let weekDay: string;
        switch(this.date.getDay()) {
            case 1: weekDay = "Segunda-feira";
                break;
            case 2: weekDay = "Terça-feira";
                break;
            case 3: weekDay = "Quarta-feira";
                break;
            case 4: weekDay = "Quinta-feira";
                break;
            case 5: weekDay = "Sexta-feira";
                break;
            case 6: weekDay = "Sábado";
                break;
            case 7: weekDay = "Domingo";
                break;
            default: weekDay = "Dia não encontrado!";
        }
        let month: string;
        switch(this.date.getMonth() + 1) {
            case 1: month = "Janeiro";
                break;
            case 2: month = "Fevereiro";
                break;
            case 3: month = "Março";
                break;
            case 4: month = "Abril";
                break;
            case 5: month = "Maio";
                break;
            case 6: month = "Junho";
                break;
            case 7: month = "Julho";
                break;
            case 8: month = "Agosto";
                break;
            case 9: month = "Setembro";
                break;
            case 10: month = "Outubro";
                break;
            case 11: month = "Novembro";
                break;
            case 12: month = "Dezembro";
                break;
            default: month = "Mês não encontrado!";
        }
        let status: string;
        switch(this.status) {
            case false:
                status = "Não Concluída";
                break;
            case true:
                status = "Concluída";
                break;
            default:
                status = "Não Concluída";
                break;
        }
        return `
            <div id="task-details">
                <p>Nome da Tarefa:</p>
                <input id="inputNameNewTask" class="inputNewTask" value="${this.name}" placeholder="Nome da Tarefa" minlength="2" maxlength="25" required disabled>
                <p>Detalhes da Tarefa:</p>
                <textarea placeholder="Descrição da sua tarefa" id="inputDescription-details" maxlength="360" disabled>${this.description}</textarea>
                <p>Data da criação:<br>${weekDay}, dia ${this.date.getDate()} de ${month} de ${this.date.getFullYear()}.<br>A tarefa foi criada às ${this.date.getHours()} horas, ${this.date.getMinutes()} minutos e ${this.date.getSeconds()} segundos.</p>
                
            </div>
            <button type="button" id="buttonEditTask" class="buttonNewTask">Editar Tarefa</button>
            <button type="button" id="buttonCancelEditTask" class="buttonNewTask">Voltar</button>
        `
    }
}