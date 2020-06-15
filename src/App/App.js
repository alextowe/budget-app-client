import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSun, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import './App.css'

// components
import { Section } from '../components/Utils/Utils'
import Header from '../components/Header/Header'

// routes
import LoginPage from '../routes/LoginPage/LoginPage'
import RegistrationPage from '../routes/RegistrationPage/RegistrationPage'
import BudgetPage from '../routes/BudgetPage/BudgetPage'
import NewCategoryPage from '../routes/NewCategoryPage/NewCategoryPage'

library.add(fab, faSun, faChevronDown, faChevronUp)

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

  renderRoutes() {
    return (
      <>
        <Switch>
          <Route 
            exact
            path='/'
            component={BudgetPage}
          />
          <Route 
            path={'/add-new-category'}
            component={NewCategoryPage}
          />
          <Route
            path={'/login'}
            component={LoginPage}
          />
          <Route 
            path={'/register'}
            component={RegistrationPage}
          />
          <Route 
            path={'/register'}
            component={RegistrationPage}
          />
        </Switch>
      </>
    )
  }

  render() {
    return (
      <Section className='App'>
        <header className='App__header'>
          <Header />
        </header>
        <main className='App__main'>
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          {this.renderRoutes()}
        </main>
        <footer className='App__footer'>

        </footer>
      </Section>
    )
  }
}
