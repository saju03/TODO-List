import React from 'react'

import { v4 as uuidv4 } from 'uuid';



const Form=({setInputText,todos,setTodos,inputText,setStatus})=>{
  const addTask=(task)=>{
   
   
        setInputText(task.target.value)
    }
    

  const submitTodoHandeler =(e)=>{
    e.preventDefault();
    if(inputText.length>0){

    setTodos([...todos,{text:inputText,completed:false,id:uuidv4()}])
     setInputText('')
  }
   
  }
  const statusHandeler=(e)=>{
    setStatus(e.target.value);
  }
  return(
    <form>
      <input type="text" value={inputText} onChange={addTask} className='todo-input' required={true}/>
      <button className="todo-button" type="submit"  onClick={submitTodoHandeler}>
        Add
      </button>
      <div className='select'>
        <select name='todosearch' onChange={statusHandeler} className="filter-todo">
        <option value="all">all</option>
        <option value="completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
      </select>
      </div>
    </form>
  )

}

export default Form