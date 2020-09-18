import React, { Component } from 'react'
import '../App'
import TodoList from '../componets/Todo/TodoList'
import SubmitForm from '../componets/Todo/SubmitForm'

class TodoScreen extends Component
{
    constructor(props)
    {
        super()
        this.state = {
            tasks: [
                { id: 'tid1', title: 'task1' },
                { id: 'tid2', title: 'task2' },
                { id: 'tid3', title: 'task3' },
            ]
        }
    }

    handleSubmit = taskProps =>
    {
        if (taskProps.title)
        {
            this.setState({
                tasks: [...this.state.tasks, taskProps]
            })
        }
    }

    handleDelete = (id) =>
    {
        const newArray = [...this.state.tasks]
        // filter
        newArray.filter((task) =>
            task.id !== id
        )

        this.setState({ tasks: newArray })
    }

    render()
    {
        console.log(this.state.tasks);
        return (
            <div className="wrapper">
                <h1>Todo App</h1>
                <div className="card frame">
                    <TodoList tasks={this.state.tasks} onClick={this.handleDelete} />
                    <SubmitForm handleSubmit={this.handleSubmit} />
                </div>
            </div>
        );
    }
}

export default TodoScreen