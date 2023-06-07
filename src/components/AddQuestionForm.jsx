import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../db/Firebase";
import { v4 as uuid } from "uuid";

export const AddQuestionForm = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addQuestion(value);

    setValue("");
  };

  const addQuestion = (question) => {
    const docRef = doc(db, "questions", `${uuid()}`);

    setDoc(docRef, {
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
      <button type="submit">Add</button>
    </form>
  );
};
