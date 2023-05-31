import React from "react";

const Todo = ({ text, todos, todo, setTodos }) => {
  const deleteHandeler = () => {
    setTodos(todos.filter((elem) => elem.id !== todo.id));
  };
  const completeHandeler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button className="complete-btn" onClick={completeHandeler}>
        O
      </button>
      <button className="trash-btn" onClick={deleteHandeler}>
        X
      </button>
    </div>
  );
};

export default Todo;
