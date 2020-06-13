import React, { Component } from 'react'
import ItemHeader from '../ItemHeader/ItemHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './Expense.css'

export default class Expense extends Component {
  state = {
    open: true,
  }

  render() {
    const { open } = this.state
    const { expense } = this.props
    return (
      <li className='Expense'>
        <header 
          className='Expense__header'
          onClick={ () => this.setState({ open: !open }) }>
          <ItemHeader 
            item={expense}
            open={false}
          />
        </header>
      </li>
    )
  }
}