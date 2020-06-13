import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'

export default class Category extends Component {
  state = {
    open: true,
  }

  filterItems() {
    const { c } = this.props
  }

  renderExpenses() {
    const { category } = this.props
    const { expenses = [] } = this.props
    const categoryExpenses = expenses.filter(expense => (
      expense.category_id === category.id
    ))

    return categoryExpenses.map(expense => (
      <li className='Expense'>
        {expense.name}
      </li>
    ))
  } 

  render() {
    const { category } = this.props
    return (
      <Section className='Category'>
        <h2>{category.name}</h2>
        <ul>{this.renderExpenses()}</ul>
      </Section>
    )
  }
}