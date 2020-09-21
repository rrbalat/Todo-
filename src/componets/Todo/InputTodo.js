import React from 'react'

const InputTodo = (props) =>
{
    return (
        <input type="text" value={props.value} placeholder="Enter Activity" onChange={props.onChange} />
    )
}

export default InputTodo