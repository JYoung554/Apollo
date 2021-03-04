import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import '../logo.css'

export default class Nav extends Component {
  render() {
    return (
      <header>
        <nav className="nav">

          <NavLink to="/">
            <div>
              <h1></h1>
            </div>
          </NavLink>
          <NavLink to="/" className="nav1">
          </NavLink>

          <NavLink to="/allalbums" className="nav2">
            All Posts
          </NavLink>
        </nav>
      </header>
    )
  }
}
