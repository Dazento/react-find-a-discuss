import React from "react";
import { Navigation } from "../components/navigation/Navigation";
import { RandomQuestion } from "../components/RandomQuestion";

const Home = () => {
  return (
    <div>
      <Navigation />
        <h1>Home</h1>
      <div className="background">
        <RandomQuestion />
      </div>
    </div>
  );
};

export default Home;
