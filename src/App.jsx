import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RolesAuthRoute from "./components/navigation/navElements/RolesAuthRoute";
import AddQuestion from "./pages/admin/AddQuestion";
import Dashboard from "./pages/admin/Dashboard";
import Auth from "./pages/auth/Auth";

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
            <RolesAuthRoute role={["super-admin"]}>
              <Dashboard />
            </RolesAuthRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
