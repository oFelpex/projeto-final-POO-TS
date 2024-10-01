import CreateTaskPage from "../components/CreateTaskComponent.component.js";
import HeaderComponent from "../components/HeaderComponent.component.js";
import TaskListComponent from "../components/TaskListComponent.component.js";
import { tasks, loadTasksFromLocalStorage } from "../utils/storage.js";
import filterTasks from "../utils/FilterTasks.js";
export default function showHomePage() {
    //window.location.hash = '#home';
    //carrega as tarefas do localStorage
    loadTasksFromLocalStorage();
    //localStorage.clear();
    //cria o cabeçalho da página, indicando que o usuário está na "Lista de Tarefas"
    new HeaderComponent("Lista de Tarefas");
    const toDoContainer = document.getElementById("to-do-container");
    const buttonNewTask = document.createElement("button");
    buttonNewTask.type = "button";
    buttonNewTask.id = "button-newTask";
    buttonNewTask.innerHTML = "+";
    //filtra as tarefas (se houver algum filtro) e as renderiza na tela, atualizando o id para garantir que estejam em ordem
    filterTasks().forEach((task, index) => { task.id = index, new TaskListComponent(task.id); });
    console.log(tasks);
    toDoContainer.append(buttonNewTask);
    //adiciona um evento ao botão de Nova Tarefa, quando clicado leva o usuário para a página de criação de tarefas
    document.getElementById("button-newTask").addEventListener("click", () => new CreateTaskPage);
}
