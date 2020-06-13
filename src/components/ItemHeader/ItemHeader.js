import React, { Component } from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './ItemHeader.css'

export default class ItemHeader extends Component {
  renderTopSection = () => {
    const { item } = this.props
    const { open } = this.props
    return (
      <section className='ItemHeader__top_section'>
        <h3>{item.name}</h3>
        <FontAwesomeIcon icon={ open ? faChevronUp : faChevronDown }/>
      </section>
    )
  }

  renderAmountSection = () => {
    const { amount } = this.props
    return (
      <section className='ItemHeader__amount_section'>
        <p className='ItemHeader__amount'>
          ${ amount }
        </p>
        <ProgressBar />
      </section>
    )
  }

  render () {
    return (
      <>
        {this.renderTopSection()}
        {this.renderAmountSection()}
      </>
    )
  }
}