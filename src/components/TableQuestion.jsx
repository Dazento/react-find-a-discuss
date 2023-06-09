import React, { useEffect, useState } from "react";
import QuestionService from "../services/QuestionService";
import Loader from "./Loader";
import "../styles/components/_table.scss";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";

const GetQuestions = () => {
  const [questions, setQuestions] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getQuestions = async () => {
    const data = await QuestionService.getAll();
    setQuestions(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setIsLoading(false);
  };

  const handleDelete = async (id) => {
    await QuestionService.delete(id);
    getQuestions();
    setIsLoading(false);
  };

  const handleUpdate = async (id, value) => {
    await QuestionService.update(id, value);
    getQuestions();
    setIsLoading(false);
  };

  useEffect(() => {
    getQuestions();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <table className="container">
      <thead>
        <tr>
          <th>Id</th>
          <th>Question</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {!questions ? (
          <Loader />
        ) : (
          questions.map((doc, index) => (
            <tr key={index}>
              <td data-title="Id">{index}</td>
              <td data-title="Question">{doc.question}</td>
              <td data-title="Actions">
                <button
                  className="action-btn"
                  onClick={() => handleUpdate(doc.id)}
                >
                  <HiOutlinePencil />
                </button>
                <button
                  className="action-btn"
                  onClick={() => handleDelete(doc.id)}
                >
                  <HiOutlineTrash />
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default GetQuestions;
