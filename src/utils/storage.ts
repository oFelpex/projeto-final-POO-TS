import { Task } from "../models/Task";

export let tasks: Task[] = [];

export function saveTasksToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function loadTasksFromLocalStorage() {
    const tasksString = localStorage.getItem("tasks");
    if (tasksString) {
        tasks = JSON.parse(tasksString);
    }
}