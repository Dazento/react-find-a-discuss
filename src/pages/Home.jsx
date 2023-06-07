import React from "react";
import { Navigation } from "../components/navigation/Navigation";
import { RandomQuestion } from "../components/RandomQuestion";

const Home = () => {
  return (
    <div>
      <Navigation />
      <h1>Home</h1>
      <RandomQuestion />
    </div>
  );
};

export default Home;
