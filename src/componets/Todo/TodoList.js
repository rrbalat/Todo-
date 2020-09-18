import React from 'react'
import '../../App'
import Todo from './Todo'

const TodoList = (props) =>
{

    const todos = props.tasks.map((todo) =>
    {
        console.log(todo)
        return (
            <React.Fragment key={todo.id}>
                <Todo title={todo.title} id={todo.id} onDelete={props.onDelete} />
            </React.Fragment>
        )
    })
    return (
        <div className='list-wrapper'>
            {todos}
        </div>
    )
}

export default TodoList