import React, { Component } from 'react'
import './button.scss';

export class Button extends Component {
  render() {
    return (
      <button>{this.props.content}</button>
    )
  }
}

export default Button