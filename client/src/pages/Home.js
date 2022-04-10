import React from "react";
import Hero from "../components/Home/Hero";
import Categories from "../components/Home/Categories";
import ProducList from "../components/Home/ProducList";
import Sale from "../components/Home/Sale";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <ProducList />
      <Sale />
    </div>
  );
};

export default Home;
