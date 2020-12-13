export interface MyWorker {
    name: string;
    surname: string; 
    type: number;
    id?: number;
}


export enum MyWorkerType {
    programmer,
    designer,
    copywriter,
    manager,
}

export let myWorkerDatabase: MyWorker[] = [
    {id: 0, name: 'Ivan', surname: 'Ivanov', type: 0},
    {id: 1, name: 'Sungur', surname: 'Gasanov', type: 1},
    {id: 2, name: 'Daniil', surname: 'Alexseev', type: 2},
    {id: 3, name: 'Rufina', surname: 'Gat', type: 3}

]