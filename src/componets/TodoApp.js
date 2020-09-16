import React, { Component } from 'react';
import '../App';
import TodoList from './Todo/TodoList'
import SubmitForm from './Todo/SubmitForm'

class App extends Component
{
    state = {
        tasks: ['task1', 'task2', 'task3']
    }

    handleSubmit = task =>
    {
        this.setState({ tasks: [...this.state.tasks, task] })
    }

    handleDelete = (index) =>
    {
        const newArray = [...this.state.tasks]
        newArray.splice(index, 1)
        this.setState({ tasks: newArray })
    }

    render()
    {
        return (

            <div className="wrapper">
                <h1>Todo App</h1>
                <div className="card frame">
                    <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
                    <SubmitForm onFormSubmit={this.handleSubmit} />
                </div>
            </div>
        );
    }
}

export default App;