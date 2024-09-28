import showHomePage from "../pages/TaskListPage.js";
import { tasks, saveTasksToLocalStorage } from "../utils/storage.js";


//TRANSFORMAR EM CLASSE
export default function EditTaskComponent(taskId: number) {
        const inputNameNewTask = (document.getElementById("inputNameNewTask") as HTMLInputElement);
        const inputDescriptionDetails = (document.getElementById("inputDescription-details") as HTMLInputElement);
        const toDoContainer = document.getElementById("to-do-container");
        
        const buttonSaveChange = document.createElement("button");
        buttonSaveChange.type = "button";
        buttonSaveChange.id = "buttonSaveNewTask";
        buttonSaveChange.innerHTML = "Salvar Alterações";
        buttonSaveChange.style.margin = "20px 50px 0px 65px";
        buttonSaveChange.classList.add("buttonNewTask");
        buttonSaveChange.addEventListener("click", () => {
            tasks[taskId].name = inputNameNewTask.value;
            tasks[taskId].description = inputDescriptionDetails.value;
            saveTasksToLocalStorage();
            showHomePage();
        })

        const buttonCancelChange = document.createElement("button");
        buttonCancelChange.type = "button";
        buttonCancelChange.id = "buttonCancelChange";
        buttonCancelChange.innerHTML = "Discartar Alterações";
        buttonCancelChange.classList.add("buttonNewTask");
        buttonCancelChange.addEventListener("click", () => {
            showHomePage();
        })

        const buttonEraseTask = (document.createElement("button") as HTMLButtonElement);
        buttonEraseTask.id = ("buttonEraseTask");
        buttonEraseTask.classList.add("buttonNewTask");
        buttonEraseTask.innerHTML = "Apagar Tarefa";
        buttonEraseTask.style.backgroundColor = "rgb(154, 23, 23)";
        buttonEraseTask.style.position = "relative";
        buttonEraseTask.style.left = "50%";
        buttonEraseTask.style.transform = "translate(-50%, 35%)"
        buttonEraseTask.addEventListener("click", () => {
            tasks.splice(taskId, 1);
            saveTasksToLocalStorage();
            showHomePage();
        }) 
        
        
        toDoContainer?.append(buttonSaveChange, buttonCancelChange, buttonEraseTask);
        
        inputNameNewTask.disabled = false
        inputDescriptionDetails.disabled = false;
        
        document.getElementById("buttonEditTask")?.remove();
        document.getElementById("buttonCancelEditTask")?.remove();
}