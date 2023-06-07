import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddDiscuss from "./pages/AddDiscuss";
import AuthDetails from "./components/auth/AuthDetails";
import Auth from "./pages/auth/Auth";
import AdminElement from "./components/navigation/navElements/AdminElement";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-discuss" element={<AddDiscuss />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
      <AuthDetails />
    </div>
  );
}

export default App;
