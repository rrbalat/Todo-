import React from 'react'
import '../../App'
import DeleteTodoButton from './DeleteTodoButton'

const Todo = (props) =>
{
    return (
        <div key={props.task.id} task={props.task}>
            <li>{props.task.title}</li>
            <DeleteTodoButton onClick={() => props.onClick(props.task.id)} />
        </div>
    )
}

export default Todo