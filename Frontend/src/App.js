import "./App.css";
import Signin from "./pages/Signin/Signin";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import EmployeeDetails from "./pages/EmployeeDetails/EmployeeDetails";
import DepartmentDetails from "./pages/DepartmentDetails/DepartmentDetails";
import { useState } from "react";

function App() {
  const [userLogged, setUserLogged] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={userLogged?<Navigate replace to="/Dashboard" />:<Navigate replace to="/Signin"/>} />
        <Route path="Signin" element={<Signin />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Employee-detail" element={<EmployeeDetails />} />
        <Route path="Department-detail" element={<DepartmentDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
