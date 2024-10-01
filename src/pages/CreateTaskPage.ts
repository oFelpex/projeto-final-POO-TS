import showHomePage from "./TaskListPage.js";
import { tasks, saveTasksToLocalStorage } from "../utils/storage.js";
import { Task } from "../models/Task.js";

//função que lida com a página de criação de novas tarefas
export function createTaskPage() {
    //seleciona o botão de cancelar a criação de uma nova tarefa e adiciona o evento de click
    const buttonCancelNewTask = document.getElementById("button-cancel-newTask");
    buttonCancelNewTask?.addEventListener("click", () => showHomePage());

    //seleciona o formulário da criação de uma nova tarefa e adiciona o evento de submit
    const formCreateNewTask = document.getElementById("containerCreateNewTask");
    formCreateNewTask?.addEventListener("submit", (event) => {
        //previne o comportamento padrão de envio do formulário, que é o de recarregar a página após o submit
        event.preventDefault();

        //coleta os valores que o usuário digitou para o nome e descrição da tarefa
        const taskName: string = (document.getElementById("inputNameNewTask") as HTMLInputElement).value;
        const taskDescription: string = (document.getElementById("inputDescriptionNewTask") as HTMLTextAreaElement).value;

        //verifica se o nome da tarefa não está vazio antes de criar a nova tarefa, usa o .trim() para remover os espaços em branco iniciais e finais, para ter certeza de que está vazio
        if(taskName.trim() !== "") {
            //cria a nova tarefa com valores do usuário
            createNewTask(taskName, taskDescription, new Date(), tasks.length, false);
            showHomePage();
        }
    });
}

//função para criar uma nova tarefa e salvá-la no localStorage
export function createNewTask(name:string, description: string, date: Date, id: number, status: boolean){
    //cria uma instância da classe Task com os valores fornecidos
    const newTask = new Task(name, description, date, id, status);

    //adiciona a nova tarefa ao array de tasks
    tasks.push(newTask);

    //slva o array de tarefas atualizado no localStorage
    saveTasksToLocalStorage();
    console.log('todas as tasks:', tasks);
}
