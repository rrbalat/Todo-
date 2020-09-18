import React, { Component } from 'react'

class SubmitForm extends Component
{
    constructor(props)
    {
        super();
        this.state = {
            taskProps: {
                title: '',
                id: ''
            }
        }
    }
    render()
    {
        return (
            <form>
                <input
                    type="text"
                    className="input"
                    placeholder="Enter Item"
                    value={this.state.title}
                    onChange={(e) =>
                    {
                        if (this.state.taskProps.id !== '')
                        {
                            this.setState({
                                taskProps: {
                                    id: Date.now(),
                                    title: e.target.value
                                }
                            })
                        } else
                        {
                            this.setState({
                                taskProps: {
                                    title: e.target.value
                                }
                            })
                        }
                    }}
                />
                <button className='button' onClick={(e) =>
                {
                    e.preventDefault();
                    this.props.handleSubmit(this.state.taskProps)
                }}>Submit</button>
            </form>
        )
    }
}

export default SubmitForm