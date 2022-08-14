import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";

function OtherRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      {/* <Route path="/login" element={<Navigate to="/" />}></Route>
      <Route path="/register" element={<Navigate to="/" />}></Route> */}
    </Routes>
  );
}

export default OtherRoutes;
