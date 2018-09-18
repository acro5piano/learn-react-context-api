import React from 'react'
import { ColorContext } from './context'

export const ThemedButton = ({ title }) => (
  <ColorContext.Consumer>
    {theme => <div style={{ color: theme }}>{title}</div>}
  </ColorContext.Consumer>
)

export const Toolbar = () => (
  <div>
    <ThemedButton title="hello react" />
  </div>
)
