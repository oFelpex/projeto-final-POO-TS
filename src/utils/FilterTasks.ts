import { Task } from "../models/Task.js";
import { tasks } from "./storage.js";

export default function filterTasks(): Task[] {
    let orderedTasks: Task[] = tasks;
    const urlParams = new URLSearchParams(window.location.search);
    const filterType = urlParams.get("filter-type");
    const searchValue = urlParams.get("search")?.toLowerCase();
    if(filterType) {
        switch(filterType) {
            case "checked":
                orderedTasks = tasks.sort((a, b) => Number(b.status) - Number(a.status));
                break;
            case "unchecked":
                orderedTasks = tasks.sort((a, b) => Number(a.status) - Number(b.status));
                break;
            case "recently":
                orderedTasks = tasks.sort((a, b) => Date.parse(String(b.date)) - Date.parse(String(a.date)));
                break;
            case "older":
                orderedTasks = tasks.sort((a, b) => Date.parse(String(a.date)) - Date.parse(String(b.date)));
                break;
            default:
                console.log("Opa, algo deu errado aqui, meu fih");
                break;
        }
    } else if(searchValue) {
        orderedTasks = tasks.sort((a, b) => {
            if (a.name.toLowerCase().includes(searchValue)) return -1;
            if (b.name.toLowerCase().includes(searchValue)) return 1;
            return 0;
        });
    }
    return orderedTasks;
}