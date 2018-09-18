import React from 'react'
import { render } from 'react-dom'
import { ColorContext } from './context'

const ThemedButton = ({ title }) => (
  <ColorContext.Consumer>
    {theme => <div style={{ color: theme }}>{title}</div>}
  </ColorContext.Consumer>
)

const Toolbar = () => (
  <div>
    <ThemedButton title="hello react" />
  </div>
)


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      color: 'red',
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor() {
    if (this.state.color === 'red') {
      this.setState({ color: 'blue' })
    } else {
      this.setState({ color: 'red' })
    }
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


render(
  <App />,
  document.getElementById('app'),
)
