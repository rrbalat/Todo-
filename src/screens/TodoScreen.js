import React from 'react'
import '../App'
import SubmitForm from '../componets/Todo/SubmitForm'
import TodoList from '../componets/Todo/TodoList'

class TodoScreen extends React.Component
{
    constructor(props)
    {
        super()
        this.state = {
            tasks: [
                { id: 'tid1', title: 'task1' },
                { id: 'tid2', title: 'task2' },
                { id: 'tid3', title: 'task3' },
            ],
            task: { id: '', title: '' }
        }
    }

    handleInput = (event) =>
    {
        this.setState({
            task: { id: Date.now(), title: event.target.value }
        })
        console.log(this.state.task.title);
    }

    handleSubmit = () =>
    {
        this.setState({
            tasks: [...this.state.tasks, this.state.task]
        })
    }

    handleDelete = (id) =>
    {
        const tasks = this.state.tasks.filter(task => task.id !== id)
        this.setState({ tasks: tasks })

    }

    render()
    {
        return (
            <div>
                <SubmitForm value={this.state.task.title} onChange={this.handleInput} onClick={this.handleSubmit} />
                <TodoList tasks={this.state.tasks} onClick={this.handleDelete} />
            </div>
        )
    }


}

export default TodoScreen