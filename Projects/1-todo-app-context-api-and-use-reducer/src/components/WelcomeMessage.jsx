import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store.jsx";
import styles from "./WelcomeMessage.module.css";
const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy Your Daye</p>
  );
};

export default WelcomeMessage;
