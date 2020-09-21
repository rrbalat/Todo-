import React from 'react'
import '../../App'


class TodoList extends React.Component
{
    render()
    {
        return (
            <div>
                {this.props.tasks.map(task =>
                {
                    return (
                        <div key={task.id} task={task}>
                            <li>{task.title}</li>
                            <button onClick={() => this.props.onClick(task.id)}>Delete</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default TodoList