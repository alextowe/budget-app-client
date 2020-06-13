import React, { Component } from 'react'

const BudgetContext = React.createContext({
  initial_balance: '1000',
  ending_balance: null,
  categories: [
    {
      id: '1',
      name: 'Income',
      expected_amount: null
    },
    {
      id: '2',
      name: 'Housing',
      expected_amount: null
    },
    {
      id: '3',
      name: 'Utilities',
      expected_amount: null
    },
    {
      id: '4',
      name: 'Car',
      expected_amount: null
    }
  ],
  expenses: [
    {
      id: '1',
      name: 'Paycheck 1',
      category_id: '1',
      expected_amount: '1700',
      actual_amount: null,
      due_date: new Date()
    },
    {
      id: '2',
      name: 'Rent',
      category_id: '2',
      expected_amount: '1200',
      actual_amount: null,
      due_date: new Date()
    },
    {
      id: '3',
      name: 'Electricity',
      category_id: '3',
      expected_amount: '100',
      actual_amount: null,
      due_date: new Date()
    },
    {
      id: '4',
      name: 'Gas',
      category_id: '4',
      expected_amount: '120',
      actual_amount: null,
      due_date: new Date()
    },
    {
      id: '5',
      name: 'Renters Insurance',
      category_id: '2',
      expected_amount: '25',
      actual_amount: null,
      due_date: new Date()
    },
    {
      id: '6',
      name: 'Water',
      category_id: '3',
      expected_amount: '150',
      actual_amount: null,
      due_date: new Date()
    },
    {
      id: '7',
      name: 'Car Insurance',
      category_id: '4',
      expected_amount: '70',
      actual_amount: null,
      due_date: new Date()
    },
    {
      id: '8',
      name: 'Phone Bill',
      category_id: '3',
      expected_amount: '50',
      actual_amount: null,
      due_date: new Date()
    }
  ],
  error: null,
  setCategories: () => {},
  setExpenses: () => {},
  setError: () => {},
  clearError: () => {},
})
export default BudgetContext

export class BudgetProvider extends Component {
  state = {
    categories: [],
    expenses: [],
    error: null,
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setCategories = categories => {
    this.setState({ categories })
  }

  setExpenses = expenses => {
    this.setState({ expenses })
  }

  render() {
    const value = {
      categories: this.state.categories,
      expenses: this.state.expenses,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setCategories: this.setCategories,
      setExpenses: this.setExpenses,
    }
    return (
      <BudgetContext.Provider value={value}>
        {this.props.children}
      </BudgetContext.Provider>
    )
  }
}