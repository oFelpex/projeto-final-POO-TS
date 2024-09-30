import showHomePage from "./TaskListPage.js";
export default function filterMenu() {
    const buttonMenu = document.getElementById("button-menu");
    buttonMenu === null || buttonMenu === void 0 ? void 0 : buttonMenu.remove();
    const toDoContainer = document.getElementById("to-do-container");
    const formFilter = document.getElementById("form-filter");
    formFilter === null || formFilter === void 0 ? void 0 : formFilter.addEventListener("submit", (event) => {
    });
    const buttonCancel = document.getElementById("buttonCancel");
    buttonCancel === null || buttonCancel === void 0 ? void 0 : buttonCancel.addEventListener("click", () => showHomePage());
}
