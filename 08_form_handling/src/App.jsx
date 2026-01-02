import React from 'react'
import { useState } from 'react'

// function App() {
  // function handleSubmit(e) {
  //   e.preventDefault(); // Prevent page refresh, which is default behavior of form submission
  //   console.log(e.target)
  //   e.target.reset(); // Clear the form fields
  //   console.log('form submitted');
  // }

//   return (
//     <div>
//       <form onSubmit={(e) =>{
//         handleSubmit(e)
//       }}>
//         <input type="text" placeholder='Enter ur name' />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }


function App() {
  
  
  const [title, setTitle] = useState('');

    function handleSubmit(e) {
    e.preventDefault(); // Prevent page refresh, which is default behavior of form submission
    console.log('form submitted by title:', title);
    setTitle(''); // Clear the form fields
  }

  return (
    <div>
      <form action="">
        <input type="text" value={title} onChange={(e) => {
          setTitle(e.target.value)
          console.log(title)
        }} />
        <button onClick={(e) =>{
          handleSubmit(e)
        }}>Submit</button>
      </form>
    </div>
  )

}

// value same hi rehta hai (input ka).. kyuki wo state ke barabar hi rehta hai
// agar value change karna hai, to state change karna padega
// aur state sirf setState function se hi change hota hai

// agar hum value ko directly change karne ki koshish karenge, to wo change nahi hoga
// kyuki react ko pata nahi chalega ki value change hui hai
// aur react ko pata tab chalega jab state change hogi

// isliye, agar hum value ko directly change karne ki koshish karenge, to wo change nahi hoga
// aur input field me kuch bhi type karne par kuch bhi nahi hoga.. wo blank hi rahega

// 2 way binding.. direct khud se na kr ke.. react ke through changes ya acts krna!



// here, we know that as we're using react.. and react wants everything to be controlled by it self
// so, we have to use state to manage the value of input field
// and onChange event to update the state when user types something in input field

// this is called controlled component

// if we don't use state and onChange event, then it will be uncontrolled component
// and react will not be able to manage the value of input field

// here, value means the text inside the input field.. how it works? very simple
// when we type something in input field, onChange event is triggered
// and it updates the state with the new value
// and then react re-renders the component with the new state
// and the new state is passed to the input field as value prop
// so, the input field always has the value from the state

// this way, react is always in control of the input field
// and we can easily get the value of input field from the state

// ******************************************************
// value field always remains constant.. it is always equal to the state
// so, if we want to change the value of input field, we have to change the state
// and we can only change the state using setState function


export default App
