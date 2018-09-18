import React from 'react'
import { render } from 'react-dom'
import { ColorContext } from './context'
import { ThemedButton, Toolbar } from './components'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      color: 'red',
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor() {
    this.setState({
      color: this.state.color === 'red' ? 'blue' : 'red'
    })
  }

  render() {
    const { color } = this.state

    return (
      <ColorContext.Provider value={color}>
        <div>
          <button onClick={this.changeColor}>
            change color
          </button>
          <Toolbar />
        </div>
      </ColorContext.Provider>
    )
  }
}
