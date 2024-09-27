import ITaskModel from "../models/Task.js";

export let tasks: Task[] = [];
export class Task implements ITaskModel {
    name: string;
    description: string;
    date: Date;
    id: number;
    status: boolean;
    constructor(name:string, description: string, date: Date, id: number, status: boolean) {
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