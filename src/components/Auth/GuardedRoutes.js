import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { api, setupAuthInterceptor } from "../../libs/api"; // Importando de api.js
import { fetchUserData } from "../../redux/actions/CurrentUserAction";

const GuardedRoutes = ({ children, redirectTo }) => {
    const token = localStorage.getItem("authToken");
    const dispatch = useDispatch();
    const { userName } = useSelector(state => state.user);

    useEffect(() => {
        if (token) {
            setupAuthInterceptor(token);
            if (!userName) {
                dispatch(fetchUserData(token));
            }
        }
    }, [token, dispatch, userName]);

    if (!token) {
        return <Navigate to={redirectTo} replace />;
    }

    return children;
};

export default GuardedRoutes;
