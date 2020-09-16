import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

const Post = ({ match }) => <p>{match.params.id}</p>

class Posts extends Component
{
    render()
    {
        const { params } = this.props.match
        return (
            <div>
                <h1>Posts</h1>
                <strong>Select a post</strong>
                <ul>
                    <li>
                        <Link to="/posts/1">Post 1</Link>
                    </li>
                    <li>
                        <Link to="/posts/2">Post 2</Link>
                    </li>
                    <li>
                        <Link to="/posts/3">Post 3</Link>
                    </li>
                </ul>
                <Route path="/posts/:id" component={Post} />
            </div>
        )
    }
}

export default Posts