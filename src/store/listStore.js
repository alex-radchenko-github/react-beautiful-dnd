import {makeAutoObservable} from "mobx";

class ListStore {
    tasks = [
        {id: '0c220a97-7bf3-497e-8cac-c469faea2bde', todo: 'Task 1'},
        {id: '003a9395-882c-4559-b1d3-774a92f3dc43', todo: 'Task 2'},
        {id: 'd718f2c6-ff37-4246-8066-c579712d9dae', todo: 'Task 3'},
        {id: '54116c42-22f7-421c-9a1f-8804e28b844d', todo: 'Task 4'},
        {id: '866c025e-5a19-4753-8737-1cc452227e3a', todo: 'Task 5'},
    ];
    constructor() {
        makeAutoObservable(this)
    }
}

export default new ListStore()