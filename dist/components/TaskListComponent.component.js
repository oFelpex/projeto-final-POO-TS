export default class TaskListComponent {
    constructor(task) {
        this.name = task.name;
        this.id = task.id;
        const toDoContainer = document.getElementById("to-do-container");
        if (toDoContainer)
            toDoContainer.innerHTML += this.render();
        console.log(this.id);
    }
    render() {
        return `
            <div class="tasks-container">
                <button id="${this.id}" type="button" class="check-container">
                    <p class="tasks-name">${this.name}</p>
                </button>
            </div>
        `;
    }
}
