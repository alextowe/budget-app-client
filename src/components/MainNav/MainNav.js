import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MainNav extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  render() {
    const path = this.props.location.pathname
    const budgetPageLink = 
      <Link
        className='MainMenu__budget_page Button'
        to='/'>
        Budget Page
      </Link>

    const transactionsPageLink = 
      <Link
        className='MainMenu__transactions_page Button'
        to='/transactions'>
        Transactions
      </Link>

    const addNewCategoryLink = 
      <Link
        className='MainMenu__add_new_category_link Button'
        to='/add-new-category'>
        Add Category
      </Link>

    return (
      <nav className="MainNav">
       <nav className='MainMenu'>
        { path === '/' ? transactionsPageLink 
        : path === '/transactions' ? budgetPageLink
        : ''}
        {addNewCategoryLink}
      </nav>
      </nav>
    )
  }
}