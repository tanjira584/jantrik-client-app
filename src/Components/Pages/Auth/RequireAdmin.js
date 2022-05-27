import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);

    if (loading || adminLoading) {
        return <p className="text-center"> Loading.....</p>;
    }
    if (!user || !admin) {
        return <Navigate to="/"></Navigate>;
    }
    return children;
};

export default RequireAdmin;
