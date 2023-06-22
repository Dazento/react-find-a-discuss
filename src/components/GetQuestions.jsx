import React, { useEffect, useState } from "react";
import QuestionService from "../services/QuestionService";
import Loader from "./Loader";

const GetQuestions = () => {
  const [questions, setQuestions] = useState(null);

  const getQuestions = async () => {
    const data = await QuestionService.getAll();
    setQuestions(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleDelete = async (id) => {
    await QuestionService.delete(id);
    getQuestions();
  };

  const handleUpdate = async (id, value) => {
    await QuestionService.update(id, value);
    getQuestions();
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div>
      {questions ? (
        questions.map((doc, index) => (
          <div>
            <p>{doc.question}</p>
            <a onClick={() => handleDelete(doc.id)}>delete</a>
          </div>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default GetQuestions;
