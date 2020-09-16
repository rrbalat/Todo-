import React, { Component } from 'react'
import './ToDoList'

class ToDoList extends Component
{
    render()
    {
        return (
            <ul>
                {this.props.listElements.map(element => (
                    <li classNAme="border" key={element.id}>{element.content}</li>
                ))}
            </ul>
        )
    }
}

export default ToDoList