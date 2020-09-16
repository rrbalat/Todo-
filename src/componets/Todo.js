import React from 'react'
import '../App.css'

const Todo = (props) =>
{
    return (
        <div className='list-item'>
            {props.content}
            <button className="margin-r" onClick={() => { props.onDelete(props.id) }}>Delete</button>
        </div>
    )
}

export default Todo