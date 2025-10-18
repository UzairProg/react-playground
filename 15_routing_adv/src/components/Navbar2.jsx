import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar2() {
    let navigator = useNavigate()

    function goHome() {
        navigator('/')
    }

    function goBack() {
        navigator(-1)
    }

    function goNext() {
        navigator(1)
    }
  return (
    <div className='bg-emerald-300 flex gap-4 py-6 px-8'>
      <button className='bg-amber-300 py-2 px-4 font-semibold'
      onClick={goHome}
      >
        Return to Home
      </button>

      <button className='bg-amber-300 py-2 px-4 font-semibold'
      onClick={goBack}
      >
        Back
      </button>

      <button className='bg-amber-300 py-2 px-4 font-semibold'
      onClick={goNext}
      >
        Next
      </button>
    </div>
  )
}

export default Navbar2
