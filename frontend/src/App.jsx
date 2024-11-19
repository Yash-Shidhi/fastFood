import React from "react";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import MyOrders from "./pages/MyOrders/MyOrders";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import Home2 from "./pages/Home/Home2";
import Jokes from "./pages/Jokes/Jokes";

const App = () => {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home2 />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/myorder" element={<MyOrders />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/getData" element={<Jokes />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
