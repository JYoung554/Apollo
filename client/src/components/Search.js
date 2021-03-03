import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
        type="text"
        name="search"
        value={this.props.value}
        placeholder="Search Artist"
        onChange={this.props.onChange} />
        <button type="submit">Search</button>
      </form>
    )
  }
}