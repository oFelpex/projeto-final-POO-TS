import showHomePage from "../pages/TaskListPage.js";
import { createTaskPage } from "../pages/CreateTaskPage.js";
import HeaderComponent from "./HeaderComponent.component.js";

export default class CreateTaskPage {
    constructor() {
        new HeaderComponent("Criar Tarefas");

        const toDoContainer = (document.getElementById("to-do-container") as HTMLElement);
        toDoContainer.scrollTo({top: 0, behavior: 'smooth'});
        toDoContainer.style.overflowY = "hidden";
        toDoContainer.innerHTML += this.render();

        createTaskPage();
    }
    render() {
        return `
        <div id="createNewTaskPage">
            <form id="containerCreateNewTask">
                <label for="inputNameNewTask" class="labelNewTask">Nome:</label>
                <input id="inputNameNewTask" class="inputNewTask" placeholder="Nome da Tarefa" minlength="2" maxlength="25" required="">
                <label for="inputDescriptionNewTask" class="labelNewTask">Descrição:</label>
                <textarea placeholder="Descrição da sua tarefa" id="inputDescriptionNewTask" class="inputNewTask" maxlength="360"></textarea>
                <div class="buttons-container">
                    <button class="buttonNewTask" type="submit">Criar Tarefa</button>
                    <button id="button-cancel-newTask" class="buttonNewTask" type="button">Cancelar</button>
                </div>
            </form>
        </div>
        `
    }
}