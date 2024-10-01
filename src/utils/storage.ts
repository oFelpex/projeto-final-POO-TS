import { Task } from "../models/Task.js";
import filterTasks from "../pages/FilterTasks.js";

export let tasks: Task[] = [];

export function saveTasksToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(filterTasks()));
}

export function loadTasksFromLocalStorage() {
    const tasksString = localStorage.getItem("tasks");
    
    if (tasksString) {
        tasks = JSON.parse(tasksString);
    }
}