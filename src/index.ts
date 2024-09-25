import showHomePage from "./pages/TaskListPage.js";
import { loadTasksFromLocalStorage } from "./utils/storage.js";


window.onload = function() {
    showHomePage()
    loadTasksFromLocalStorage();
};