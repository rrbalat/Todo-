import React from 'react'
import '../App'

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
                <div>
                    <input type="text" value={this.state.task.title} placeholder="Enter Activity" onChange={this.handleInput} />
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
                <div>
                    {this.state.tasks.map(task =>
                    {
                        return (
                            <div key={task.id} task={task}>
                                <li>{task.title}</li>
                                <button onClick={() => this.handleDelete(task.id)}>Delete</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }


}

export default TodoScreen