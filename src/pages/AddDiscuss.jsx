import React from "react";
import { Navigation } from "../components/navigation/Navigation";
import { AddQuestionForm } from "../components/AddQuestionForm";

const AddQuestion = () => {
  return (
    <div>
      <Navigation />
      <h1>Add a question</h1>
      <AddQuestionForm />
    </div>
  );
};

export default AddQuestion;
