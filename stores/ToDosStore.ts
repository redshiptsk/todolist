import { action, makeObservable, observable } from "mobx";
import { globalStore } from '../stores';
import { useState } from "react";

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
    meta?: {
        pagination: {
            page: number,
            pageSize: number,
            pageCount: number,
            total: number
        }
    }

}



class ToDosStore {

    toDos: IToDoItem = { data: [] }

    constructor() {
        makeObservable(this, {
            toDos: observable,
            getToDos: action,
            addToDo: action,
            removeToDo: action,
            toggleToDo: action,
        })
    }

    async addToDo(todo: IToDoItem) {
        await fetch('https://cms.laurence.host/api/tasks',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${globalStore.jwt}`,
                },
                body: JSON.stringify(todo),


            })
        this.getToDos(1)
    }
    async removeToDo(id: number) {
        await fetch(`https://cms.laurence.host/api/tasks/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Authorization': `${globalStore.jwt}`,
                }
            })

        this.getToDos(1)
    }

    async toggleToDo(id: number) {
        const task = this.toDos.data.filter(todo => {
            if (todo.id === id) {
                return { data: { status: todo.attributes.status = 'done', name: todo.attributes.name, description: todo.attributes.description } }
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
                    'Authorization': `${globalStore.jwt}`,
                },
                body: JSON.stringify(data)
            })
        this.getToDos(1)
    }
    async getToDos() {
        const todos = await fetch(`https://cms.laurence.host/api/tasks`,
            {
                headers: {
                    'Authorization': `${globalStore.jwt}`,
                },
            }
        )
        this.toDos = await todos.json()
    }

}
export default ToDosStore