import { createNewTaskPage } from "./CreateTaskPage.js";


export default function showHomePage() {
    window.location.hash = '#home';

    const toDoContainer = (document.getElementById("to-do-container") as HTMLDivElement);

    toDoContainer.innerHTML = '';

    const navBar = document.createElement("nav");
    navBar.id = "navBar";
    
    const navBar_title = document.createElement("h1");
    navBar_title.id = "navBar_title";
    navBar_title.innerHTML = "Lista de Tarefas";

    const buttonMenu = document.createElement("button");
    buttonMenu.type = "button";
    buttonMenu.id = "button-menu";

    const buttonContainer = document.createElement("div");
    buttonContainer.id = "button-container";

    function createNewSquare() {
        const buttonSquares = (document.createElement("div"));
        buttonSquares.classList.add("button-squares");
        return buttonSquares;
    }

    buttonContainer.appendChild(createNewSquare());
    buttonContainer.appendChild(createNewSquare());
    buttonContainer.appendChild(createNewSquare());
    buttonContainer.appendChild(createNewSquare());

    const buttonNewTask = document.createElement("button");
    buttonNewTask.type = "button";
    buttonNewTask.id = "button-newTask";
    buttonNewTask.innerHTML = "+";

    buttonMenu.append(buttonContainer);
    navBar.append(navBar_title, buttonMenu)
    toDoContainer.append(navBar, buttonNewTask);

    (document.getElementById("button-newTask") as HTMLElement).addEventListener("click", () => {
        createNewTaskPage();
    });
}