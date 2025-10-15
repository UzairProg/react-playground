import Card from "./components/Card"

function App() {
  return (
    <div className="parent">
      <Card name="uzair" age={19}/>
      <Card name="john" age={21}/>
    </div>
  )
}
// props are used to pass data from parent component to child component

/*
props are simply just an object that holds the data we want to pass to the child component

its same like function parameters.. we're passing data to the function.. attribute_name = "value"
and another child component can access that data using props object.. function func_name(props){props.attribute_name}


**********************important explanation
"we know <card/< and card() are same.. so <card name="uzair" age={19}/> is same as card({name:"uzair", age:19})
and we're accessing that data using props.name and props.age... as function Card(props){  return <h2>{props.name}, {props.age}</h2>  }""
*/

export default App
