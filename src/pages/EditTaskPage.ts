import { saveTasksToLocalStorage, tasks } from "../utils/storage.js";
import showHomePage from "./TaskListPage.js";

export default function editTaskPage(taskId: number) {
    document.getElementById("buttonEditTask")?.remove();
    document.getElementById("buttonCancelEditTask")?.remove();

    const inputNameNewTask = (document.getElementById("inputNameNewTask") as HTMLInputElement);
    const inputDescriptionDetails = (document.getElementById("inputDescription-details") as HTMLInputElement);

    inputNameNewTask.disabled = false
    inputDescriptionDetails.disabled = false;
    
    const buttonSaveChange = (document.getElementById("buttonSaveChange")as HTMLButtonElement);
    buttonSaveChange.addEventListener("click", () => {
        if(inputNameNewTask.value !== tasks[taskId].name || inputDescriptionDetails.value !== tasks[taskId].description) {
            modalChangeTask(taskId);
        } else {
            alert("Você não editou nada ainda!");
        }
    });
    
    const buttonCancelChange = (document.getElementById("buttonCancelChange")as HTMLButtonElement);
    buttonCancelChange.addEventListener("click", () => showHomePage());

    const buttonEraseTask = (document.getElementById("buttonEraseTask") as HTMLButtonElement);
    buttonEraseTask.addEventListener("click", () => {
        tasks.splice(taskId, 1);
        saveTasksToLocalStorage();
        showHomePage();
    });
}

function modalChangeTask(taskId: number) {
    const toDoContainer = document.getElementById("to-do-container");

    const modalEditTaskConfirm = document.createElement("div");
    modalEditTaskConfirm.id = "modal-edit-task-confirm";

    const confirmTitle = document.createElement("h3");
    confirmTitle.id = "confirm-title";
    confirmTitle.innerHTML = "Deseja confirmar as suas alterações?";

    const shadowContainer = document.createElement("div");
    shadowContainer.id = "shadow-container";

    const buttonConfirm = document.createElement("button");
    buttonConfirm.id = "button-confirm";
    buttonConfirm.innerHTML = "Confirmar Alterações";
    buttonConfirm.classList.add("buttonChangeTask");
    buttonConfirm.addEventListener("click", () => {
        const inputNameNewTask = (document.getElementById("inputNameNewTask") as HTMLInputElement);
        const inputDescriptionDetails = (document.getElementById("inputDescription-details") as HTMLInputElement);

        tasks[taskId].name = inputNameNewTask.value;
        tasks[taskId].description = inputDescriptionDetails.value;
        saveTasksToLocalStorage();
        showHomePage();
    });

    const buttonDeny = document.createElement("button");
    buttonDeny.innerHTML = "Continuar Editando";
    buttonDeny.id = "button-deny";
    buttonDeny.classList.add("buttonChangeTask");
    buttonDeny.addEventListener("click", () => {modalEditTaskConfirm.remove(), shadowContainer.remove()});

    modalEditTaskConfirm.append(confirmTitle, buttonConfirm, buttonDeny);
    shadowContainer.append(modalEditTaskConfirm);
    toDoContainer?.append(shadowContainer);
}