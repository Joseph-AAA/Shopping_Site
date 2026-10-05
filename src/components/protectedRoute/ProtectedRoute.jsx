import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function ProtectedRoute( ) {
    const { auth } = useAuth();

    if (!auth.isAuthenticated) {
        return <Navigate to="/signin" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;