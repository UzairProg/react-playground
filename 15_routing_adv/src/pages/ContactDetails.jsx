import React from 'react'
import { useParams } from 'react-router-dom'
function ContactDetails() {
    let {id} = useParams();

  return (
    <div className='flex justify-center items-center'>
      <h1 className='font-bold text-3xl'>
        Contact Details for ID: {id}
      </h1>
    </div>
  )
}

export default ContactDetails
