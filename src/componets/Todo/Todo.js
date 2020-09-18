import React from 'react'
import '../../App'

const Todo = (props) =>
{
    return (
        <React.Fragment>
            <div className='list-item'>
                {props.title}
                <button className="margin-r" onClick={() => { props.onDelete(props.id) }}>Delete</button>
            </div>
        </React.Fragment>
    )
}

export default Todo