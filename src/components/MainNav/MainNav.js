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
    const path = this.props.location.pathname
    const budgetPageLink = 
      <Link
        className='MainNav__budget Button'
        to='/'>
        Budget Page
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

    return (
      <nav className='MainNav'>
        { path === '/' ? transactionsPageLink 
        : path === '/transactions' ? budgetPageLink
        : ''}
        {addNewCategoryLink}
      </nav>
    )
  }
}