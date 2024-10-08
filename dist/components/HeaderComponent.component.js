import FilterTaskComponent from "./FilterTaskComponent.component.js";
export default class HeaderComponent {
    //ADICIONAR HERANÇA, GETTERS E SETTERS NO FUTURO, talvez...
    constructor(location) {
        this.location = location;
        const header = document.getElementById("to-do-container");
        if (header)
            header.innerHTML = this.render();
        //tive que adicionar um timeout porquê se não, não funciona 
        setTimeout(() => {
            const buttonMenu = document.getElementById("button-menu");
            buttonMenu === null || buttonMenu === void 0 ? void 0 : buttonMenu.addEventListener("click", () => new FilterTaskComponent);
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
        `;
    }
}
