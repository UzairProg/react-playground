import React, { createContext, useState } from 'react'

export const ThemeContextData = createContext()

function ThemeContext(props) {

    const [theme, setTheme] = useState('light')
  return (
    <ThemeContextData.Provider value={{ theme, setTheme, name:'Uzair' }}>
      {props.children}
    </ThemeContextData.Provider>
  )
}

export default ThemeContext
