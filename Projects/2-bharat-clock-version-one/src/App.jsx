import React, { useState } from "react";
import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let [foodItems, setFoodItems] = useState([]);
  //let [textToShow, setTextState] = useState("Food Iteam Entered by user");
  //console.log(`Current value of textState: ${textToShow}`);
  const handleOnChange = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };
  return (
    <Container>
      {/* <center>
        <ClockHeading></ClockHeading>
        <ClockSlogan></ClockSlogan>
        <CurrentTime></CurrentTime>
      </center> */}
      <h1>Healthy Food</h1>
      <ErrorMessage Items={foodItems}></ErrorMessage>
      <FoodInput handleOnChange={handleOnChange}></FoodInput>
      <FoodItems Items={foodItems}></FoodItems>
    </Container>
  );
}

export default App;
