import React, { Component } from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'
import './Expense.css'

export default class Expense extends Component {
  render() {
    const { expense } = this.props
    return (
      <li className='Expense'>
        <p className='Expense__name'>{expense.name}</p>
        <ProgressBar 
          expected={expense.expected_amount}
          actual={expense.actual_amount}
        />
      </li>
    )
  }
}