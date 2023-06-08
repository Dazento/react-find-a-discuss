import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../db/Firebase";

export const RandomQuestion = () => {
  const [randomQuestion, setRandomQuestion] = useState(null);
  const [questions, setQuestions] = useState(null);

  const fetchQuestions = async () => {
    const questionRef = collection(db, "questions");
    const questionSnapshot = await getDocs(questionRef);
    const questions = questionSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setQuestions(questions);
  };

  const getRandomQuestion = () => {
    if (questions) {
      if (questions.length > 0) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        const randomQuestion = questions[randomIndex];
        setRandomQuestion(randomQuestion);
      }
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    getRandomQuestion();
  }, [questions]);

  return (
    <div>
      {randomQuestion && <h2>{randomQuestion.question}</h2>}
      <button onClick={getRandomQuestion} className="btn">
        Random Question
      </button>
    </div>
  );
};
