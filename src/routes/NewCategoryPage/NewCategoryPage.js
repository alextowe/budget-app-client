import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'

export default class NewCategoryPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleNewCategorySuccess = () => {
    const { location, history } = this.props
    console.log(location.state)
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
      <Section className='NewCategoryPage'>
        <h2>Add New Category</h2>
      </Section>
    )
  }
}