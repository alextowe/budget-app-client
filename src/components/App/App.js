import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    )
  }
}
