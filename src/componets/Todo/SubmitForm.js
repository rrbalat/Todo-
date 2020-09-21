import React, { Component } from 'react'
import InputTodo from './InputTodo'
import SubmitTodoButton from './SubmitTodoButton'

class SubmitForm extends Component
{

    render()
    {
        return (
            <div>
                <InputTodo value={this.props.value} onChange={this.props.onChange} />
                <SubmitTodoButton onClick={this.props.onClick} />
            </div>
        )
    }
}

export default SubmitForm