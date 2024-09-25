export let tasks = [];
export class Task {
    constructor(name, description, date, id, status) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.id = id;
        this.status = status;
    }
}
export function saveTasksToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
export function loadTasksFromLocalStorage() {
    const tasksString = localStorage.getItem("tasks");
    if (tasksString) {
        tasks = JSON.parse(tasksString);
    }
}
