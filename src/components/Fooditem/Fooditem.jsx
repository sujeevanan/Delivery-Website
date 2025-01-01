import React, { useContext } from "react";
import "./Fooditem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/Storecontext";

const Fooditem = ({ id, name, description, price, image }) => {
  const { cartitem, addCart, removeCart, url } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img
          src={url + "/images/" + image}
          alt="image"
          className="food-item-image"
        />
        {!cartitem[id] ? (
          <img
            className="add"
            src={assets.add_icon_white}
            onClick={() => addCart(id)}
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.add_icon_green}
              alt="add-icon-green"
              onClick={() => addCart(id)}
            />
            {cartitem[id]}
            <img
              src={assets.remove_icon_red}
              alt="remove-icon-red"
              onClick={() => removeCart(id)}
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <p>{name}</p>
        <img src={assets.rating_starts} alt="" />
      </div>
      <p className="food-item-description">{description}</p>
      <p className="food-item-price">${price}</p>
    </div>
  );
};

export default Fooditem;
