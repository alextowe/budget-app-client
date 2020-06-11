import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MainNav extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  renderPageLinks() {
    
  }

  render() {
    const path = this.props.location.pathname
    return (
      <nav className="MainNav">
        MainNav
      </nav>
    )
  }
}