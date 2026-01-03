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

/* 

here useParams is used to extract the dynamic parameter 'id' from the URL.
useParams is a hook provided by react-router-dom that allows you to access the parameters of the current route.

so, it automatically captures the value of 'id' from the URL and makes it available in the component.
if the URL is /contact/123, then id will be 123.
if there's no id provided in the URL, id will be undefined.

*/
