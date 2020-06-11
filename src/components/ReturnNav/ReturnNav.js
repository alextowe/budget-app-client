import React, { Component } from 'react'
import { Button } from '../Utils/Utils'

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
    const returnButton = 
      <Button
        role='link'
        className='ReturnMenu__return_button'
        onClick={() => this.props.history.goBack()}>
        Go Back
      </Button>
    return (
      <nav className="ReturnNav">
        {returnButton}
      </nav>
    )
  }
}