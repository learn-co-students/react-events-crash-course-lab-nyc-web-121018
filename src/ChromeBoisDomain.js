import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
    // console.log(this.state);
    drawChromeBoiAtCoords(this.state.x, this.state.y)
  }

  handleKeyDown = (event) => {
    // console.log(event.key);
    if (event.key == "a") {
      resize("+")
    }
    if (event.key == "s") {
      resize("-")
    }
  }

  handleClick = (event) => {
    toggleCycling()
  }

  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-'
   */

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onKeyDown={this.handleKeyDown}
        onClick={this.handleClick}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
