export default class FilterTaskComponent {
    constructor() {
        const toDoContainer = document.getElementById("to-do-container");
        if (toDoContainer)
            toDoContainer.innerHTML = this.render();
    }
    render() {
        return `

        `;
    }
}
