import React, { Component } from 'react'
import '../../App.css'

class Post extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            post: ''
        }
    }

    componentDidMount = () =>
    {
        // fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
        //     .then(response => response.json())
        //     .then(data => this.setState({ post: data }))
        //     .then(console.log(this.props.match))
    }
    render()
    {
        const { post } = this.state

        return (
            <div className="wrapper">
                <div className="card frame">
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            </div>
        )
    }
}

export default Post