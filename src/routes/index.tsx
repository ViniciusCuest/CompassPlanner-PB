import { Routes as Router, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function Routes() {
   const isLoggedIn = true;
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
            element={isLoggedIn ? <Dashboard /> : <Navigate replace to={'/login'} />}
         />
      </Router>
   );
}