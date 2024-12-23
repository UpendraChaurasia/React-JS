import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      <div className="items-container">
        {todoItems.map((item, index) => (
          <TodoItem
            key={index}
            todoDate={item.todoDate}
            todoName={item.name}
            onDeleteClick={onDeleteClick}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
