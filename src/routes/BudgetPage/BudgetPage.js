import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import MainNav from '../../components/MainNav/MainNav'
import Category from '../../components/Category/Category'
import BudgetContext from '../../contexts/BudgetContext'

export default class BudgetPage extends Component {
  static contextType = BudgetContext

  componentDidMount() {
    
  }

  renderCategories() {
    const { categories = [] } = this.context
    const { expenses = [] } = this.context

    return categories.map(category => (
      <Category 
        key={category.id}
        category={category}
        expenses={expenses}
      />
    ))
  }

  render() {
    const path = this.props.location.pathname
    return (
      <Section className='BudgetPage'>
        <MainNav 
          path={path}
        />
        {this.renderCategories()}
      </Section>
    )
  }
}