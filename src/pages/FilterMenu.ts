import showHomePage from "./TaskListPage.js";

export default function filterMenu() {
    const buttonMenu = document.getElementById("button-menu");
    buttonMenu?.remove();

    const toDoContainer = document.getElementById("to-do-container");

    const formFilter = (document.getElementById("form-filter") as HTMLFormElement);
    formFilter?.addEventListener("submit", (event: Event) => {

    });

    const buttonCancel = (document.getElementById("buttonCancel") as HTMLButtonElement);
    buttonCancel?.addEventListener("click", () =>{
        showHomePage();
    });

}