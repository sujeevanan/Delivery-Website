import { createContext, useEffect, useState } from "react";
export const StoreContext = createContext(null);
import { food_list } from "../assets/assets";
import axios from "axios";

const StoreContextProvider = (props) => {
  const [cartitem, setCartitem] = useState({});
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [food_list, setFoodlist] = useState([]);

  const addCart = async (itemId) => {
    //add cart item
    if (!cartitem[itemId]) {
      setCartitem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartitem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { token } }
      );
    }
  };

  //remove cart item
  const removeCart = async (itemId) => {
    setCartitem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemId },
        { headers: { token } }
      );
    }
  };
  //take the total
  const addCartTotal = () => {
    let totalAmount = 0;
    for (const item in cartitem) {
      if (cartitem[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartitem[item];
      }
    }
    return totalAmount;
  };

  const fetchFoodlist = async () => {
    const response = await axios.get(url + "/api/food/list");
    setFoodlist(response.data.data);
  };

  const loadCartData = async (token) => {
    const response = await axios.post(
      url + "/api/cart/get",
      {},
      { headers: { token } }
    );
    setCartitem(response.data.cartData);
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodlist();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

  const contextValue = {
    food_list,
    cartitem,
    setCartitem,
    addCart,
    removeCart,
    addCartTotal,
    url,
    token,
    setToken,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
