import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './Category.css'

export default class Category extends Component {
  state = {
    open: true,
  }

  filterExpenses(expenses, category_id) {
    return expenses.filter(expense => expense.category_id === category_id)
  }

  renderExpenses() {
    const { category } = this.props
    const { expenses = [] } = this.props
    const categoryExpenses = this.filterExpenses(expenses, category.id)

    return categoryExpenses.map(expense => (
      <li className='Expense'>
        {expense.name}
      </li>
    ))
  } 

  render() {
    const { open } = this.state
    const { category } = this.props
    return (
      <Section className='Category'>
        <section 
          className='Category__top_section'
          onClick={ () => this.setState({ open: !open }) }>
          <h3>{category.name}</h3>
          <FontAwesomeIcon icon={ open ? faChevronUp : faChevronDown }/>
        </section>
        { open && <ul>{this.renderExpenses()}</ul>}
      </Section>
    )
  }
}