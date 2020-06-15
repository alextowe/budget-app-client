import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './MainNav.css'

export default class MainNav extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  render() {
    const path = this.props.path
    const budgetPageLink = 
      <Link
        className='MainNav__budget Button'
        to='/'>
        Budget
      </Link>

    const transactionsPageLink = 
      <Link
        className='MainNav__transactions Button'
        to='/transactions'>
        Transactions
      </Link>

    const addNewCategoryLink = 
      <Link
        className='MainNav__new_category Button'
        to='/add-new-category'>
        Add Category
      </Link>

    const logNewTransactionLink = 
      <Link
        className='MainNav__new_transaction Button'
        to='log-new-transaction'>
        Log Transaction
      </Link>

    return (
      <nav className='MainNav'>
        { path === '/' ? transactionsPageLink 
        : path === '/transactions' ? budgetPageLink
        : ''}
        { path === '/' ? addNewCategoryLink 
        : path === '/transactions' ? logNewTransactionLink
        : ''}
      </nav>
    )
  }
}