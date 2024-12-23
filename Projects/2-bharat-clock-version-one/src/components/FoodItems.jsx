import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ Items }) => {
  let [activeItems, setActiveItems] = useState([]);
  const handleBuyButtonClicked = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };
  return (
    <>
      <ul>
        <li className="list-group">
          {Items.map((item) => (
            <Item
              key={item}
              foodItem={item}
              handleBuyButton={(event) => handleBuyButtonClicked(item, event)}
              bought={activeItems.includes(item)}
              //handleBuyButton={() => console.log(`${item} Buy button clicked`)}
            ></Item>
          ))}
        </li>
      </ul>
    </>
  );
};

export default FoodItems;
