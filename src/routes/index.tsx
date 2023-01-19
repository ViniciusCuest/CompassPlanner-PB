import { Routes as Router, Route, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthConext";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function Routes() {
   const { isLogged } = useAuth();
   
   return (
      <Router>
         <Route
            path="/Register"
            element={<Register />}
         />
         <Route
            path="/Login"
            element={<Login />}
         />
         <Route
            path="/"
            element={isLogged ? <Dashboard /> : <Navigate replace to={'/login'} />}
         />
      </Router>
   );
}