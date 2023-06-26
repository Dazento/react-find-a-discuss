import React, { useState } from "react";
import QuestionService from "../services/QuestionService";

export const AddQuestionForm = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addQuestion(value);

    setValue("");
  };

  const addQuestion = (question) => {
    QuestionService.add({
      question: question,
      active: true,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Add a question"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
};
