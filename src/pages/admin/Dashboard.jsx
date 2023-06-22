import React from "react";
import { Navigation } from "../../components/navigation/Navigation";
import GetQuestions from "../../components/GetQuestions";

const Dashboard = () => {
  return (
    <div>
      <Navigation />
      <GetQuestions />
    </div>
  );
};

export default Dashboard;
