import showHomePage from "../pages/TaskListPage.js";
import HeaderComponent from "./HeaderComponent.component.js";
export default class FilterTaskComponent {
    constructor() {
        new HeaderComponent("Filtrar Tarefas");
        const toDoContainer = document.getElementById("to-do-container");
        if (toDoContainer)
            toDoContainer.innerHTML += this.render();
        const buttonMenu = document.getElementById("button-menu");
        buttonMenu === null || buttonMenu === void 0 ? void 0 : buttonMenu.remove();
        const buttonCancelFilter = document.getElementById("buttonCancelFilter");
        buttonCancelFilter.addEventListener("click", () => showHomePage());
        const buttonCancelSearch = document.getElementById("buttonCancelSearch");
        buttonCancelSearch.addEventListener("click", () => showHomePage());
    }
    render() {
        return `
            <div id="task-filter">
                <form action="" method="get" id="form-filter">
                    <label class="paragraph" for="filter-type" id="label-filter-type">Deseja ordenar por:</label>
                    <select class="paragraph" id="filter-type" name="filter-type" required>
                        <option value="" selected disabled>Selecione uma opção</option>
                        <option value="checked">Concluídas</option>
                        <option value="unchecked">Pendentes</option>
                        <option value="recently">Mais Recente</option>
                        <option value="older">Mais Antigo</option>
                    </select>
                    <button type="submit" id="buttonFilter" class="buttonNewTask">Aplicar Filtro</button>
                    <button type="button" id="buttonCancelFilter" class="buttonNewTask">Cancelar</button>
                </form>
                <form action="" method="get" id="form-search" >
                    <label class="paragraph" for="search-input" id="label-search-input">Pesquisar por nome:</label>
                    <input class="paragraph" type="text" name="search" id="search-input" class="inputNewTask" maxlength="25" required>
                    <button type="submit" id="buttonSearch" class="buttonNewTask">Pesquisar</button>
                    <button type="button" id="buttonCancelSearch" class="buttonNewTask">Cancelar</button>
                </form>
            </div>

        `;
    }
}
