import { Navigate } from "react-router-dom";

const LoginGuardedRoute = ({ children, redirectTo }) => {
    const token = localStorage.getItem("authToken");

    if (token) {
        return <Navigate to={redirectTo} replace />;
    }

    return children;
};

export default LoginGuardedRoute