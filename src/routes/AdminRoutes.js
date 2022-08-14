import { Routes, Route } from "react-router-dom";

import AdminPage from "../pages/Admin/AdminPage";
import AdminPhrases from "../components/AdminPhrases/AdminPhrases";
import AdminUsers from "../components/AdminUsers/AdminUsers";

function OtherRoutes() {
  return (
    <Routes>
      <Route path="/admin" exact element={<AdminPage />}></Route>
      <Route path="/admin/phrases" exact element={<AdminPhrases />}></Route>
      <Route path="/admin/users" exact element={<AdminUsers />}></Route>
    </Routes>
  );
}

export default OtherRoutes;
