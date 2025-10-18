import React, { useState } from 'react'
import Theme from './components/Theme';
import Navbar from './components/Navbar';

function App() {

  const [theme, setTheme] = useState('light');

  return (
    <div>
      <h1>
        {
          // passing setTheme function as prop to Theme component
        }
        Theme is {theme}
        <Theme theme={theme} setTheme={setTheme}/>

        {
        // now passing children as props..
        }

        {/* <Navbar /> or we can write <Navbar> </Navbar> same thing soo..*/} 

        <Navbar>
          <h2>this is childer 1</h2>
          <h2>this is childer 2</h2>
        </Navbar>

      </h1>
    </div>
  )
}

/*
here, we're passing down both the current theme and the function to update it
so that the Theme component can both display and change the theme

this is a common pattern in React for managing state across components..

here we're passing props from child to parent kind of, since Theme can call setTheme to update App's state
*/


export default App
