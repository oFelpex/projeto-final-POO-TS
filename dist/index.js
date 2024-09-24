import { createNewTaskPage } from "./pages/CreateTaskPage.js";
export let locationObj = {
    location: "home"
};
window.onload = function () {
    window.location.hash = '#home';
};
updateTitle(locationObj.location);
function updateTitle(location) {
    let title = document.getElementById("navBar_title");
    switch (location) {
        case "home":
            title.innerHTML = "Lista de Tarefas";
            break;
        case "createTaskPage":
            title.innerHTML = "Criar nova Tarefa";
            break;
    }
}
document.getElementById("button-newTask").addEventListener("click", () => {
    createNewTaskPage();
    updateTitle(locationObj.location);
});
