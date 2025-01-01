import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h1>Order your favourite Food here</h1>
        <p>
          Welcome to Tasty Canteen, your go-to destination for fast, fresh, and
          delicious food delivered straight to your door! Whether you're craving
          local favorites, international cuisine, or something new, we bring the
          best restaurants right to your fingertips. With easy browsing,
          exclusive deals, and quick delivery, satisfying your hunger has never
          been this simple!
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
