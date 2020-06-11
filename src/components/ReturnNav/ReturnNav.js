import React, { Component } from 'react'

export default class ReturnNav extends Component {
  static defaultProps = {
    history: {
      goBack: () => {}
    },
    match: {
      params: {}
    }
  }

  render() {
    return (
      <nav className="ReturnNav">
        Return
      </nav>
    )
  }
}