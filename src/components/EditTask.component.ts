import showHomePage from "../pages/TaskListPage.js";
import { tasks, saveTasksToLocalStorage } from "../utils/storage.js";

export default function EditTaskComponent(taskId: number) {
        const inputNameNewTask = (document.getElementById("inputNameNewTask") as HTMLInputElement);
        const inputDescriptionDetails = (document.getElementById("inputDescription-details") as HTMLInputElement);
        const toDoContainer = document.getElementById("to-do-container");
        
        const buttonSaveChange = document.createElement("button");
        buttonSaveChange.type = "button";
        buttonSaveChange.id = "buttonSaveNewTask";
        buttonSaveChange.innerHTML = "Salvar Alterações";
        buttonSaveChange.style.margin = "20px 50px 0px 60px";
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
        buttonCancelChange.style.backgroundColor = "rgb(154, 23, 23)";
        buttonCancelChange.addEventListener("click", () => {
            showHomePage();
        })
        
        toDoContainer?.append(buttonSaveChange, buttonCancelChange);
        
        inputNameNewTask.disabled = false
        inputDescriptionDetails.disabled = false;
        
        document.getElementById("buttonEditTask")?.remove();
        document.getElementById("buttonCancelEditTask")?.remove();
}