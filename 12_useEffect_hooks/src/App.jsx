import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChanging() {
    console.log('A ki value change ho gyi');
  }

  function bChanging() {
    console.log('B ki value change ho gyi');
  }

  useEffect(function(){
    aChanging()
  },[a])
  
  useEffect(function(){
    bChanging()
  },[b])

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button
        onClick={() => {
          setA(a + 1)
        }}
      >Change A</button>
      <button
        onClick={() => {
          setB(b - 1)
        }}
      >Change B</button>
    </div>
  )
}

export default App

/* 
useEffect: it is a hook that allows you to perform side effects in function components. It takes two arguments: a function (the effect) and an optional array of dependencies.
When the dependencies change, the effect function is executed.

In the provided code, there are two state variables, a and b, each with its own useEffect hook. The first useEffect hook is triggered whenever the value of a changes, calling the aChanging function, which logs a message to the console. Similarly, the second useEffect hook is triggered when b changes, calling the bChanging function.

in short, useEffect helps to run specific code in response to changes in state or props.
*/