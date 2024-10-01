import { tasks } from "../utils/storage.js";
export default function filterTasks() {
    const urlParams = new URLSearchParams(window.location.search);
    const filterType = urlParams.get('filter-type');
    let orderedTasks = [];
    switch (filterType) {
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
            orderedTasks = tasks;
    }
    return orderedTasks;
}
