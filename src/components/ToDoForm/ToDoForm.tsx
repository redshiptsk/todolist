
import { useState } from "react"
import { toDosStore } from '../../../stores'
import { Form, Input, Button } from './toDoForm-styles'
import { observer } from "mobx-react-lite";



const ToDoForm = observer(() => {

    const [value, setValue] = useState('');

    const handleChange: React.ChangeEventHandler<
        HTMLInputElement
    > = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit: React.ChangeEventHandler = (e) => {
        e.preventDefault();
        toDosStore.addToDo({
            data: {
                name: value,
                description: 'Новая задача',
                status: 'open',
            }
        });
        setValue('');
    }

    return (
        <Form>
            <Input type="text" value={value} placeholder="Add a new task" onChange={handleChange} />
            <Button type="submit" onClick={handleSubmit}>Add</Button>
        </Form>
    )
}
)
export default ToDoForm