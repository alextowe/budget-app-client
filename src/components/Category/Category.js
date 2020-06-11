import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'

export default class Category extends Component {
  state = {
    open: true,
  }

  renderExpenses() {
    const { expenses = [] } = this.props
    return expenses.map(expense => {
      // display expenses
    })
  }

  render() {
  
    return (
      <Section className='Category'>
        {this.renderExpenses()}
      </Section>
    )
  }
}