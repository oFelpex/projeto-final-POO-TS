import showHomePage from "../pages/TaskListPage.js";
import { saveTasksToLocalStorage, tasks } from "../utils/storage.js";
import TaskDetailsComponent from "./TaskDetailsComponent.component.js";

export default class TaskListComponent {
    name: string;
    id: number;
    status: boolean;

    constructor(taskId: number) {
        //define o nome, id e status da task usando o taskId fornecido
        this.name = tasks[taskId].name;
        this.id = tasks[taskId].id;
        this.status = tasks[taskId].status;

        //seleciona o container principal da lista de tasks
        const toDoContainer = document.getElementById("to-do-container");
        if (toDoContainer) toDoContainer.innerHTML += this.render();

        //evento para mudar o status ao clicar no botão de check (check/uncheck), muda o status dentro do array
        document.querySelectorAll(".check-container").forEach(button => {
            button.addEventListener("click", (element) => {
                const buttonElement = element.target as HTMLElement;
                const taskId = Number(buttonElement.id);
                
                //altera o status da tarefa e salva no localStorage
                tasks[taskId].status = !tasks[taskId].status;
                saveTasksToLocalStorage();
                console.log(tasks[taskId].status);
                //atualiza a página, se não, não muda nada :/
                showHomePage();
            });
        });
        
        //evento de clique para abrir os detalhes da tarefa ao clicar no nome dela
        document.querySelectorAll(".tasks-name").forEach(paragraph => {
            paragraph.addEventListener("click", (element) => {
                const paragraphElement = element.target as HTMLElement;
                const taskId = Number(paragraphElement.previousElementSibling?.id);
                new TaskDetailsComponent(taskId);
            });
        });
    }
    render() {
        return `
            <div class="tasks-container">
                <div id="${this.id}" type="button" class="check-container ${this.getClassByStatus()}">
                    ${this.status ? "✓" : ""}
                </div>
                <p class="tasks-name">${this.name}</p>
            </div>
        `;
    }
    //parâmerto que retorna a classe do css baseada no status da tarefa (checked/uncheck)
    getClassByStatus() {
        return this.status ? "checked" : "uncheck";
    }
    //atualiza o botão de check/uncheck após a mudança de status
    updateButtonStatus() {
        const button = document.getElementById(String(this.id));
        if (button) {
            button.className = "check-container "+this.getClassByStatus();
            button.innerHTML = `${this.status ? "✓" : ""}<p class="tasks-name">${this.name}</p>`;
        }
    }
}
