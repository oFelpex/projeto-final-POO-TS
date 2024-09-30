export default class HeaderComponent {
    constructor(location) {
        this.location = location;
        const header = document.getElementById("to-do-container");
        if (header)
            header.innerHTML = this.render();
        setTimeout(() => {
            const buttonMenu = document.getElementById("button-menu");
            buttonMenu === null || buttonMenu === void 0 ? void 0 : buttonMenu.addEventListener("click", () => {
                console.log("botão clicado");
            });
        }, 100);
    }
    render() {
        return `
            <header id="header">
                <nav id="navBar">
                    <h1 id="navBar_title">${this.location}</h1>
                    <button type="button" id="button-menu">
                        <div id="button-container">
                            <div class="button-squares"></div>
                            <div class="button-squares"></div>
                            <div class="button-squares"></div>
                            <div class="button-squares"></div>
                        </div>
                    </button>
                </nav>
            </header>
        `;
    }
}
