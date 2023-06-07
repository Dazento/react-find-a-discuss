import React from "react";
import { Navigation } from "../components/navigation/Navigation";
import { AddDiscussForm } from "../components/AddDiscussForm";

const AddDiscuss = () => {
  return (
    <div>
      <Navigation />
      <h1>Discuss</h1>
      <AddDiscussForm />
    </div>
  );
};

export default AddDiscuss;
