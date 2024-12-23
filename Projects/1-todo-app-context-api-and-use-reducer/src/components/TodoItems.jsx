import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store.jsx";
import TodoItem from "./TodoItem";
const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <>
      <div className="items-container">
        {todoItems.map((item, index) => (
          <TodoItem
            key={index}
            todoDate={item.todoDate}
            todoName={item.name}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
