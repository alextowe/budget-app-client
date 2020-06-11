import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Section } from '../../components/Utils/Utils'
import MainNav from '../../components/MainNav/MainNav'
import ReturnNav from '../../components/ReturnNav/ReturnNav'
import dummyStore from '../../dummy-store.js'
import './App.css'

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
  
  componentDidMount() {
    setTimeout(() => this.setState(dummyStore), 600);
  }

  renderNavRoutes = () => {
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

  renderMainRoutes = () => {
    
  }

  render() {
    return (
      <Section className='App'>
        <header className='App__header'>
        </header>
        <main className='App__main'>
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          {this.renderNavRoutes()}
        </main>
      </Section>
    )
  }
}
