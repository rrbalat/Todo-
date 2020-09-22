import React from 'react'
import '../../App'
import Todo from './Todo'


class TodoList extends React.Component
{
    render()
    {
        return (
            <div>
                {this.props.tasks.map(task =>
                {
                    return (
                        <Todo id={task.id} task={task} title={task.title} onClick={() => this.props.onClick(task.id)} />
                    )
                })}
            </div>
        )
    }
}

export default TodoList