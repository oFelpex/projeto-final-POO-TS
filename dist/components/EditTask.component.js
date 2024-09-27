import showHomePage from "../pages/TaskListPage.js";
import { tasks, saveTasksToLocalStorage } from "../utils/storage.js";
export default function EditTaskComponent(taskId) {
    var _a, _b;
    const inputNameNewTask = document.getElementById("inputNameNewTask");
    const inputDescriptionDetails = document.getElementById("inputDescription-details");
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
    });
    const buttonCancelChange = document.createElement("button");
    buttonCancelChange.type = "button";
    buttonCancelChange.id = "buttonCancelChange";
    buttonCancelChange.innerHTML = "Discartar Alterações";
    buttonCancelChange.classList.add("buttonNewTask");
    buttonCancelChange.style.backgroundColor = "rgb(154, 23, 23)";
    buttonCancelChange.addEventListener("click", () => {
        showHomePage();
    });
    toDoContainer === null || toDoContainer === void 0 ? void 0 : toDoContainer.append(buttonSaveChange, buttonCancelChange);
    inputNameNewTask.disabled = false;
    inputDescriptionDetails.disabled = false;
    (_a = document.getElementById("buttonEditTask")) === null || _a === void 0 ? void 0 : _a.remove();
    (_b = document.getElementById("buttonCancelEditTask")) === null || _b === void 0 ? void 0 : _b.remove();
}
