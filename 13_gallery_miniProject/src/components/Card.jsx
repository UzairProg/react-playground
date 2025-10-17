import React from 'react'

function Card(props) {

    let {img, author} = props
    console.log(img, author)
  return (
    <div className='flex flex-col items-center gap-4'>
        <a href={img} target="_blank">
            <img src={img} className='h-44 w-44 rounded-2xl'/>
        </a>
        
        <h2>{author}</h2>
    </div>
  )
}

export default Card
