import { Navigate } from "react-router-dom";

const GuardedRoutes = ({ children, redirectTo }) => {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to={redirectTo} replace />;
    }

    return children;
};

export default GuardedRoutes