import React, { Component } from 'react'
import { Section } from '../Utils/Utils'
import './ProgressBar.css'


export default class ProgressBar extends Component {
  render() {
    return (
      <Section className='ProgressBar'>
        <div className='ProgressBar_progress' />
      </Section>
    )
  }
}
