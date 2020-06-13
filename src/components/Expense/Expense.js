import React, { Component } from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'
import './Expense.css'

export default class Expense extends Component {
  state = {
    open: true,
  }

  renderAmountSection = () => {
    const { item } = this.props
    return (
      <section className='amount_section'>
        <p className='amount'>
          ${ item.expected_amount === null ? '0' : item.expected_amount}
        </p>
        <ProgressBar />
      </section>
    )
  }

  render() {
    const { expense } = this.props
    return (
      <li className='Expense'>
        <p className='item_name'>{expense.name}</p>
        <ProgressBar />
      </li>
    )
  }
}