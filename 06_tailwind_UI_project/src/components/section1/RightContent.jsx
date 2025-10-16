import React from 'react'
// import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
  // defensive: ensure users is an array
  // avoid throwing when prop is missing or invalid
  // keep logging minimal to prevent noisy HMR overlays
  const users = Array.isArray(props?.users) ? props.users : null;
  if (!users) {
    console.warn('RightContent received invalid users prop:', props?.users);
    return null;
  }
  return (
    <div id='right' className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6 w-2/3'>
        {users.map(function(elem, idx) {
          return <RightCard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag} />
        })}
    </div>
  )
}

export default RightContent