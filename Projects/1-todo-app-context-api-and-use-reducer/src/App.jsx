import { useState, useReducer } from "react";
import AddName from "./components/AddName.jsx";
import AddTodo from "./components/AddTodo.jsx";
import TodoItems from "./components/TodoItems.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import "./App.css";
import TodoItemsContextProvide from "./store/todo-items-store.jsx";

function App() {
  return (
    <>
      <TodoItemsContextProvide>
        <center className="todo-container">
          <div className="items-container">
            <AddName />
            <AddTodo />
          </div>
          <WelcomeMessage></WelcomeMessage>
          <TodoItems />
        </center>
      </TodoItemsContextProvide>
    </>
  );
}

export default App;
