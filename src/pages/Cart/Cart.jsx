import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/Storecontext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartitem, food_list, removeCart, addCart, addCartTotal, url } =
    useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-item-topics">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartitem[item._id] > 0) {
            return (
              <div>
                <div className="cart-item-topics cart-items-item">
                  <img src={url + "/images/" + item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartitem[item._id]}</p>
                  <p>{item.price * cartitem[item._id]}</p>
                  <p className="remove" onClick={() => removeCart(item._id)}>
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart total</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>{addCartTotal()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{10}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total </p>
              <p>{addCartTotal() + 10}</p>
            </div>
            <hr />
          </div>
          <button onClick={() => navigate("/order")}>Proced to Checkout</button>
        </div>
        <div className="promo-code">
          <p>If you have a promocode,Enter it here</p>
          <div className="promocode-input">
            <input type="text" placeholder="Enter promocode" />
            <button>submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
