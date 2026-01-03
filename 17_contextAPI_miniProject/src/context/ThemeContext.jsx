import React, { createContext, useState } from 'react'

export const ThemeContextData = createContext() // create context object to hold + share theme data

function ThemeContext(props) {

    const [theme, setTheme] = useState('light') // shared theme state for the whole app
  return (
    <ThemeContextData.Provider value={{ theme, setTheme, name:'Uzair' }}> {/* provide theme state + updater to whole app */}
      {props.children} {/* as we are wrapping app.jsx in main.jsx with this component, props.children will be the whole app.. or will load the whole app */}
    </ThemeContextData.Provider>
  )
}

export default ThemeContext
