import { Task } from "../utils/storage";

export default function showTasksList(task: Task) {
    const tasksContainer = document.createElement("div");
    tasksContainer.classList.add("tasks-container");

    const checkContainer = document.createElement("button") as HTMLButtonElement;
    checkContainer.type = "button";
    checkContainer.classList.add("check-container");

    const tasksName = document.createElement("p") as HTMLParagraphElement;
    tasksName.classList.add("tasks-name");
    tasksName.textContent = task.name;

    checkContainer.append(tasksName);
    tasksContainer.append(checkContainer);

    return tasksContainer;
}
