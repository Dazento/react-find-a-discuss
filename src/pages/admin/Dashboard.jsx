import React from "react";
import { Navigation } from "../../components/navigation/Navigation";
import GetQuestions from "../../components/TableQuestion";

const Dashboard = () => {
  return (
    <div>
      <Navigation />
      <h1>Dashboard</h1>
      <GetQuestions />
    </div>
  );
};

export default Dashboard;
