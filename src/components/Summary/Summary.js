import React, { Component } from 'react'
import { Section } from '../Utils/Utils'
import BudgetContext from '../../contexts/BudgetContext'

export default class Summary extends Component {
  static contextType = BudgetContext

  render () {
    const { initial_balance, ending_balance } = this.context
    const { categories = [] } = this.context
    const { expenses = [] } = this.context
    return (
      <Section className='Summary'>
        <p>Initial balance: <span>${initial_balance}</span></p>
        <p>Ending balance: <span>
          ${ ending_balance === null ? '0' : ending_balance }</span>
        </p>
        <p>Total income: <span>$</span></p>
        <p>Total expenses: <span>$</span></p>
      </Section>
    ) 
  }
}