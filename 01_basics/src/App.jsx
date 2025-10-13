function App() {
  return (
    // returning multiple elements without a wrapper will throw an error eg
    // <div id = "div1">
    //   <h1>Hello World</h1>
    // </div>
    // <div id="div2">
    //   <h1>Hello World</h1>
    // </div>

    // To fix this we can use a wrapper div or React.Fragment
    // 1. everything inside a single div
    // <div>
    //   <div id="first-div">
    //     <h1>hello div 1</h1>
    //   </div>
    //   <div id="second-div">
    //     <h1>hello div 2</h1>
    //   </div>
    // </div>
    // 2. using React.Fragment
    <>
      <div id="first-div">
        <h1>hello div 1</h1>
      </div>
      <div id="second-div">
        <h1>hello div 2</h1>
      </div>
    </>
  )
}

export default App
