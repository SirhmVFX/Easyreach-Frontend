import React from "react";
import "../../Easy.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Home/Hero";
import FlashSales from "../../components/Home/Flash";
import Categories from "../../components/Home/Categories";
import BestSelling from "../../components/Home/BestSelling";
import Advert from "../../components/Home/Advert";
import ProductList from "../../components/Home/Products";
import NewArrivals from "../../components/Home/NewArrivals";
import Foot from "../../components/Home/Foot";

const Homepage = () => {
  return (
    <main>
      <Header />
      <Hero />
      <FlashSales />
      <Categories />
      <BestSelling />
      <Advert />
      <ProductList />
      <NewArrivals />
      <Foot />
      <Footer />
    </main>
  );
};

export default Homepage;
