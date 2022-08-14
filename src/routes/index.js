import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import SignRoutes from "./SignRoutes";
import OtherRoutes from "./OtherRoutes";
import AdminRoutes from "./AdminRoutes";

import { useAuth } from "../contexts/auth";

function Routes() {
  const { setUserFromStorage } = useAuth();

  useEffect(() => {
    setUserFromStorage();
  }, []);

  const { signed } = useAuth();

  return (
    <Router>
      {signed && (
        <>
          <AdminRoutes /> <OtherRoutes />
        </>
      )}
      {!signed && (
        <>
          <SignRoutes /> <OtherRoutes />
        </>
      )}
    </Router>
  );
}

// Export
export default Routes;
