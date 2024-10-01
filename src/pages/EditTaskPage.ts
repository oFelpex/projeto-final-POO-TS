import { saveTasksToLocalStorage, tasks } from "../utils/storage.js";
import showHomePage from "./TaskListPage.js";

export default function editTaskPage(taskId: number) {
    //remove os dois botões que estava presentes na página de criação de task
    document.getElementById("buttonEditTask")?.remove();
    document.getElementById("buttonCancelEditTask")?.remove();

    //pega pelo ID, os inputs de texto do nome e da descrição da task, e muda o estado de disable para false, para o usuário poder alterar o nome e a descrição da task
    const inputNameNewTask = (document.getElementById("inputNameNewTask") as HTMLInputElement);
    const inputDescriptionDetails = (document.getElementById("inputDescription-details") as HTMLInputElement);
    inputNameNewTask.disabled = false
    inputDescriptionDetails.disabled = false;
    
     //evento para salvar as mudanças ao clicar no botão de salvar
    const buttonSaveChange = (document.getElementById("buttonSaveChange")as HTMLButtonElement);
    buttonSaveChange.addEventListener("click", () => {
        if(inputNameNewTask.value !== tasks[taskId].name || inputDescriptionDetails.value !== tasks[taskId].description) {
            //abre o modal para confirmar as mudanças
            modalChangeTask(taskId);
        } else {
            alert("Você não editou nada ainda, meu fih!");
        }
    });
    //evento para cancelar as mudanças e voltar pra página inicial
    const buttonCancelChange = (document.getElementById("buttonCancelChange")as HTMLButtonElement);
    buttonCancelChange.addEventListener("click", () => showHomePage());

    //evento para deletar a tarefa ao clicar no botão de apagar
    const buttonEraseTask = (document.getElementById("buttonEraseTask") as HTMLButtonElement);
    buttonEraseTask.addEventListener("click", () => {
        tasks.splice(taskId, 1);
        saveTasksToLocalStorage();
        showHomePage();
    });
}

//função que cria um modal para confirmar as alterações feitas na tarefa
function modalChangeTask(taskId: number) {
    const toDoContainer = document.getElementById("to-do-container");

    //cria um modal de confirmação, como div
    const modalEditTaskConfirm = document.createElement("div");
    modalEditTaskConfirm.id = "modal-edit-task-confirm";

    //título para o modal
    const confirmTitle = document.createElement("h3");
    confirmTitle.id = "confirm-title";
    confirmTitle.innerHTML = "Deseja confirmar as suas alterações?";

    //cria um container com sombra de fundo
    const shadowContainer = document.createElement("div");
    shadowContainer.id = "shadow-container";

    //notão para confirmar as alterações feitas
    const buttonConfirm = document.createElement("button");
    buttonConfirm.id = "button-confirm";
    buttonConfirm.innerHTML = "Confirmar Alterações";
    buttonConfirm.classList.add("buttonChangeTask");
    buttonConfirm.addEventListener("click", () => {
        //salva as alterações no array ao clicar no botão de confirmar
        const inputNameNewTask = (document.getElementById("inputNameNewTask") as HTMLInputElement);
        const inputDescriptionDetails = (document.getElementById("inputDescription-details") as HTMLInputElement);

        tasks[taskId].name = inputNameNewTask.value;
        tasks[taskId].description = inputDescriptionDetails.value;
        saveTasksToLocalStorage();
        showHomePage();
    });
    //botão para cancelar a confirmação e continuar editando
    const buttonDeny = document.createElement("button");
    buttonDeny.innerHTML = "Continuar Editando";
    buttonDeny.id = "button-deny";
    buttonDeny.classList.add("buttonChangeTask");
    //remove o modal e o container de sombra ao cancelar
    buttonDeny.addEventListener("click", () => {modalEditTaskConfirm.remove(), shadowContainer.remove()});

    //adiciona o título e os botões ao modal e o modal ao container com sombra
    modalEditTaskConfirm.append(confirmTitle, buttonConfirm, buttonDeny);
    shadowContainer.append(modalEditTaskConfirm);

    //adiciona o container com sombra ao container da lista de tarefas
    toDoContainer?.append(shadowContainer);
}