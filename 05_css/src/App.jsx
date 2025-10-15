import React from 'react'
import Button from './components/button/Button'
import Header from './components/header/Header'

const App = () => {
  return (
    <div>
      <Button />
      <Header />
    </div>
  )
}

export default App

/*
  normal css vs module css
  1. module css is scoped to the component, normal css is global
  2. module css is imported as an object, normal css is imported as a string
  3. module css class names are hashed, normal css class names are not hashed eg. styles.header -> header_abc123
  4. module css is easier to maintain, normal css can lead to naming conflicts
  5. module css is more performant, normal css can lead to unnecessary re-renders
  6. module css is more secure, normal css can lead to style leakage
*/