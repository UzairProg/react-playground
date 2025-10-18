import React from 'react'

function Navbar(props) {

    /*
        here, we're using props.children to access the child elements passed to Navbar..

        how it works is, when we use <Navbar> ... </Navbar> in JSX, anything between the opening and closing tags is passed to Navbar as props.children

        this allows us to create wrapper components that can render dynamic content inside them
    */
    console.log(props.childern)
  return (
    <div>
      <h1>Helloo world!</h1>
    {
        props.children[0]
    }
    {
        props.children[1]
    }
    </div>
  )
}

export default Navbar
