import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/auth/Auth";
import AddQuestion from "./pages/AddQuestion";
import RolesAuthRoute from "./components/navigation/navElements/RolesAuthRoute";
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/add-question"
          element={
            <RolesAuthRoute role={["admin"]}>
              <AddQuestion />
            </RolesAuthRoute>
          }
        />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
