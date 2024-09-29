export interface ITaskModel {
    name: string;
    description: string;
    date: Date;
    id: number;
    status: boolean;
}

export class Task implements ITaskModel {
    name: string;
    description: string;
    date: Date;
    id: number;
    status: boolean;
    constructor(name:string, description: string, date: Date, id: number, status: boolean) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.id = id;
        this.status = status;
    }
}