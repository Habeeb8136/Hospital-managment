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
import { useSelector } from "react-redux";

function App() {
  const user=useSelector(state=>state.user)
  
  return (
    <BrowserRouter>
    <NavBar />    
      <Routes>
        
        <Route path="signin" element={<Signin />} />
        
        <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

        <Route path="employee-detail" element={<EmployeeDetails />} />

        <Route path="department-detail" element={<DepartmentDetails />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
