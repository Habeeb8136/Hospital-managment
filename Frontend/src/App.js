import "./App.css";
import Signin from "./pages/Signin/Signin";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import EmployeeDetails from "./pages/EmployeeDetails/EmployeeDetails";
import DepartmentDetails from "./pages/DepartmentDetails/DepartmentDetails";
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoute from "./ProtectedRoute";
import Employees from "./pages/Employees/Employees";
import Departments from "./pages/Departments/Departments";
import DepartmentHeads from "./pages/DepartmentHeads/DepartmentHeads";


function App() {
  
  return (
    <BrowserRouter>
    <NavBar />    
      <Routes>
        
        <Route path="signin" element={<Signin />} />
        
        <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

        <Route path="employee-detail" element={<EmployeeDetails />} />

        <Route path="department-detail" element={<DepartmentDetails />} />

        <Route path="employees" element={<Employees />} />

        <Route path="departments" element={<Departments />} />

        <Route path="heads" element={<DepartmentHeads />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
