export interface MyWorker {
    name: string;
    surname: string; 
    type: number;
    phone: string;
    id?: number;
}


export enum MyWorkerType {
    programmer,
    designer,
    copywriter,
    manager,
}

export let myWorkerDatabase: MyWorker[] = [
    {id: 0, name: 'Ivan', surname: 'Ivanov', type: 0, phone: '888888999'},
    {id: 1, name: 'Sungur', surname: 'Gasanov', type: 1, phone: '89776523344'},
    {id: 2, name: 'Daniil', surname: 'Alexseev', type: 2, phone: '89113334555'},
    {id: 3, name: 'Rufina', surname: 'Gat', type: 3, phone: '89446772233'}

]