import React, { Component } from 'react'
import Expense from '../Expense/Expense'
import { Section } from '../../components/Utils/Utils'
import './Category.css'

export default class Category extends Component {
  filterExpenses(expenses, category_id) {
    return expenses.filter(expense => expense.category_id === category_id)
  }

  renderExpenses() {
    const { category } = this.props
    const { expenses = [] } = this.props
    const categoryExpenses = this.filterExpenses(expenses, category.id)

    return categoryExpenses.map(expense => (
      <Expense 
        key={expense.id}
        expense={expense}
      />
    ))
  } 

  render() {
    const { category } = this.props
    return (
      <Section className='Category'>
        <h3 className='Category__name'>{category.name}</h3>
        <ul className='Category__expense_list'>{this.renderExpenses()}</ul>
      </Section>
    )
  }
}