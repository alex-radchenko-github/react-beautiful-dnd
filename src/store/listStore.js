import {makeAutoObservable} from "mobx";

class ListStore {
    tasks = [
        {id: '0c220a97-7bf3-497e-8cac-c469faea2bde', todo: 'Task 1', order: 0},
        {id: '003a9395-882c-4559-b1d3-774a92f3dc43', todo: 'Task 2', order: 1},
        {id: 'd718f2c6-ff37-4246-8066-c579712d9dae', todo: 'Task 3', order: 2},
        {id: '54116c42-22f7-421c-9a1f-8804e28b844d', todo: 'Task 4', order: 3},
        {id: '866c025e-5a19-4753-8737-1cc452227e3a', todo: 'Task 5', order: 4},
    ];

    constructor() {
        makeAutoObservable(this)
    }

    sortTask() {
        this.tasks.sort((a, b) => a.order - b.order)
        return this.tasks
    }

    changeOrderItem(a, b) {

        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].order > a && a > b) {
                this.tasks[i].order -= 1
            }
            if (this.tasks[i].order <= a) {
                this.tasks[i].order += 1
            }


        }
        this.tasks[a].order = b + 1
        // this.tasks[b].order = a
    }

}

export default new ListStore()