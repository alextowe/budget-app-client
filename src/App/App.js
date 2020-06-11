import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'

// components
import { Section } from '../components/Utils/Utils'
import MainNav from '../components/MainNav/MainNav'
import ReturnNav from '../components/ReturnNav/ReturnNav'

// routes
import BudgetPage from '../routes/BudgetPage/BudgetPage'


export default class App extends Component {
  state = { 
    categories: [],
    expenses: [],
    hasError: false 
  }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  renderNavRoutes() {
    const mainNavPaths = ['/', '/transactions']
    const returnNavPaths = ['/add-new-category', '/add-new-expense', '/log-new-transaction']

    return (
      <>
        {mainNavPaths.map(path => (
          <Route 
            exact
            path={path}
            component={MainNav}
          />
        ))}

        {returnNavPaths.map(path => (
          <Route 
            path={path}
            component={ReturnNav}
          />
        ))}
      </>
    )

  }

  renderMainRoutes() {
    return (
      <>
       <Switch>
         <Route 
          exact
          path='/'
          component={BudgetPage}
         />
       </Switch>
      </>
    )
  }

  render() {
    return (
      <Section className='App'>
        <header className='App__header'>
        </header>
        <aside className='App_aside'>
          {this.renderNavRoutes()} 
        </aside>
        <main className='App__main'>
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          {this.renderMainRoutes()}
        </main>
        <footer className='App__footer'>

        </footer>
      </Section>
    )
  }
}
