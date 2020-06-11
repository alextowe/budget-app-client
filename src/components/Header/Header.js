import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { Hyph, Section } from '../Utils/Utils'
import TokenService from '../../services/token-service'
import './Header.css'

export default class Header extends Component {
  handleLogoutClick = () => {

  }

  renderLogoutLink () {
    return (
      <Section className='Header__logged_in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
            Logout
        </Link>
      </Section>
    )
  }

  renderLoginLink () {
    return (
      <Section className='Header__logged_out'>
        <Link
          to='/login'>
          Log in
        </Link>
        <Hyph />
        <Link
          to='/register'>
          Register
        </Link>
      </Section>
    )
  }

  render () {
    return (
      <nav className='Header'>
        <h1>
          <Link to='/'>
            <FontAwesomeIcon className='green' icon={faSun} />
            {' '}
            Build a Budget
          </Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    ) 
  }
}