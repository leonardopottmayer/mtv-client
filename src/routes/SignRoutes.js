import { Routes, Route } from "react-router-dom";

import LoginPage from "../pages/Authentication/LoginPage";
import RegisterPage from "../pages/Authentication/RegisterPage";

function SignRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
    </Routes>
  );
}

export default SignRoutes;
