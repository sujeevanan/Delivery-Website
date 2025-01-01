import React, { useContext, useEffect, useState } from "react";
import "./Placeorder.css";
import { StoreContext } from "../../context/Storecontext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Placeorder = () => {
  const { addCartTotal, token, food_list, cartitem, url } =
    useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartitem[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartitem[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: addCartTotal() + 350,
    };
    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error");
    }
    const navigate = useNavigate();
    useEffect(() => {
      if (!token) {
        navigate("/cart");
      } else if (addCartTotal() === 0) {
        navigate("/cart");
      }
    }, [token]);
  };
  return (
    <form className="place-order" onSubmit={placeOrder}>
      <div className="place-order-left">
        <p className="title"> Deivery Information</p>
        <div className="multi-fields">
          <input
            required
            name="firstName"
            onChange={onChangeHandler}
            type="text"
            placeholder="First-name"
            value={data.firstName}
          />
          <input
            required
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            type="text"
            placeholder="Last-name"
          />
        </div>
        <input
          required
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          type="text"
          placeholder="Email Address"
        />
        <input
          required
          type="text"
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          placeholder="Street"
        />
        <div className="multi-fields">
          <input
            required
            type="text"
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            placeholder="City"
          />
          <input
            required
            name="state"
            onChange={onChangeHandler}
            value={data.state}
            type="text"
            placeholder="State"
          />
        </div>
        <div className="multi-fields">
          <input
            name="zipcode"
            required
            onChange={onChangeHandler}
            value={data.zipcode}
            type="text"
            placeholder="Zip Code"
          />
          <input
            required
            name="country"
            onChange={onChangeHandler}
            value={data.country}
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          required
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
          type="text"
          placeholder="Phone number"
        />
      </div>
      <div className="place-order-right">
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
          <button type="submit">Proced to Payment</button>
        </div>
      </div>
    </form>
  );
};

export default Placeorder;
