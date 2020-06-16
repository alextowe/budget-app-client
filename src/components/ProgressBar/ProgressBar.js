import React, { Component } from 'react'
import { Section } from '../Utils/Utils'
import './ProgressBar.css'


export default class ProgressBar extends Component {
  render() {
    const { expected, actual } = this.props
    console.log(expected, actual)
    return (
      <Section className='ProgressBar'>
        <div className='ProgressBar__progress'>

        </div>
      </Section>
    )
  }
}
