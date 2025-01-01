import React, { useContext } from "react";
import "./Fooddisplay.css";
import { StoreContext } from "../../context/Storecontext";
import Fooditem from "../Fooditem/Fooditem";

const Fooddisplay = ({ catergory }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h1> Top Dishes near you</h1>
      <div className="food-display-item">
        {food_list.map((item, index) => {
          if (catergory === "All" || catergory === item.category) {
            return (
              <Fooditem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Fooddisplay;
