import { Routes as Router, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function Routes() {
   const isLoggedIn = false;
   return (
      <Router>
         <Route
            path="/register"
            element={<Register />}
         />
         <Route
            path="/login"
            element={<Login />}
         />
         <Route
            path="/"
            element={isLoggedIn ? <Dashboard /> : <Navigate replace to={'/login'} />}
         />
      </Router>
   );
}