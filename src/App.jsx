
import './App.css';
import Form from './components/todoForm';
import List from './components/todoList';
import { useState, useEffect } from 'react';



function App() {

  const [inputText,setInputText]=useState("")
  const [todos,setTodos]=useState([])
  const [status,setStatus]=useState("all")
  const [filteredTodos,setFilteredTodos]=useState([])


  //only once for local storage
  useEffect(()=>{
    getLocalTodos();

  },[])

    //useeffects
    useEffect(()=>{
 fiterHandeler();
 saveLocalTodos();
    },[todos,status])

//fuvtions
const fiterHandeler=()=>{
  console.log(status);
  switch(status){
    case 'completed':
      setFilteredTodos(todos.filter(todo => todo.completed===true))
      break;
    case 'Uncompleted':
      setFilteredTodos(todos.filter(todo => todo.completed===false))
      break;
      default:
        setFilteredTodos(todos);
        break;
      

  }
}

const saveLocalTodos =()=>{

    localStorage.setItem('todos',JSON.stringify(todos))
  
}
const getLocalTodos = () =>{
  if (localStorage.getItem("todos")===null){
    localStorage.setItem('todos',JSON.stringify([]))
  }
  else{
    let todoLocal=JSON.parse(localStorage.getItem('todos'))
    setTodos(todoLocal)
  }

}

   return (
    <div className="App">
      <header> TODO List </header>
      <Form todos={todos} 
      setTodos= {setTodos}
      setInputText={setInputText}
      inputText={inputText}
      setStatus={setStatus}
     
      />
      <List  setTodos={setTodos} todos={todos}  filteredTodos ={filteredTodos} />
      </div>
  );
}

export default App;
