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
              <h1>Home</h1>
            </div>
          </NavLink>
          <NavLink to="/artists" className="nav1">Artists </NavLink>

          <NavLink to="/albums" className="nav2">Albums </NavLink>
        </nav>
      </header>
    )
  }
}
