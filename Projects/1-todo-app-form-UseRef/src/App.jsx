import { useState } from "react";
import AddName from "./components/AddName.jsx";
import AddTodo from "./components/AddTodo.jsx";
import TodoItems from "./components/TodoItems.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import "./App.css";
function App() {
  let initialTodoItems = [];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    // setTodoItems((currValue) => {
    //   const newTodoItems = [
    //     ...currValue,
    //     { name: itemName, todoDate: itemDueDate },
    //   ];
    //   return newTodoItems;
    // });
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, todoDate: itemDueDate },
    ]);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <div>
        <center className="todo-container">
          <div className="items-container">
            <AddName />
            <AddTodo onNewItem={handleNewItem} />
          </div>
          {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
          <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
        </center>
      </div>
    </>
  );
}

export default App;
