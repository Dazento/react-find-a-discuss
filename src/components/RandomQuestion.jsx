import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import QuestionService from "../services/QuestionService";

export const RandomQuestion = () => {
  const [randomQuestion, setRandomQuestion] = useState(null);
  const [questions, setQuestions] = useState(null);

  const getQuestions = async () => {
    const data = await QuestionService.getAll();
    setQuestions(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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
    getQuestions();
  }, []);

  useEffect(() => {
    getRandomQuestion();
  }, [questions]);

  return (
    <div>
      {randomQuestion ? <h2>{randomQuestion.question}</h2> : <Loader />}
      <button onClick={getRandomQuestion} className="btn">
        Random Question
      </button>
    </div>
  );
};
