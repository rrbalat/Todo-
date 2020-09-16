import React from 'react';
import ReactDOM from 'react-dom';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import App from './App'
import TodoApp from './componets/TodoApp'
import Posts from './componets/Posts_api/Posts'
import NotFound from './componets/NotFound'

const routing = (
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
        <Route exact path="/" component={App} />
        <Route path="/todo" component={TodoApp} />
        <Route path="/posts" component={Posts} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));