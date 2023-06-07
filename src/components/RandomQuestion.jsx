import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../db/Firebase";

export const RandomQuestion = () => {
  const [randomQuestion, setRandomQuestion] = useState(null);

  const getRandomQuestion = async () => {
    const questionRef = collection(db, "questions");
    const questionSnapshot = await getDocs(questionRef);
    const questionList = questionSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));

    if (questionList.length > 0) {
      const randomIndex = Math.floor(Math.random() * questionList.length);
      const randomQuestion = questionList[randomIndex];
      setRandomQuestion(randomQuestion);
    }
  }

  useEffect(() => {
    getRandomQuestion();
  }, []);

  return (
    <div>
      {randomQuestion && <h2>{randomQuestion.question}</h2>}
      <button onClick={getRandomQuestion}>Random Question</button>
    </div>
  )
}
