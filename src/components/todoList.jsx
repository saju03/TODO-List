import React,{useState} from "react";
import Todo from "./todo"

const List =({todos,setTodos,filteredTodos})=>{


    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo  setTodos={setTodos} todos={todos} todo={todo}  text={todo.text} key={todo.id}/>
                ))}
                </ul>   
            
        </div>
    )
}
export default List;   