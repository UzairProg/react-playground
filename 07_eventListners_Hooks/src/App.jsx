import React from 'react'
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  function handleClick() {
    alert('Hello!');
}

  function increaseCount(){
    setCount(count+1)
  }

  function decreaseCount(){
    setCount(count-1)
  }

  function increaseCountBy5(){
    setCount(prev => prev+1);
    setCount(prev => prev+1);
    setCount(prev => prev+1);
    setCount(prev => prev+1);
    setCount(prev => prev+1);

  }

  return (
    <div>
      <div className='counter'>
        <div className='count'>
          {count}
        </div>

        <button onClick={increaseCount}>
          Increase
        </button>

        <button onClick={decreaseCount}>
          Decrease
        </button>

        <button onClick={increaseCountBy5}>
          Increase By 5
        </button>
      </div>

      <button onClick={handleClick}>Say Hello</button>;
    </div>
  )
}

export default App
