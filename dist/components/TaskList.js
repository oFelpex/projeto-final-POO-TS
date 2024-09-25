export default function showTasksList(task) {
    const tasksContainer = document.createElement("div");
    tasksContainer.classList.add("tasks-container");
    const checkContainer = document.createElement("button");
    checkContainer.type = "button";
    checkContainer.classList.add("check-container");
    const tasksName = document.createElement("p");
    tasksName.classList.add("tasks-name");
    tasksName.textContent = task.name;
    checkContainer.append(tasksName);
    tasksContainer.append(checkContainer);
    return tasksContainer;
}
