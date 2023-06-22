import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RolesAuthRoute from "./components/navigation/navElements/RolesAuthRoute";
import AddQuestion from "./pages/admin/AddQuestion";
import Dashboard from "./pages/admin/Dashboard";

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
        <Route
          path="/dashboard"
          element={
            <RolesAuthRoute roles={["admin"]}>
              <Dashboard />
            </RolesAuthRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
