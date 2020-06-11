import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import BudgetContext from '../../contexts/BudgetContext'

export default class Category extends Component {
  state = {
    open: true,
  }

  renderExpenses() {
    const { expenses = [] } = this.props
    return expenses.map(expense => {
      
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