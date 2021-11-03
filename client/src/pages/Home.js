import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Carousel from "../components/Carousel"
import "@mui/styles"

const Home = () => {
  return (
    <div className="container">

      <CategoryMenu />
      <ProductList />
      {/* <Cart /> */}

    </div>
  );
};

export default Home;
