import React from 'react'

const DeleteTodoButton = (props) =>
{
    return (
        <button onClick={() => props.onClick(props.id)}>Delete</button>
    )
}

export default DeleteTodoButton