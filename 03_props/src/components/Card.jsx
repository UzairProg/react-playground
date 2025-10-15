import React from 'react'

function Card(props) {
  return (
    // <div className='card'>
    //     <h2>Card Title</h2>
    //     <p>This is a card component.</p>
    // </div>

    <div className='card'>
        <h2>{props.name}, {props.age}</h2>
        <p>This is a card component.</p>
    </div>
  )
}

export default Card
