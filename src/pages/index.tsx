import React from "react";
import Description from "../components/home/description";
import Jumbotron from "../components/home/jumbotron";
import Portfolio from "../components/home/portfolio";
import Navbar from "../components/shared/navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Description />
      <Portfolio />
    </>
  );
};

export default HomePage;
