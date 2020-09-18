import React, { Component } from 'react'
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import TodoScreen from './screens/TodoScreen'
import PostsScreen from './screens/PostsScreen'
import NotFound from './componets/NotFound'
import PostDetail from './componets/Posts_api/PostDetail'

import './App'

class App extends Component
{
  render()
  {
    return (
      <Router>
        <div>
          <ul className="navbar">
            <li>
              <NavLink exact activeClassName="active" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/todo">Todo App</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/posts">Posts API</NavLink>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/todo" component={TodoScreen} />
            <Route exact path="/posts" component={PostsScreen} />
            <Route exact path="/posts/:id" component={PostDetail} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;