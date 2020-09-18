import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import '../App'

const Post = ({ match }) => <p>{match.params.id}</p>

const API = 'https://jsonplaceholder.typicode.com/posts?_limit=10'

class PostsScreen extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount = () =>
    {
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({ posts: data }))
            .then(console.log(this.props))
    }
    render()
    {
        const { posts } = this.state

        return (
            <div className="wrapper">
                {
                    <ul>
                        {posts.map(post =>
                            <li key={post.id} className="card frame li-margin">
                                <Link to={`/posts/${post.id}`}>{post.id} - {post.title}</Link>
                            </li>
                        )}
                    </ul>

                }
            </div>
        )
    }
}

export default PostsScreen