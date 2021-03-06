import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export default class Nav extends Component {
  render() {
    return (
      <header>
        <nav className="nav">

          <NavLink to="/">
            <div>
              <h1 className="page-title">Home</h1>
            </div>
          </NavLink>
          <NavLink to="/artists" className="nav1 page-title">Artists </NavLink>

          <NavLink to="/albums" className="nav2 page-title">Albums </NavLink>
        </nav>
      </header>
    )
  }
}
