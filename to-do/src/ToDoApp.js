import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList/ToDoList'

class ToDoApp extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      todos: [],
      content: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput = (event) =>
  {
    const contentValue = event.target.value
    this.setState({ content: contentValue })
  }

  handleSubmit = (event) =>
  {
    const newToDo = {
      content: this.state.content,
      id: Date.now()
    }

    this.setState(state => ({
      items: state.todos.concat(newToDo),
      content: ''
    }))
    console.log(this.state.todos)
    event.preventDefault();
  }


  render()
  {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input id="new-todo" value={this.state.content} onChange={this.handleInput} />
          <button>Submit</button>
        </form>
        <ToDoList listElements={this.state.todos} />
      </div>
    )
  }

}


export default ToDoApp;