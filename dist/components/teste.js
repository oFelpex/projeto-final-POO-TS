import filterMenu from "../pages/FilterMenu.js";
import HeaderComponent from "./HeaderComponent.component.js";
export default class FilterTaskComponent {
    constructor() {
        new HeaderComponent("Filtrar Tarefas");
        filterMenu();
        const toDoContainer = document.getElementById("to-do-container");
        if (toDoContainer)
            toDoContainer.innerHTML += this.render();
    }
    render() {
        return `
            <div id="task-filter">
                <form id="form-filter">
                    <label for="filter-type">Deseja filtrar por:</label>
                    <select id="filter-type" name="filter-type">
                        <option value="" selected disabled>Selecione uma opção</option>
                        <option value="Concluídas">Concluídas</option>
                        <option value="Pendentes">Pendentes</option>
                        <option value="Mais Recente">Mais Recente</option>
                        <option value="Mais Antigo">Mais Antigo</option>
                    </select>
                    <input type="submit" value="Enviar">
                </form>
            </div>

        `;
    }
}
