import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store.jsx";
import { useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";
function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);

  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    addNewItem(todoName, todoDate);
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
  };
  return (
    <>
      <div className="container">
        <form
          action=""
          className="row kg-row"
          onSubmit={handleAddButtonClicked}
        >
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter Todo Here"
              className="form-controle"
              ref={todoNameElement}
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              name=""
              id=""
              className="form-controle"
              ref={todoDateElement}
            />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-success kg-button">
              <BiMessageAdd />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddTodo;
