import styles from "./Input.module.css";
const FoodInput = ({ handleOnChange }) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Iteam here"
      className={styles.foodInput}
      //onChange={(event) => handleOnChange(event)}
      onKeyDown={handleOnChange}
    />
  );
};

export default FoodInput;
