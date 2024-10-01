import FilterTaskComponent from "./FilterTaskComponent.component.js";

type Location = "Lista de Tarefas" | "Filtrar Tarefas" | "Editar Tarefas" | "Criar Tarefas" | "Detalhes da Tarefa"

export default class HeaderComponent {
    location: Location;

    //ADICIONAR HERANÇA, GETTERS E SETTERS

    constructor(location: Location) {
        this.location = location;
        const header = document.getElementById("to-do-container");
        if(header) header.innerHTML = this.render();

        setTimeout(() => {
            const buttonMenu = document.getElementById("button-menu");
            buttonMenu?.addEventListener("click", () => new FilterTaskComponent);
        }, 100);
    }
    render() {
        return `
            <header id="header">
                <nav id="navBar">
                    <h1 id="navBar_title">${this.location}</h1>
                    <div type="button" id="button-menu">
                        <div id="button-container">
                            <div class="button-squares"></div>
                            <div class="button-squares"></div>
                            <div class="button-squares"></div>
                            <div class="button-squares"></div>
                        </div>
                    </div>
                </nav>
            </header>
        `
    }
}