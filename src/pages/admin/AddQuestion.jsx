import React from "react";
import { Navigation } from "../../components/navigation/Navigation";
import { AddQuestionForm } from "../../components/AddQuestionForm";

const AddQuestion = () => {
  return (
    <div>
      <Navigation />
      <h1>Ajouter une question</h1>
      <div className="background">
        <AddQuestionForm />
      </div>
    </div>
  );
};

export default AddQuestion;
