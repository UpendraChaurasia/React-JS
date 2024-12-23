import { useState } from "react";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";

function App() {
  const [calVal, setCalValue] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalValue("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalValue(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalValue(newDisplayValue);
    }
  };

  return (
    <>
      <center>
        <div className={styles.calculator}>
          <Display displayValue={calVal}></Display>
          <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
        </div>
      </center>
    </>
  );
}

export default App;
