import { db } from "../db/Firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

const questions = collection(db, "questions");

class QuestionService {
  getAll = () => {
    return getDocs(questions);
  };

  add = (data) => {
    return addDoc(questions, data);
  };

  update = (id, updatedQuestion) => {
    const questionDoc = doc(db, "questions", id);
    return updateDoc(questionDoc, updatedQuestion);
  };

  delete = (id) => {
    const questionDoc = doc(db, "questions", id);
    return deleteDoc(questionDoc);
  };
}

export default new QuestionService();
