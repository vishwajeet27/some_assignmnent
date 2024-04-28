import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count  , setCount] = useState([{
    title :"go to gym",
    description: "go to gym today",
    id :1
  },{
    title :"go to park",
    description: "go to park today",
    id :2
  },{
    title :"go to hotel",
    description: "go to hotel today",
    id :3
  }])

  function addANewTodo(){
    setCount([...count, {
      id :4,
      title : Math.random(),
      description : Math.random()
    }])
  }

  return (
    <div>
    <button onClick={addANewTodo} >Add a todo</button>
      {count.map(function(todo){
        return <Todos title={todo.title} description= {todo.description} ></Todos>
      })}
    </div>
  )
}
function Todos({title, description}){
  return <div>
  <h1>{title}</h1>
  <h5>{description}</h5>
  </div>
  

}
export default App
