import React, { useState } from "react";
import QuestionService from "../services/QuestionService";

export const AddQuestionForm = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addQuestion(value);
    console.log(value);

    setValue("");
  };

  const addQuestion = (question) => {
    console.log(question);
    QuestionService.add({
      question: question,
      active: true,
    });

    // const docRef = doc(db, "questions", `${uuid()}`);

    // setDoc(docRef, {
    //   question: question,
    //   active: true,
    // });
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
      <button type="submit" className="btn" disabled={value ? false : true}>
        Add
      </button>
    </form>
  );
};
