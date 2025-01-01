import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import { Order } from "./pages/Order/Order";
import { ToastContainer } from "react-toastify";
import { Add } from "./pages/Add/Add";
import { List } from "./pages/List/List";
const App = () => {
  const url = "http://localhost:4000";
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />

        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
