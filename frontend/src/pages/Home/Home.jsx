import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Exploremenu from "../../components/Exploremenu/Exploremenu";
import Fooddisplay from "../../components/FoodDisplay/Fooddisplay";
import Appdownload from "../../components/Appdownload/Appdownload";

const Home = () => {
  const [catergory, setCatergory] = useState("All");
  return (
    <div>
      <Header />
      <Exploremenu catergory={catergory} setCatergory={setCatergory} />
      <Fooddisplay catergory={catergory} />
      <Appdownload />
    </div>
  );
};

export default Home;
