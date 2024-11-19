import React, { useState } from "react";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import Navbar2 from "../../components/Navbar/Navbar2";
import Footer from "../../components/Footer/Footer";

const Home2 = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <Navbar2 />
      <Header />
      <ExploreMenu setCategory={setCategory} category={category} />
      <FoodDisplay category={category} />
      <AppDownload />
      <Footer />
    </>
  );
};

export default Home2;
