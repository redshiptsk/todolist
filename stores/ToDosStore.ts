import { action, makeObservable, observable } from "mobx";
import { globalStore } from '../stores';

interface IToDoItem {
    data: {
        id: number;
        attributes: {
            name: string;
            description: string
            status: string;
            createdAt: Date;
            updatedAt: Date;
            completedAt?: Date;
            favorite?: boolean
        }
    }[],
    meta: {
        pagination: {
            page: number,
            pageSize: number,
            pageCount: number,
            total: number
        }
    }

}

type newItem = {
    data: {
        name: string,
        description: string,
        status: string,
    }
}

class ToDosStore {

    toDos: IToDoItem = {
        data: [], meta: {
            pagination: {
                page: 0,
                pageSize: 0,
                pageCount: 0,
                total: 0
            }
        }
    };
    page = {
        size: 0,
    }

    constructor() {
        makeObservable(this, {
            toDos: observable,
            getToDos: action,
            addToDo: action,
            removeToDo: action,
            toggleToDo: action,
        })
    }

    setPageSize() {
        this.page.size = this.page.size + 10;
    }
    async addToDo(todo: newItem) {
        await fetch('https://cms.laurence.host/api/tasks',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${globalStore.token}`,
                },
                body: JSON.stringify(todo),


            })
        this.getToDos(this.page.size)
    }
    async removeToDo(id: number) {
        await fetch(`https://cms.laurence.host/api/tasks/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Authorization': `${globalStore.token}`,
                }
            })

        this.getToDos(this.page.size)
    }

    async toggleToDo(id: number) {
        const task = this.toDos.data.filter(todo => {
            if (todo.id === id) {
                if (todo.attributes.status === 'done') {
                    return { data: { status: todo.attributes.status = 'open', name: todo.attributes.name, description: todo.attributes.description } }
                } else {
                    return { data: { status: todo.attributes.status = 'done', name: todo.attributes.name, description: todo.attributes.description } }
                }
            }
        }
        );
        const data = {
            data: {
                name: task[0].attributes.name,
                description: task[0].attributes.description,
                status: task[0].attributes.status,
            }
        }
        await fetch(`https://cms.laurence.host/api/tasks/${id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${globalStore.token}`,
                },
                body: JSON.stringify(data)
            })
        this.getToDos(this.page.size)
    }
    async getToDos(pageSize: number) {
        const todos = await fetch(`https://cms.laurence.host/api/tasks?&pagination%5BpageSize%5D=${pageSize}`,
            {
                headers: {
                    'Authorization': `${globalStore.token}`,
                },
            }
        )

        this.toDos = await todos.json()
    }

}
export default ToDosStore