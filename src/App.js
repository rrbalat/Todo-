import React, { Component } from 'react';
import './App.css';
import TodoList from './componets/TodoList'
import SubmitForm from './componets/SubmitForm'

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
        <div className="card frame">
          <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
          <SubmitForm onFormSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default App;